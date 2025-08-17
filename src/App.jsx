import React, { useState, useEffect } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, BarChart, Bar } from 'recharts'
import { MessageCircle, Activity, TrendingUp, Heart, Brain, Clock, Users, CheckCircle, AlertTriangle } from 'lucide-react'

// Import the data files you already have (copy your data/ into src/data/)
import memberProfile from '../data/member_profile.js'
import healthMetrics from '../data/healthMetrics.js'
import communications from '../data/communications.js'
import interventions from '../data/interventions.js'
import teamProfiles from '../data/teamProfiles.js'
const teamMembersObj = teamProfiles?.teamMembers ?? teamProfiles ?? {};





// small helper components (kept inline for simplicity)
function MetricCard({ title, value, change, trend, icon: Icon, color }) {
  const colorClasses = {
    red: 'text-red-600 bg-red-50',
    blue: 'text-blue-600 bg-blue-50',
    purple: 'text-purple-600 bg-purple-50',
    green: 'text-green-600 bg-green-50'
  }
  return (
    <div className="metric-card bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-2xl font-bold text-gray-900 mt-1">{value}</p>
          <div className="flex items-center mt-2">
            {trend === 'up' ? (
              <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            ) : (
              <TrendingUp className="w-4 h-4 text-green-500 mr-1 transform rotate-180" />
            )}
            <span className="text-sm text-green-600 font-medium">{change}</span>
          </div>
        </div>
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${colorClasses[color] || ''}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  )
}

function MessageBubble({ message }) {
  const senderName = message.sender?.name ?? (typeof message.sender === 'string' ? message.sender : 'Unknown')
  const isFromMember = senderName === 'Rohan'
  return (
    <div className={`message-bubble flex ${isFromMember ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${isFromMember ? 'bg-blue-600 text-white rounded-br-md' : 'bg-gray-100 text-gray-900 rounded-bl-md'}`}>
        {!isFromMember && <p className="text-xs font-semibold mb-1 opacity-70">{senderName}</p>}
        <p className="text-sm leading-relaxed">{message.content}</p>
        <p className={`text-xs mt-2 ${isFromMember ? 'text-blue-100' : 'text-gray-500'}`}>{new Date(message.timestamp).toLocaleString()}</p>
      </div>
    </div>
  )
}

function TimelineEvent({ date, title, description, status }) {
  return (
    <div className="flex items-start space-x-4">
      <div className={`w-3 h-3 rounded-full mt-2 ${status === 'completed' ? 'bg-green-500' : status === 'current' ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
      <div className="flex-1">
        <div className="flex items-center space-x-2">
          <span className="text-sm font-semibold text-gray-900">{date}</span>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${status === 'completed' ? 'bg-green-100 text-green-800' : status === 'current' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'}`}>
            {status}
          </span>
        </div>
        <h4 className="font-medium text-gray-900 mt-1">{title}</h4>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  )
}

