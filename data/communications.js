const communications = [
  // MONTH 1: ONBOARDING & INITIAL ASSESSMENTS (April 2024)
  // Week 1: April 1-7, 2024 - Initial Onboarding
  {
    id: "msg_001",
    timestamp: "2024-04-01T09:15:00+08:00",
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "Hi Rohan! Welcome to Elyx! I'm Ruby, your dedicated concierge. I'll be your main point of contact for all logistics and coordination. I've received your initial profile from Sarah and I'm excited to help you achieve your health goals! 🎯",
    category: "onboarding",
    episode: "initial_welcome",
    urgency: "normal",
    sentiment: "positive"
  },
  {
    id: "msg_002", 
    timestamp: "2024-04-01T09:18:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Thanks Ruby! Looking forward to getting started. I have to say, after years of random health management, I'm hoping for something more coordinated and data-driven.",
    category: "onboarding",
    episode: "initial_welcome", 
    urgency: "normal",
    sentiment: "positive"
  },
  {
    id: "msg_003",
    timestamp: "2024-04-01T09:25:00+08:00", 
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "That's exactly what we're here for! I've scheduled your initial consultation with Dr. Warren for April 3rd at 2 PM Singapore time. He'll review your medical history and discuss your goals. I'll send you the prep materials shortly. Does this timing work with your schedule?",
    category: "scheduling",
    episode: "initial_consultation_setup",
    urgency: "normal",
    sentiment: "organized"
  },
  {
    id: "msg_004",
    timestamp: "2024-04-01T14:30:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "April 3rd works perfectly. Quick question - I travel to UK next week (April 8-14). Should we schedule the comprehensive tests before or after?",
    category: "logistics",
    episode: "travel_coordination",
    urgency: "normal", 
    sentiment: "practical"
  },
  {
    id: "msg_005",
    timestamp: "2024-04-01T14:45:00+08:00",
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "Perfect timing question! I'd recommend getting your comprehensive test panel done on April 15th (right after you return). This way you'll be well-rested and we'll have more accurate baseline readings. I'll coordinate everything with the lab. ✈️",
    category: "scheduling",
    episode: "test_coordination",
    urgency: "normal",
    sentiment: "proactive"
  },

  // Dr. Warren Initial Consultation 
  {
    id: "msg_006",
    timestamp: "2024-04-03T14:00:00+08:00",
    sender: { name: "Dr. Warren", role: "medical", type: "team" },
    content: "Good afternoon Rohan. I've reviewed your medical history and family background. Your concern about cardiovascular risk is well-founded given your father's early MI at 52. Let's discuss your current symptoms and lifestyle patterns.",
    category: "medical",
    episode: "initial_consultation", 
    urgency: "normal",
    sentiment: "clinical"
  },
  {
    id: "msg_007",
    timestamp: "2024-04-03T14:35:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Doc, I've been monitoring my BP at home - it's consistently around 135-140/85-90. I exercise regularly but the stress from work and travel definitely impacts my numbers. Also concerned about my focus during long work sessions.",
    category: "medical",
    episode: "symptom_discussion",
    urgency: "normal", 
    sentiment: "concerned"
  },
  {
    id: "msg_008",
    timestamp: "2024-04-03T14:40:00+08:00",
    sender: { name: "Dr. Warren", role: "medical", type: "team" },
    content: "Those readings confirm stage 1 hypertension. The cognitive concerns could be related to sleep quality, stress, or early metabolic changes. Our comprehensive testing will give us a full picture. I'm particularly interested in your inflammatory markers and insulin sensitivity.",
    category: "medical",
    episode: "clinical_assessment",
    urgency: "normal",
    sentiment: "analytical"
  },

  // Week 2: April 8-14, 2024 - Travel Period (UK)
  {
    id: "msg_009",
    timestamp: "2024-04-08T06:00:00+01:00", // UK time
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Just landed in London. Hotel gym looks decent but quite different from my usual setup. Any guidance on modifying my routine?",
    category: "travel_adaptation",
    episode: "uk_travel_week1",
    urgency: "normal",
    sentiment: "practical"
  },
  {
    id: "msg_010", 
    timestamp: "2024-04-08T13:15:00+08:00", // Singapore time response
    sender: { name: "Rachel", role: "physiotherapy", type: "team" },
    content: "Hi Rohan! I'm Rachel, your movement specialist. For hotel gyms, focus on bodyweight exercises and whatever cardio equipment they have. I'll send you a travel-friendly routine that maintains your fitness without needing specific equipment. 💪",
    category: "exercise",
    episode: "travel_exercise_adaptation", 
    urgency: "normal",
    sentiment: "encouraging"
  },

  // Communication Channel Confusion (Friction Point)
  {
    id: "msg_011",
    timestamp: "2024-04-09T10:30:00+01:00",
    sender: { name: "Rohan", role: "member", type: "member" }, 
    content: "Sorry, who is messaging me? I got a workout plan from someone but I'm not sure which team member this is from. Can we clarify the communication protocol?",
    category: "logistics",
    episode: "communication_confusion",
    urgency: "normal",
    sentiment: "frustrated"
  },
  {
    id: "msg_012",
    timestamp: "2024-04-09T17:45:00+08:00",
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "Apologies for the confusion! Let me clarify: I handle all scheduling/logistics, Dr. Warren covers medical advice, Rachel sends exercise plans, Carla handles nutrition, Advik analyzes your wearable data, and Neel provides strategic oversight. We'll always identify ourselves going forward! 👥",
    category: "logistics",
    episode: "team_introduction",
    urgency: "normal",
    sentiment: "apologetic"
  },

  // Week 3: April 15-21, 2024 - Comprehensive Testing Week
  {
    id: "msg_013",
    timestamp: "2024-04-15T08:00:00+08:00",
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "Good morning Rohan! Today's your comprehensive test day. I've confirmed all appointments: 9 AM blood draw, 10:30 AM DEXA scan, 2 PM cardiovascular assessment, 3:30 PM cognitive baseline testing. Sarah has all the details. Ready? 🏥",
    category: "testing",
    episode: "comprehensive_test_day",
    urgency: "normal", 
    sentiment: "organized"
  },
  {
    id: "msg_014",
    timestamp: "2024-04-15T16:45:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Done with all tests! Quite comprehensive indeed. When should I expect results? Also, the cognitive tests were interesting - some areas felt stronger than others.",
    category: "testing",
    episode: "post_testing_feedback",
    urgency: "normal",
    sentiment: "curious"
  },
  {
    id: "msg_015",
    timestamp: "2024-04-15T17:00:00+08:00",
    sender: { name: "Dr. Warren", role: "medical", type: "team" },
    content: "Excellent work completing the full panel, Rohan. Initial results will be available in 3-5 business days. The cognitive assessment will give us valuable baseline data for tracking improvements. I'll schedule a results review meeting once everything is compiled.",
    category: "medical",
    episode: "results_timeline",
    urgency: "normal",
    sentiment: "clinical"
  },

  // Wearable Device Setup Issues (Data Sharing Complication)
  {
    id: "msg_016",
    timestamp: "2024-04-17T19:30:00+08:00", 
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Having trouble syncing my Garmin data with your platform. It connected initially but now showing sync errors. Can someone help troubleshoot?",
    category: "technical",
    episode: "wearable_sync_issues",
    urgency: "normal",
    sentiment: "frustrated"
  },
  {
    id: "msg_017",
    timestamp: "2024-04-17T20:15:00+08:00",
    sender: { name: "Advik", role: "performance", type: "team" },
    content: "Hi Rohan! Advik here - I handle all the wearable data analysis. This is a common Garmin API issue. I'll send you a step-by-step reset guide. In the meantime, can you manually export your last week's data? I want to start analyzing your patterns. 📊",
    category: "technical", 
    episode: "data_troubleshooting",
    urgency: "normal",
    sentiment: "analytical"
  },

  // Week 4: April 22-28, 2024 - Results Discussion
  {
    id: "msg_018", 
    timestamp: "2024-04-22T10:00:00+08:00",
    sender: { name: "Dr. Warren", role: "medical", type: "team" },
    content: "Rohan, your test results are ready. Overall picture shows: BP averaging 138/88 (confirms hypertension), total cholesterol 195 (LDL 125, HDL 42 - needs improvement), CRP 2.8 (elevated inflammation). Positive: excellent muscle mass, normal glucose, good kidney function.",
    category: "medical",
    episode: "results_major_findings", 
    urgency: "high",
    sentiment: "clinical"
  },
  {
    id: "msg_019",
    timestamp: "2024-04-22T10:30:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Thanks Doc. The cholesterol numbers are concerning - worse than I expected. The inflammation too. What's our action plan? I want to be aggressive about addressing these.",
    category: "medical",
    episode: "results_concern_response",
    urgency: "high", 
    sentiment: "concerned"
  },
  {
    id: "msg_020",
    timestamp: "2024-04-22T11:00:00+08:00",
    sender: { name: "Dr. Warren", role: "medical", type: "team" },
    content: "I appreciate your proactive approach. We'll start with intensive lifestyle modifications: targeted nutrition plan, optimized exercise protocol, stress management techniques. I want to see 6-8 week results before considering medications. This approach often yields 20-30% improvements.",
    category: "medical",
    episode: "treatment_plan_initial",
    urgency: "normal",
    sentiment: "authoritative"
  },

  // Team Coordination for Intervention Plan
  {
    id: "msg_021",
    timestamp: "2024-04-23T14:00:00+08:00",
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "Rohan, I've coordinated with the whole team based on Dr. Warren's recommendations. You'll receive personalized plans from each specialist over the next 48 hours. I'm scheduling weekly check-ins to ensure everything aligns with your schedule. 📋",
    category: "coordination",
    episode: "team_plan_coordination",
    urgency: "normal", 
    sentiment: "organized"
  },

  // MONTH 2: FIRST INTERVENTION CYCLE (May 2024)
  // Week 5: April 29 - May 5, 2024 - Plan Implementation Begins

  {
    id: "msg_022",
    timestamp: "2024-04-29T08:00:00+08:00",
    sender: { name: "Carla", role: "nutrition", type: "team" },
    content: "Hi Rohan! Carla here, your nutritionist. I've designed a plan targeting your cholesterol and inflammation: Mediterranean-style eating, omega-3 optimization, and specific timing around your workouts. The key is understanding WHY each choice matters for your cardiovascular health. 🥗",
    category: "nutrition",
    episode: "nutrition_plan_introduction",
    urgency: "normal",
    sentiment: "educational"
  },
  {
    id: "msg_023", 
    timestamp: "2024-04-29T12:15:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Thanks Carla. Quick question - I have a cook at home but I travel frequently. How do we handle meal prep during travel weeks? Also, any supplements you recommend?",
    category: "nutrition",
    episode: "travel_nutrition_query",
    urgency: "normal",
    sentiment: "practical"
  },
  {
    id: "msg_024",
    timestamp: "2024-04-29T13:00:00+08:00", 
    sender: { name: "Carla", role: "nutrition", type: "team" },
    content: "Great question! I'll coordinate with your cook for home preparation, plus create travel-friendly meal guidelines for hotels/airports. For supplements: high-quality omega-3 (2g daily), magnesium glycinate for BP support, and a targeted antioxidant blend. Sending detailed protocols now.",
    category: "nutrition",
    episode: "travel_nutrition_solution",
    urgency: "normal",
    sentiment: "practical"
  },

  // Travel Week: May 6-12, 2024 (US Trip)
  {
    id: "msg_025",
    timestamp: "2024-05-06T05:30:00-07:00", // US West Coast time
    sender: { name: "Rohan", role: "member", type: "member" }, 
    content: "Landed in SF. Hotel gym is actually well-equipped. Got the travel nutrition guide - very helpful! One issue: the meal timing recommendations are challenging with the conference schedule. Any flexibility here?",
    category: "travel_adaptation",
    episode: "us_travel_week2",
    urgency: "normal",
    sentiment: "adaptive"
  },
  {
    id: "msg_026",
    timestamp: "2024-05-06T21:45:00+08:00", // Singapore time response
    sender: { name: "Carla", role: "nutrition", type: "team" },
    content: "Absolutely! The key principles matter more than exact timing. Focus on protein + healthy fats at each meal, avoid processed conference food, and I've identified 3 restaurants near your hotel with heart-healthy options. Flexibility is key for sustainability! 🌟",
    category: "nutrition",
    episode: "flexible_nutrition_guidance",
    urgency: "normal", 
    sentiment: "supportive"
  },

  // First Plan Adherence Challenge (50% failure rate simulation)
  {
    id: "msg_027",
    timestamp: "2024-05-08T18:00:00-07:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Carla, I have to be honest - the morning supplement routine is not working with early conference calls. Missed it 3 days this week. Can we simplify or adjust timing?",
    category: "adherence_issue",
    episode: "supplement_timing_challenge",
    urgency: "normal",
    sentiment: "honest_frustrated"
  },
  {
    id: "msg_028",
    timestamp: "2024-05-09T09:30:00+08:00",
    sender: { name: "Carla", role: "nutrition", type: "team" },
    content: "Thank you for being honest! This is exactly why we adjust plans. Let's consolidate: omega-3 + magnesium with dinner (better absorption anyway), and just one morning antioxidant capsule. Simple is sustainable. The goal is consistency over perfection! ✅",
    category: "plan_adjustment", 
    episode: "supplement_simplification",
    urgency: "normal",
    sentiment: "understanding"
  },

  // Exercise Plan Introduction 
  {
    id: "msg_029",
    timestamp: "2024-05-13T07:00:00+08:00",
    sender: { name: "Rachel", role: "physiotherapy", type: "team" },
    content: "Morning Rohan! Rachel here with your personalized exercise program. Based on your goals and time constraints: 4 sessions/week, 45 mins each. Focus on compound movements for efficiency, plus specific cardio for BP reduction. Form is everything - I'll send video guides. 💪",
    category: "exercise",
    episode: "exercise_plan_introduction", 
    urgency: "normal",
    sentiment: "direct_encouraging"
  },
  {
    id: "msg_030",
    timestamp: "2024-05-13T19:30:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Thanks Rachel! I typically work out 6 AM before the day starts. The compound movements look good, but some exercises I haven't done before. Can we schedule a form check session?",
    category: "exercise", 
    episode: "form_check_request",
    urgency: "normal",
    sentiment: "proactive"
  },
  {
    id: "msg_031",
    timestamp: "2024-05-13T19:45:00+08:00",
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "I'll coordinate that form check session! How about a virtual session this Friday at 6:15 AM (right after your workout)? Rachel can watch your form and provide real-time feedback. I'll send the video call link. 📹",
    category: "scheduling",
    episode: "form_check_scheduling", 
    urgency: "normal",
    sentiment: "proactive"
  },

  // Week 7: May 20-26, 2024 - Data Analysis Insights
  {
    id: "msg_032",
    timestamp: "2024-05-20T10:00:00+08:00", 
    sender: { name: "Advik", role: "performance", type: "team" },
    content: "Fascinating data patterns emerging, Rohan! Your HRV shows significant improvement on nutrition compliance days (avg 35ms vs 28ms). Also noticing your deep sleep increases 15-20% when you exercise before 7 AM vs evening workouts. The data is telling a story! 📈",
    category: "data_insights",
    episode: "hrv_sleep_correlations",
    urgency: "normal", 
    sentiment: "analytical_excited"
  },
  {
    id: "msg_033",
    timestamp: "2024-05-20T12:30:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "That's really interesting Advik! I can definitely feel the difference on compliant days. The morning workout insight explains why I feel more rested lately. Can we use this data to optimize my schedule further?",
    category: "data_discussion", 
    episode: "optimization_interest",
    urgency: "normal",
    sentiment: "engaged"
  },
  {
    id: "msg_034",
    timestamp: "2024-05-20T13:15:00+08:00", 
    sender: { name: "Advik", role: "performance", type: "team" },
    content: "Absolutely! I'm developing your personalized 'performance profile.' Based on your chronotype and recovery patterns, I recommend: workouts 6-7 AM, largest meal post-workout, and a specific wind-down routine starting 9:30 PM. Let's test this hypothesis for 2 weeks! 🧪",
    category: "data_insights",
    episode: "personalized_schedule_optimization",
    urgency: "normal",
    sentiment: "experimental"
  },

  // Plan Access Issue (Friction Point)
  {
    id: "msg_035", 
    timestamp: "2024-05-22T06:15:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Quick issue - trying to access my updated workout plan but it's asking for a password. I'm at the gym and need the routine. Can someone help urgently?",
    category: "technical",
    episode: "plan_access_issue",
    urgency: "urgent",
    sentiment: "frustrated"
  },
  {
    id: "msg_036",
    timestamp: "2024-05-22T06:20:00+08:00",
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "On it immediately! Sending the workout plan directly to WhatsApp right now. I'm also removing password protection from all your documents - unnecessary friction. Rachel will update the platform access. Sorry for the inconvenience! 🏃‍♀️",
    category: "technical_support",
    episode: "urgent_plan_access_fix",
    urgency: "urgent", 
    sentiment: "apologetic_efficient"
  },

  // MONTH 3: CONTINUED INTERVENTION (June 2024) 
  // Week 10: June 10-16, 2024 - South Korea Travel

  {
    id: "msg_037",
    timestamp: "2024-06-10T08:00:00+09:00", // Seoul time
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Seoul hotel gym is quite limited - mostly cardio machines and basic dumbbells. The food scene is amazing but very different from my nutrition plan. How do I adapt?",
    category: "travel_adaptation",
    episode: "seoul_travel_week3",
    urgency: "normal",
    sentiment: "adaptive"
  },
  {
    id: "msg_038",
    timestamp: "2024-06-10T09:15:00+08:00", 
    sender: { name: "Rachel", role: "physiotherapy", type: "team" },
    content: "Perfect opportunity for adaptation! Korean food can be very heart-healthy: focus on grilled proteins, kimchi (great for gut health), and avoid the fried options. For workouts: bodyweight circuits + cardio intervals. I'm sending a Seoul-specific routine! 🥋",
    category: "travel_adaptation",
    episode: "seoul_adaptation_guidance",
    urgency: "normal",
    sentiment: "encouraging"
  },

  // Mid-Program Member Dissatisfaction (Major Friction Point)
  {
    id: "msg_039", 
    timestamp: "2024-06-18T20:00:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Team, I need to provide some honest feedback. After 10 weeks, I'm not seeing the tangible progress I expected. My BP is still elevated, I'm struggling with plan adherence during travel, and the coordination feels sluggish. I need to see more proactive management and clearer results.",
    category: "dissatisfaction",
    episode: "mid_program_feedback",
    urgency: "high",
    sentiment: "frustrated_direct"
  },
  {
    id: "msg_040",
    timestamp: "2024-06-18T21:30:00+08:00", 
    sender: { name: "Neel", role: "relationship_manager", type: "team" },
    content: "Thank you for this direct feedback, Rohan. I hear your frustration and it's completely valid. Let me provide context on what's happening behind the scenes and propose immediate improvements. Can we schedule a strategic review call tomorrow? I want to realign everything with your expectations.",
    category: "relationship_management",
    episode: "strategic_intervention",
    urgency: "high",
    sentiment: "strategic_responsive"
  },
  {
    id: "msg_041",
    timestamp: "2024-06-19T09:00:00+08:00",
    sender: { name: "Dr. Warren", role: "medical", type: "team" },
    content: "Rohan, from a clinical perspective, your biomarker improvements are actually significant but gradual: average BP down 8/4 mmHg, CRP decreased 0.4 points, HRV up 12%. However, I hear your concern about pace. Let's discuss accelerating our approach with targeted interventions.",
    category: "medical",
    episode: "clinical_progress_explanation", 
    urgency: "normal",
    sentiment: "clinical_defensive"
  },

  // Strategic Review and Commitment to Improvement
  {
    id: "msg_042",
    timestamp: "2024-06-19T16:00:00+08:00",
    sender: { name: "Neel", role: "relationship_manager", type: "team" },
    content: "Rohan, excellent strategic discussion today. Here's our immediate action plan: 1) Weekly progress dashboards starting Monday, 2) Proactive travel prep (not reactive), 3) Simplified adherence tracking, 4) Monthly progress calls with me. We're committed to earning your confidence back. 🎯",
    category: "strategic_planning",
    episode: "improvement_commitment",
    urgency: "high", 
    sentiment: "committed"
  },

  // MONTH 4: PLAN ADJUSTMENTS & TRAVEL ADAPTATIONS (July 2024)
  // Week 14: July 8-14, 2024 - Jakarta Travel + Quarterly Testing

  {
    id: "msg_043",
    timestamp: "2024-07-08T07:30:00+07:00", // Jakarta time
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Jakarta week begins! I appreciate the proactive travel package Ruby sent. Question: my quarterly tests are scheduled for July 15th (tomorrow after I return). Should I delay due to travel fatigue potentially affecting results?",
    category: "testing",
    episode: "jakarta_travel_test_timing",
    urgency: "normal", 
    sentiment: "appreciative_practical"
  },
  {
    id: "msg_044",
    timestamp: "2024-07-08T08:45:00+08:00",
    sender: { name: "Dr. Warren", role: "medical", type: "team" },
    content: "Good thinking, Rohan. Let's postpone 48 hours to July 17th. This eliminates travel stress variables and gives us more accurate readings. Ruby will reschedule everything. Your attention to data quality shows excellent engagement! 📊",
    category: "medical",
    episode: "test_timing_optimization",
    urgency: "normal",
    sentiment: "approving"
  },

  // Quarterly Test Results - Month 4 (Significant Improvement)
  {
    id: "msg_045",
    timestamp: "2024-07-22T14:00:00+08:00", 
    sender: { name: "Dr. Warren", role: "medical", type: "team" },
    content: "Rohan, your 3-month results are impressive! BP average now 128/82 (down from 138/88), total cholesterol 175 (was 195), CRP 1.9 (was 2.8). HDL increased to 48! This represents excellent cardiovascular risk reduction. The lifestyle approach is working beautifully. 🎉",
    category: "medical",
    episode: "quarterly_results_success",
    urgency: "high",
    sentiment: "celebratory"
  },
  {
    id: "msg_046", 
    timestamp: "2024-07-22T14:30:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "This is fantastic news! I can actually feel the difference - better energy, clearer thinking, sleeping more soundly. The team coordination has definitely improved too. What's our strategy for continued progress?",
    category: "medical",
    episode: "positive_results_response",
    urgency: "normal", 
    sentiment: "excited_engaged"
  },

  // Exercise Program Update (Bi-weekly Update)
  {
    id: "msg_047",
    timestamp: "2024-07-24T07:00:00+08:00",
    sender: { name: "Rachel", role: "physiotherapy", type: "team" },
    content: "Time for your strength progression, Rohan! Your form has improved significantly and your recovery data shows you're ready for increased intensity. I'm adding compound supersets and HIIT cardio intervals. This will further boost your cardiovascular improvements! 💪",
    category: "exercise",
    episode: "strength_progression_update",
    urgency: "normal",
    sentiment: "encouraging_progressive"
  },

  // Nutrition Plan Success Story
  {
    id: "msg_048",
    timestamp: "2024-07-26T11:00:00+08:00", 
    sender: { name: "Carla", role: "nutrition", type: "team" },
    content: "Rohan, your cholesterol improvements are directly linked to our nutrition strategy! The omega-3 optimization and Mediterranean approach are paying off. I want to add some targeted phytonutrients for continued inflammation reduction. Excited to keep building on this success! 🌱",
    category: "nutrition",
    episode: "nutrition_success_progression",
    urgency: "normal",
    sentiment: "educational_excited"
  },

  // MONTH 5: CONTINUED OPTIMIZATION (August 2024)
  // Week 18: August 12-18, 2024 - UK Travel (Second Time)

  {
    id: "msg_049",
    timestamp: "2024-08-12T09:00:00+01:00", // London time
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Back in London! The travel prep has gotten so much smoother. I actually maintained my routine better this trip. Ruby's coordination and the simplified plans make a huge difference. Feeling much more confident about travel weeks now.",
    category: "travel_feedback", 
    episode: "london_travel_improvement",
    urgency: "normal",
    sentiment: "positive_confident"
  },
  {
    id: "msg_050",
    timestamp: "2024-08-12T16:15:00+08:00",
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "That's wonderful to hear, Rohan! We've definitely refined the travel protocol based on your feedback. I love that you're feeling more confident. I've already started prep for your September US trip - getting ahead of the curve! ✈️🎯",
    category: "travel_coordination",
    episode: "proactive_travel_prep",
    urgency: "normal", 
    sentiment: "proactive_pleased"
  },

  // Data Insights - Performance Patterns
  {
    id: "msg_051", 
    timestamp: "2024-08-15T13:30:00+08:00",
    sender: { name: "Advik", role: "performance", type: "team" },
    content: "Rohan, your data story is becoming very clear! Your HRV baseline has shifted from 32ms to 38ms average. Sleep efficiency up to 85% from 78%. Most interesting: your cognitive performance scores correlate strongly with previous night's deep sleep percentage. This is actionable intel! 🧠",
    category: "data_insights",
    episode: "cognitive_sleep_correlation",
    urgency: "normal",
    sentiment: "analytical_excited"
  },
  {
    id: "msg_052",
    timestamp: "2024-08-15T17:45:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Advik, this is exactly the kind of insight I was hoping for! I've noticed on days when I get more deep sleep, my focus during long meetings is dramatically better. Can we optimize my sleep routine further?",
    category: "data_discussion",
    episode: "sleep_optimization_interest",
    urgency: "normal", 
    sentiment: "engaged_curious"
  },

  // Sleep Optimization Protocol
  {
    id: "msg_053", 
    timestamp: "2024-08-16T10:00:00+08:00",
    sender: { name: "Advik", role: "performance", type: "team" },
    content: "Absolutely! I'm designing a precision sleep protocol: room temp 67-69°F, blue light cutoff 9 PM, magnesium glycinate 90 mins before bed, and a specific breathing technique. Let's run a 2-week experiment and track the cognitive performance correlation! 🛏️",
    category: "optimization",
    episode: "precision_sleep_protocol", 
    urgency: "normal",
    sentiment: "experimental"
  },

  // Plan Adherence Success Story
  {
    id: "msg_054",
    timestamp: "2024-08-20T19:00:00+08:00", 
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Team, I want to share something positive. This week I hit 90% adherence to the plan - best week yet! The simplified approach and better coordination made all the difference. I'm finally feeling like this is sustainable long-term.",
    category: "adherence_success", 
    episode: "high_adherence_celebration",
    urgency: "normal",
    sentiment: "positive_grateful"
  },
  {
    id: "msg_055",
    timestamp: "2024-08-20T19:30:00+08:00",
    sender: { name: "Neel", role: "relationship_manager", type: "team" },
    content: "This is fantastic, Rohan! You've gone from 50% adherence in month 2 to 90% now - that's the trajectory we want to see. More importantly, you're feeling sustainable, which means this becomes a lifestyle rather than a temporary intervention. Excellent progress! 🌟",
    category: "relationship_management", 
    episode: "adherence_celebration", 
    urgency: "normal",
    sentiment: "celebratory_strategic"
  },

  // MONTH 6: PROGRESS EVALUATION (September 2024)
  // Week 22: September 9-15, 2024 - US Travel (Product Launch)

  {
    id: "msg_056",
    timestamp: "2024-09-09T06:00:00-07:00", // US West Coast
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "SF again for our product launch week. High stress but I feel much better equipped to handle it this time. Sleep protocol is working great - even with jet lag, I'm recovering faster. Energy levels are noticeably higher.",
    category: "travel_feedback", 
    episode: "sf_product_launch_travel",
    urgency: "normal",
    sentiment: "confident_positive"
  },
  {
    id: "msg_057",
    timestamp: "2024-09-09T21:30:00+08:00",
    sender: { name: "Advik", role: "performance", type: "team" },
    content: "Your resilience metrics are impressive, Rohan! Despite the 15-hour time difference, your HRV recovered to baseline within 48 hours vs the typical 5-7 days. The sleep optimization and cardiovascular improvements are paying dividends in stress resilience! 📈",
    category: "data_insights",
    episode: "stress_resilience_improvement",
    urgency: "normal", 
    sentiment: "analytical_impressed"
  },

  // Cognitive Performance Breakthrough  
  {
    id: "msg_058",
    timestamp: "2024-09-12T22:00:00-07:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Something remarkable happened today. During a 4-hour strategy session (usually mentally draining), I maintained sharp focus throughout. Actually felt energized afterwards. This is a completely different experience from 6 months ago.",
    category: "cognitive_improvement",
    episode: "cognitive_breakthrough",
    urgency: "normal",
    sentiment: "amazed_positive"
  },
  {
    id: "msg_059", 
    timestamp: "2024-09-13T13:15:00+08:00",
    sender: { name: "Dr. Warren", role: "medical", type: "team" },
    content: "This cognitive enhancement aligns perfectly with your biomarker improvements, Rohan. Better cardiovascular health means improved brain perfusion. Combined with optimized sleep and reduced inflammation, you've created ideal conditions for cognitive performance. Excellent real-world validation! 🧠",
    category: "medical",
    episode: "cognitive_medical_explanation",
    urgency: "normal",
    sentiment: "clinical_pleased"
  },

  // Mid-Program Strategic Review
 // [APPEND THIS AFTER THE LAST LINE YOU ALREADY HAVE IN data/communications.js]
// Continuing from msg_060 (complete that object) and extending the conversation through the 8-month mark.
// Do NOT modify any earlier entries — paste this block immediately after the last entry you already have.

  {
    id: "msg_060",
    timestamp: "2024-09-18T15:00:00+08:00",
    sender: { name: "Neel", role: "relationship_manager", type: "team" },
    content: "Time for our 6-month strategic review, Rohan! Your transformation has been remarkable: 10mmHg BP reduction, 20-point cholesterol drop, 40% HRV improvement, and most importantly - you feel dramatically better. Ready to plan the next phase of optimization? 🎯",
    category: "strategic_review",
    episode: "six_month_review",
    urgency: "normal",
    sentiment: "strategic_uplifting"
  },

  // MONTH 7: OCTOBER 2024 — NEXT-PHASE PLANNING & PREP FOR ANNUAL SCREENS
  {
    id: "msg_061",
    timestamp: "2024-09-19T10:00:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Absolutely — let's map out what the next 6 months looks like. I'm particularly interested in what proactive screens we should lock in, and whether we should keep the current intensity or step up certain levers.",
    category: "strategy",
    episode: "six_month_followup",
    urgency: "normal",
    sentiment: "decisive"
  },
  {
    id: "msg_062",
    timestamp: "2024-09-19T11:15:00+08:00",
    sender: { name: "Dr. Warren", role: "medical", type: "team" },
    content: "Good question. I'd recommend: 1) continue current nutrition + statin NOT indicated now (we'll watch), 2) consider Coronary Calcium Score in 6-12 months given family history, 3) annual brain health screen in 12 months unless cognitive signals change. We'll also keep quarterly lipid checks. I'll draft the plan for Neel to incorporate into the QBR.",
    category: "medical",
    episode: "next_phase_recommendation",
    urgency: "normal",
    sentiment: "authoritative"
  },
  {
    id: "msg_063",
    timestamp: "2024-09-19T12:05:00+08:00",
    sender: { name: "Neel", role: "relationship_manager", type: "team" },
    content: "I'll schedule the suggested checks and produce a concise QBR (quarterly business review) dashboard for you — one-pager executive summary with key metrics and recommended actions. Expect a draft by Friday. Also proposing a family-facing summary you can share with your wife if helpful.",
    category: "coordination",
    episode: "qbr_scheduling",
    urgency: "normal",
    sentiment: "organized"
  },

  // WEEKLY CHECK-IN SERIES (late Sep - Oct): patrolled adherence and travel notes
  {
    id: "msg_064",
    timestamp: "2024-09-26T08:00:00+08:00",
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "Weekly check-in: Rohan, your adherence last week was 78%. Main blocker: two short travel days; coach hours this week allocated for guided sessions. Any urgent blockers we should address?",
    category: "weekly_report",
    episode: "weekly_checkin",
    urgency: "normal",
    sentiment: "informative"
  },
  {
    id: "msg_065",
    timestamp: "2024-09-26T08:10:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Thanks Ruby — no urgent blockers. Please keep morning workouts prioritized and avoid scheduling late calls on Tuesday/Thursday where possible.",
    category: "logistics",
    episode: "availability_note",
    urgency: "normal",
    sentiment: "practical"
  },
  {
    id: "msg_066",
    timestamp: "2024-09-26T09:30:00+08:00",
    sender: { name: "Rachel", role: "physiotherapy", type: "team" },
    content: "Noted. I'll shift two guided sessions to early mornings and send you revised calendar invites. Also adding a short 12-minute mobility flow you can do on travel days.",
    category: "exercise",
    episode: "schedule_adjustment",
    urgency: "normal",
    sentiment: "responsive"
  },

  // DEVICE & DATA IMPROVEMENTS
  {
    id: "msg_067",
    timestamp: "2024-10-03T07:30:00+08:00",
    sender: { name: "Advik", role: "performance", type: "team" },
    content: "We've improved the ingestion pipeline: Whoop + Garmin fusion now shows sleep stages and HRV trends in a single view. I added an alert for >10% HRV drop week-on-week so we can pre-emptively reduce load during travel. Want me to enable push alerts to Sarah as well?",
    category: "technical",
    episode: "data_pipeline_upgrade",
    urgency: "normal",
    sentiment: "analytical_helpful"
  },
  {
    id: "msg_068",
    timestamp: "2024-10-03T08:00:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Yes please — have Sarah receive alerts too so she can adjust my calendar. Love the fusion view.",
    category: "preferences",
    episode: "alert_preferences",
    urgency: "normal",
    sentiment: "approving"
  },

  // OCTOBER MID-MONTH: Mini Cognitive Re-assessment & Training Plan
  {
    id: "msg_069",
    timestamp: "2024-10-10T10:00:00+08:00",
    sender: { name: "Carla", role: "nutrition", type: "team" },
    content: "Based on ongoing cognitive gains, I suggest increasing dietary flavonoids (berries, dark chocolate in moderation) and pairing them with low-GI carbs pre-focus sessions. Small tweak — big potential cognitive ROI.",
    category: "nutrition",
    episode: "cognitive_nutrition_tweak",
    urgency: "normal",
    sentiment: "practical_optimistic"
  },
  {
    id: "msg_070",
    timestamp: "2024-10-10T12:00:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Sounds good. Add those to the travel snack pack too — conference-friendly items.",
    category: "nutrition",
    episode: "travel_snack_request",
    urgency: "normal",
    sentiment: "practical"
  },

  // QBR DELIVERY: concise executive dashboard
  {
    id: "msg_071",
    timestamp: "2024-10-15T16:00:00+08:00",
    sender: { name: "Neel", role: "relationship_manager", type: "team" },
    content: "Attached: QBR one-pager (executive summary). Key highlights: BP -10 mmHg, LDL -20 points, HRV +40%. Actions: continue current plan, schedule Coronary Calcium Score within 6-12 months, maintain sleep protocol. Sharing now via Sarah for your review.",
    category: "report",
    episode: "qbr_delivery",
    urgency: "normal",
    sentiment: "concise_confident"
  },
  {
    id: "msg_072",
    timestamp: "2024-10-15T16:10:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Received — very clear and helpful. Please add an executive note I can forward to my CEO / leadership showing impact on productivity metrics (high level) for internal support. Great work.",
    category: "report",
    episode: "qbr_forward_request",
    urgency: "normal",
    sentiment: "strategic"
  },

  // PLANNED CARDIOVASCULAR CHECK (Coronary Calcium Score conversation)
  {
    id: "msg_073",
    timestamp: "2024-10-20T09:00:00+08:00",
    sender: { name: "Dr. Warren", role: "medical", type: "team" },
    content: "Given your family history and improvements so far, I suggest scheduling a Coronary Calcium Score in Q2 next year (flexible window). If the score is elevated, we'll consider earlier cardiology referrals. For now, continue therapy and surveillance.",
    category: "medical",
    episode: "calcium_score_plan",
    urgency: "normal",
    sentiment: "precautionary"
  },
  {
    id: "msg_074",
    timestamp: "2024-10-20T09:25:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Okay — please add it to the 'to consider' list and remind me 3 months before the window opens. No immediate action unless you see worrying trends.",
    category: "medical",
    episode: "calcium_score_ack",
    urgency: "normal",
    sentiment: "measured"
  },

  // LATE-OCTOBER: Service improvement note + team recognition
  {
    id: "msg_075",
    timestamp: "2024-10-29T11:30:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Quick note: the weekly summaries and the travel prep are exactly what I needed. Huge thanks to Ruby and the team for the improved coordination. Feels like a well-oiled machine now.",
    category: "feedback",
    episode: "service_praise",
    urgency: "normal",
    sentiment: "grateful"
  },
  {
    id: "msg_076",
    timestamp: "2024-10-29T12:00:00+08:00",
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "Thanks Rohan — appreciate the feedback. We'll keep refining. We'll also prepare a short 'what changed' doc that you can share internally if you like.",
    category: "coordination",
    episode: "service_response",
    urgency: "normal",
    sentiment: "pleased_helpful"
  },

  // MONTH 8: NOVEMBER 2024 — MAINTENANCE & END-OF-CYCLE SYNTHESIS
  {
    id: "msg_077",
    timestamp: "2024-11-05T08:00:00+08:00",
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "Reminder: end-of-cycle summary call scheduled next Wednesday. We'll review six-month outcomes, maintenance plan, and the recommended monitoring cadence for the next 12 months.",
    category: "scheduling",
    episode: "end_of_cycle_call_reminder",
    urgency: "normal",
    sentiment: "organized"
  },
  {
    id: "msg_078",
    timestamp: "2024-11-05T08:15:00+08:00",
    sender: { name: "Sarah Tan", role: "assistant", type: "pa" },
    content: "Confirmed with Rohan — call accepted. I've blocked the time and will ensure calendar invites account for timezone changes during upcoming travel.",
    category: "logistics",
    episode: "pa_confirmation",
    urgency: "normal",
    sentiment: "efficient"
  },

  // END-OF-CYCLE CALL & SYNTHESIS
  {
    id: "msg_079",
    timestamp: "2024-11-12T14:00:00+08:00",
    sender: { name: "Neel", role: "relationship_manager", type: "team" },
    content: "Synthesis from today's call: 1) Maintain current nutrition & exercise; 2) Quarterly lipid checks + HRV monitoring; 3) Coronary calcium 'watchlist' for Q2 next year; 4) Move to a maintenance coaching cadence (bi-weekly check-ins) unless metrics drift. Do you agree with this approach, Rohan?",
    category: "strategic_review",
    episode: "end_of_cycle_synthesis",
    urgency: "normal",
    sentiment: "strategic_clear"
  },
  {
    id: "msg_080",
    timestamp: "2024-11-12T14:10:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Agree. I'm comfortable moving to a maintenance cadence with the triggers you've proposed. Please summarize the triggers for Sarah and me in one doc.",
    category: "agreement",
    episode: "synthesis_acknowledgement",
    urgency: "normal",
    sentiment: "decisive"
  },

  // MAINTENANCE CADENCE DETAILS & TRIGGERS (explicit for traceability)
  {
    id: "msg_081",
    timestamp: "2024-11-13T09:00:00+08:00",
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "Maintenance cadence: 1) Bi-weekly coach check-ins; 2) Monthly consolidated report; 3) Quarterly blood panels (lipids/CRP/HbA1c); 4) Alert triggers: LDL +15 mg/dL over baseline, sustained HRV drop >15% for 3 weeks, CRP rise >1.0 mg/L. Document and shared with Sarah.",
    category: "plan",
    episode: "maintenance_cadence_documentation",
    urgency: "normal",
    sentiment: "explicit_practical"
  },
  {
    id: "msg_082",
    timestamp: "2024-11-13T09:05:00+08:00",
    sender: { name: "Sarah Tan", role: "assistant", type: "pa" },
    content: "Received and saved. I'll ensure the team copies me on any alerts so I can reschedule or cancel meetings if needed.",
    category: "logistics",
    episode: "pa_acknowledgement",
    urgency: "normal",
    sentiment: "supportive"
  },

  // DOCUMENTED CASE NOTE (for any third-party reviewer) - created by Dr. Warren
  {
    id: "msg_083",
    timestamp: "2024-11-14T10:30:00+08:00",
    sender: { name: "Dr. Warren", role: "medical", type: "team" },
    content: "Case note (summary): Rohan Patel - baseline: borderline LDL 150, CRP 2.8, BP 138/88. Intervention: structured lifestyle + coaching (nutrition, exercise, sleep) beginning Apr 2024. Outcomes at 6 months: LDL 175→155→118 (sustained improvement), CRP 2.8→1.9→1.5, BP 138/88→128/82→125/78, HRV +40%. Plan: maintenance with quarterly labs; Coronary Calcium Score in 6-12 months optional. Documented in chart.",
    category: "medical",
    episode: "case_note_export",
    urgency: "normal",
    sentiment: "clinical_formal"
  },

  // MEMBER REQUEST: SHAREABLE SUMMARY FOR FAMILY
  {
    id: "msg_084",
    timestamp: "2024-11-14T11:00:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Can you provide a 1-page, family-friendly summary I can share with my wife? High level, non-technical — what changed and what she should watch for.",
    category: "communication_request",
    episode: "family_summary_request",
    urgency: "normal",
    sentiment: "considerate"
  },
  {
    id: "msg_085",
    timestamp: "2024-11-14T11:30:00+08:00",
    sender: { name: "Neel", role: "relationship_manager", type: "team" },
    content: "On it — will produce a 1-page family summary emphasizing improved energy, lower cardiovascular risk, and simple monitoring tips. We'll include who to contact if there are concerns.",
    category: "coordination",
    episode: "family_summary_prep",
    urgency: "normal",
    sentiment: "helpful"
  },

  // LATE NOVEMBER: PREPARATION FOR HOLIDAY TRAVEL & SUSTAINABILITY HACKS
  {
    id: "msg_086",
    timestamp: "2024-11-22T09:00:00+08:00",
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "Holiday travel prep checklist: 1) portable meal pack (Carla-approved), 2) short mobility flows for flights, 3) adjustable alarm blocks in calendar for morning workouts. Sending full pack to Sarah.",
    category: "logistics",
    episode: "holiday_travel_prep",
    urgency: "normal",
    sentiment: "proactive"
  },

  // END-OF-MAINTENANCE TRANSITION NOTE
  {
    id: "msg_087",
    timestamp: "2024-11-30T18:00:00+08:00",
    sender: { name: "Rohan", role: "member", type: "member" },
    content: "Thank you team — this whole experience has exceeded my expectations. I'm comfortable with the maintenance plan and trusting the triggers you set. Appreciate the evidence-driven approach and clear communication.",
    category: "gratitude",
    episode: "end_of_phase_reflection",
    urgency: "normal",
    sentiment: "grateful"
  },
  {
    id: "msg_088",
    timestamp: "2024-11-30T18:10:00+08:00",
    sender: { name: "Neel", role: "relationship_manager", type: "team" },
    content: "Fantastic to hear. We'll remain vigilant and only escalate if metrics cross triggers. Enjoy the holidays — and we'll keep the engine running quietly in the background.",
    category: "closure",
    episode: "phase_closure",
    urgency: "normal",
    sentiment: "reassuring"
  },

  // OPTIONAL: ADMIN / AUDIT MESSAGE (for traceability)
  {
    id: "msg_089",
    timestamp: "2024-11-30T19:00:00+08:00",
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "Audit note: All tests, decisions, and major messages have been archived to the member's longitudinal chart. You can request 'export for review' if needed for external consults.",
    category: "admin",
    episode: "audit_archive",
    urgency: "normal",
    sentiment: "procedural"
  },

  // FINAL: tiny follow-up to ensure the file reader sees continuity and tracing markers
  {
    id: "msg_090",
    timestamp: "2024-12-01T09:00:00+08:00",
    sender: { name: "Ruby", role: "concierge", type: "team" },
    content: "If any third party (family, new doctor, or auditor) reads this chat, please note: decisions were driven by serial tests (dates logged), wearable-derived trends (HRV/sleep), and shared decision-making with Rohan. Contact Neel for strategic queries, Dr. Warren for clinical clarifications, and Ruby for logistics.",
    category: "meta",
    episode: "traceability_guidance",
    urgency: "normal",
    sentiment: "clear_instructive"
  }
]

// Export the communications array so other modules can import it.
// If your environment uses CommonJS, change to: module.exports = communications;
export default communications;