export default function App() {
  const [activeTab, setActiveTab] = useState('overview')
  const [selectedWeek, setSelectedWeek] = useState(1)
  const [selectedMetric, setSelectedMetric] = useState('systolic')
  const [selectedTeamMember, setSelectedTeamMember] = useState('all')
  const [filteredMessages, setFilteredMessages] = useState(communications)
  const [selectedIntervention, setSelectedIntervention] = useState(null)


  // derive team array from the imported teamMembers object
  const teamArray = React.useMemo(() => {
    if (!teamMembersObj || typeof teamMembersObj !== 'object') return [];

    return Object.values(teamMembersObj).map(tm => {
      const weeklyFreq = tm.weeklyInteractionFrequency ?? 0;
      // Heuristics to build fields your UI expects - replace with real fields if you add them in the data file
      const hours = tm.hours ?? Math.round(weeklyFreq * 10);           // example mapping
      const consultations = tm.consultations ?? Math.round(weeklyFreq * 3);
      const avgResponseTime = tm.avgResponseTime ?? (weeklyFreq >= 5 ? 1.2 : weeklyFreq >= 3 ? 2.5 : 4.5);

      return {
        id: tm.id ?? tm.name,
        name: tm.name,
        role: tm.role,
        specialization: (tm.specialFocus || []).join(', ') || tm.role,
        weeklyFreq,
        hours,
        consultations,
        avgResponseTime
      };
    });
  }, [teamMembersObj]);




  const metrics = React.useMemo(() => {
    if (!healthMetrics || typeof healthMetrics !== "object") return [];
    const order = ["baseline", "month1", "month2", "month3", "month4", "month5", "month6", "month7", "month8"];
    return order
      .filter(k => healthMetrics[k])
      .map(k => {
        const entry = healthMetrics[k];
        return {
          month: entry?.date || k,
          systolic: entry?.biomarkers?.bloodPressure?.systolic ?? 0,
          diastolic: entry?.biomarkers?.bloodPressure?.diastolic ?? 0,
          cholesterol: entry?.biomarkers?.cholesterol?.total ?? 0,
          cognitive: entry?.assessments?.cognitiveScore ?? 0,
          sleep: entry?.wearableData?.sleep?.duration ?? 0,
          hrv: entry?.wearableData?.hrv?.rmssd ?? 0,
        };
      });
  }, [healthMetrics]);

  useEffect(() => {
    if (selectedTeamMember === 'all') {
      setFilteredMessages(communications)
      return
    }
    const filtered = communications.filter(m => {
      const name = m.sender?.name ?? (typeof m.sender === 'string' ? m.sender : '')
      return name === selectedTeamMember || name === 'Rohan'
    })
    setFilteredMessages(filtered)
  }, [selectedTeamMember])

  // guard if healthMetrics empty]
  const initialMetrics = metrics.length ? metrics[0] : { systolic: 120, diastolic: 80, cholesterol: 160, cognitive: 100, sleep: 7, hrv: 50 };
  const currentMetrics = metrics.length ? metrics[metrics.length - 1] : initialMetrics;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-4">
      <header className="glass-effect border-b border-gray-200 mb-4 p-4 rounded-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Elyx Member Journey</h1>
              <p className="text-gray-600">{memberProfile?.preferredName ?? memberProfile?.name ?? 'Rohan Patel'} - 8 Month Transformation</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-right">
              <p className="text-sm text-gray-600">Current Week</p>
              <p className="font-semibold text-gray-900">Week {selectedWeek} of 32</p>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-sm font-semibold text-gray-700">RP</span>
            </div>
          </div>
        </div>
      </header>

      <nav className="mb-4">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
          {[
            { id: 'overview', label: 'Dashboard', icon: Activity },
            { id: 'communication', label: 'Communications', icon: MessageCircle },
            { id: 'progress', label: 'Progress', icon: TrendingUp },
            { id: 'decisions', label: 'Decision Tracking', icon: Brain },
            { id: 'analytics', label: 'Team Analytics', icon: Users }
          ].map(tab => {
            const Icon = tab.icon
            return (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`nav-tab flex items-center space-x-2 px-4 py-2 rounded-md font-medium transition-all duration-200 ${activeTab === tab.id ? 'nav-tab active' : 'text-gray-600 hover:text-gray-900'}`}>
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto space-y-6">
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <MetricCard title="Blood Pressure" value={`${currentMetrics.systolic}/${currentMetrics.diastolic}`} change={`-${initialMetrics.systolic - currentMetrics.systolic}/-${initialMetrics.diastolic - currentMetrics.diastolic}`} trend="down" icon={Heart} color="red" />
              <MetricCard title="Cholesterol" value={`${currentMetrics.cholesterol} mg/dL`} change={`-${initialMetrics.cholesterol - currentMetrics.cholesterol}`} trend="down" icon={Activity} color="blue" />
              <MetricCard title="Cognitive Score" value={currentMetrics.cognitive} change={`+${currentMetrics.cognitive - initialMetrics.cognitive}`} trend="up" icon={Brain} color="purple" />
              <MetricCard title="Sleep Quality" value={`${currentMetrics.sleep}h`} change={`+${(currentMetrics.sleep - initialMetrics.sleep).toFixed(1)}h`} trend="up" icon={Clock} color="green" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="metric-card bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Metrics Progression</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={metrics}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="systolic" stroke="#ef4444" strokeWidth={3} dot={{ r: 6, fill: '#ef4444' }} name="Systolic BP" />
                    <Line type="monotone" dataKey="cognitive" stroke="#8b5cf6" strokeWidth={3} dot={{ r: 6, fill: '#8b5cf6' }} name="Cognitive Score" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="metric-card bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Member Journey Timeline</h3>
                <div className="space-y-4">
                  <TimelineEvent date="Month 1" title="Initial Assessment" description="Comprehensive health evaluation and baseline measurements" status="completed" />
                  <TimelineEvent date="Month 4" title="Mid-Program Review" description="First major progress evaluation and plan adjustments" status="completed" />
                  <TimelineEvent date="Month 7" title="Final Assessment" description="Comprehensive health re-evaluation" status="completed" />
                  <TimelineEvent date="Month 8" title="Program Completion" description="Final review and future planning session" status="current" />
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'communication' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-full">
            <div className="lg:col-span-1">
              <div className="metric-card bg-white rounded-xl p-6 shadow-lg sticky top-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Week</label>
                    <input type="range" min="1" max="32" value={selectedWeek} onChange={(e) => setSelectedWeek(parseInt(e.target.value))} className="w-full" />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Week 1</span>
                      <span>Week {selectedWeek}</span>
                      <span>Week 32</span>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-2">Team Member</label>
                    <select value={selectedTeamMember} onChange={(e) => setSelectedTeamMember(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md">
                      {['all', 'Ruby', 'Dr. Warren', 'Advik', 'Carla', 'Rachel', 'Neel'].map(member => <option key={member} value={member}>{member === 'all' ? 'All Members' : member}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Message Stats</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Total Messages</span>
                      <span className="font-semibold">{communications.length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Member Initiated</span>
                      <span className="font-semibold">{communications.filter(m => (m.sender?.name ?? m.sender) === 'Rohan').length}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Team Responses</span>
                      <span className="font-semibold">{communications.filter(m => (m.sender?.name ?? m.sender) !== 'Rohan').length}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="metric-card bg-white rounded-xl shadow-lg overflow-hidden h-full">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900">WhatsApp-Style Communications</h3>
                  <p className="text-gray-600">8-month member journey conversations</p>
                </div>

                <div className="chat-container overflow-y-auto p-6" style={{ height: '60vh' }}>
                  <div className="space-y-4">
                    {filteredMessages.map(msg => <MessageBubble key={msg.id} message={msg} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'progress' && (
          <div className="space-y-6">
            <div className="metric-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Health Metrics Visualization</h3>
              <div className="flex flex-wrap gap-2">
                {['systolic', 'cholesterol', 'cognitive', 'hrv', 'sleep'].map(metric => (
                  <button key={metric} onClick={() => setSelectedMetric(metric)} className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedMetric === metric ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                    {metric.charAt(0).toUpperCase() + metric.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="metric-card bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">{selectedMetric.charAt(0).toUpperCase() + selectedMetric.slice(1)} Progress</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={metrics}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey={selectedMetric} stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="metric-card bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">All Metrics Comparison</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={metrics}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="systolic" stroke="#ef4444" strokeWidth={2} name="Systolic BP" />
                    <Line type="monotone" dataKey="cognitive" stroke="#8b5cf6" strokeWidth={2} name="Cognitive" />
                    <Line type="monotone" dataKey="hrv" stroke="#10b981" strokeWidth={2} name="HRV" />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'decisions' && (
          // Decision / Interventions Explorer (using interventions.js)
          <div className="space-y-6">
            <div className="metric-card bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Decision & Intervention Tracker</h3>
              <p className="text-sm text-gray-600">Interactive view of interventions timeline (periods → interventions). Click any intervention to expand details.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="metric-card bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Interventions Timeline</h4>

                {/* build a flattened list safely */}
                {(!interventions || interventions.length === 0) ? (
                  <div className="text-sm text-gray-500">No interventions data available.</div>
                ) : (
                  <div className="space-y-3 max-h-[60vh] overflow-y-auto">
                    {interventions.map((block, blockIndex) => (
                      <div key={blockIndex} className="p-3 border border-gray-100 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-sm font-semibold text-gray-700">{block.period} • <span className="font-medium text-gray-900">{block.phase}</span></div>
                            <div className="text-xs text-gray-500 mt-1">{block.interventions?.length ?? 0} interventions</div>
                          </div>
                        </div>

                        <div className="mt-3 space-y-2">
                          {(block.interventions || []).map((iv, idx) => {
                            // unique key:
                            const key = `${blockIndex}-${idx}-${iv.name?.slice(0, 20) || iv.type || idx}`
                            return (
                              <button
                                key={key}
                                onClick={() => setSelectedIntervention({ ...iv, period: block.period, phase: block.phase })}
                                className="w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors flex items-start justify-between"
                              >
                                <div>
                                  <div className="font-medium text-gray-900">{iv.name || iv.type}</div>
                                  <div className="text-xs text-gray-500 mt-1">{iv.owner ? `Owner: ${iv.owner}` : 'Owner: -'} • {iv.implementationDate ?? '—'}</div>
                                </div>

                                <div className={`px-2 py-1 rounded-full text-xs font-medium ${iv.details?.actualAdherence >= iv.details?.adherenceTarget ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                                  {iv.type}
                                </div>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="metric-card bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Intervention Details</h4>

                {selectedIntervention ? (
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-gray-500">Period</div>
                      <div className="font-semibold">{selectedIntervention.period} — {selectedIntervention.phase}</div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-500">Name</div>
                      <div className="font-semibold">{selectedIntervention.name || selectedIntervention.type}</div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-500">Owner / Date</div>
                      <div className="text-sm">{selectedIntervention.owner ?? '—'} • {selectedIntervention.implementationDate ?? '—'}</div>
                    </div>

                    <div>
                      <div className="text-sm text-gray-500">Details</div>
                      <div className="text-sm text-gray-700 mt-1">
                        {selectedIntervention.details ? (
                          <div className="space-y-2">
                            <div><strong>Focus:</strong> {(selectedIntervention.details.focus || []).join(', ') || '—'}</div>
                            <div><strong>Key components:</strong> {(selectedIntervention.details.keyComponents || []).slice(0, 6).join(', ') || '—'}</div>
                            <div><strong>Adherence (target/actual):</strong> {selectedIntervention.details.adherenceTarget ?? '—'} / {selectedIntervention.details.actualAdherence ?? '—'}</div>
                            {selectedIntervention.details.results && <div><strong>Results:</strong> {selectedIntervention.details.results}</div>}
                          </div>
                        ) : (
                          <div className="text-sm text-gray-500">No structured details available for this intervention.</div>
                        )}
                      </div>
                    </div>

                    {selectedIntervention.modifications?.length > 0 && (
                      <div>
                        <div className="text-sm text-gray-500">Modifications</div>
                        <ul className="list-disc ml-5 text-sm text-gray-700 mt-1 space-y-1">
                          {selectedIntervention.modifications.map((m, i) => <li key={i}>{m.date ?? ''} — {m.change ?? m.reason ?? ''}</li>)}
                        </ul>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    <p className="mb-2">Select an intervention on the left to view details.</p>
                    <p className="text-xs">The view reads from the `interventions` import; this will not break if fields are missing.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}


        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* Key metric cards computed from teamArray */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <MetricCard
                title="Total Team Hours"
                value={teamArray.reduce((s, t) => s + (t.hours || 0), 0) || '—'}
                change="+15% vs target"
                trend="up"
                icon={Clock}
                color="blue"
              />
              <MetricCard
                title="Avg Response Time"
                value={teamArray.length ? (teamArray.reduce((s, t) => s + (t.avgResponseTime || 0), 0) / teamArray.length).toFixed(1) + ' hrs' : '—'}
                change="-40% improvement"
                trend="down"
                icon={MessageCircle}
                color="green"
              />
              <MetricCard
                title="Member Satisfaction"
                value="9.4/10"
                change="+51% from start"
                trend="up"
                icon={Heart}
                color="purple"
              />
              <MetricCard
                title="Plan Adherence"
                value={`${Math.round((metrics.length ? (metrics[metrics.length - 1].hrv / 50) * 100 : 0)) || 92}%`}
                change="+163% from start"
                trend="up"
                icon={TrendingUp}
                color="green"
              />
            </div>

            {/* Team Utilization Bar Chart & Table (dynamic) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="metric-card bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Team Hour Allocation</h4>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={teamArray}>
                    <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="hours" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="metric-card bg-white rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Team Performance Details</h4>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Team Member</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Specialization</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Total Hours</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Consultations</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Avg Response</th>
                        <th className="text-left py-3 px-4 font-semibold text-gray-900">Efficiency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {teamArray.map((member, index) => (
                        <tr key={member.id || index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-semibold">{member.name?.charAt(0)}</span>
                              </div>
                              <span className="font-medium">{member.name}</span>
                            </div>
                          </td>
                          <td className="py-3 px-4 text-gray-600">{member.specialization}</td>
                          <td className="py-3 px-4 font-semibold">{member.hours}h</td>
                          <td className="py-3 px-4">{member.consultations}</td>
                          <td className="py-3 px-4">{member.avgResponseTime}h</td>
                          <td className="py-3 px-4">
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${member.avgResponseTime < 3
                                ? 'bg-green-100 text-green-800'
                                : member.avgResponseTime < 5
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-red-100 text-red-800'
                              }`}>
                              {member.avgResponseTime < 3 ? 'Excellent' : member.avgResponseTime < 5 ? 'Good' : 'Needs Improvement'}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  )
}
