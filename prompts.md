# AI Prompts for Healthcare Member Journey Simulation

## Comprehensive Prompt Collection for Building Elyx Member Experience

### 1. DATA STRUCTURE & MODELING PROMPTS

#### 1.1 Member Profile Creation

```
Create a comprehensive member profile data structure for a healthcare concierge service. The member is:
- 46-year-old male executive in Singapore
- Family history of heart disease
- Frequent international travel (25% of time)
- High-stress job requiring cognitive performance
- Expected 50% plan adherence rate due to lifestyle constraints

Include: basic info, health goals with specific metrics, chronic conditions, behavioral profile, technology preferences, travel patterns, and success metrics. Structure as JavaScript object with nested properties.
```

#### 1.2 Health Metrics Evolution

```
Design an 8-month health metrics progression dataset for a member improving cardiovascular health through lifestyle interventions. Start with:
- Baseline: BP 138/88, cholesterol 195, cognitive score 78, HRV 28ms
- Show realistic month-by-month improvements
- Include setbacks during travel periods
- End with significant improvements: BP 118/75, cholesterol 145, cognitive 102

Structure as JavaScript object with monthly snapshots including biomarkers, wearable data, assessments, and body composition.
```

#### 1.3 Team Communication Structure

```
Create a realistic 90-message conversation dataset spanning 8 months between a healthcare member and a 6-person care team. Include:

Team roles:
- Ruby (Concierge): logistics, scheduling, warm/organized tone
- Dr. Warren (Medical): clinical analysis, authoritative/scientific tone  
- Advik (Data Scientist): pattern analysis, curious/analytical tone
- Carla (Nutritionist): practical education, supportive tone
- Rachel (Physiotherapist): direct/encouraging, form-focused
- Neel (Relationship Manager): strategic/big-picture tone

Include realistic friction points: scheduling conflicts, plan access issues, adherence challenges, communication confusion. Show member frustration mid-program and subsequent service improvements.
```

### 2. BEHAVIORAL SIMULATION PROMPTS

#### 2.1 Adherence Modeling

```
Model realistic health plan adherence patterns for a busy executive over 8 months:
- Start at 45% adherence (overwhelmed by complexity)
- Drop to 30% during travel weeks
- Include mid-program dissatisfaction and team response
- Show improvement to 85%+ after plan simplification
- Factor in: travel disruption, work stress, motivation cycles

Provide month-by-month adherence rates with specific reasons for fluctuations.
```

#### 2.2 Intervention Timeline

```
Create a comprehensive intervention timeline for personalized healthcare optimization:
- Month 1: Foundation building (nutrition, exercise, sleep protocols)
- Months 2-3: Adaptation and refinement based on travel challenges
- Months 4-5: Optimization with data-driven insights
- Months 6-7: Performance phase with advanced protocols
- Month 8: Maintenance transition

For each intervention, include: implementation date, owner, adherence targets vs actuals, modifications made, and results achieved.
```

### 3. REALISTIC FRICTION POINT PROMPTS

#### 3.1 Service Friction Simulation

```
Generate realistic service friction points for a premium healthcare concierge experience:
- Technology issues: wearable sync failures, plan access problems
- Communication confusion: team member identification, channel clarity
- Scheduling conflicts: timezone differences, last-minute changes
- Plan complexity: overwhelming information, difficult adherence
- Medical disagreements: conflicting advice, external doctor opinions

Show how each friction point emerges, member frustration, and service team resolution.
```

#### 3.2 Travel Adaptation Challenges

```
Model the challenges and solutions for maintaining health plans during frequent business travel:
- Hotel gym limitations and workout adaptations
- Meal planning in different countries/cuisines
- Timezone adjustment and sleep disruption
- Supplement compliance during travel
- Communication delays due to time differences

Show evolution from reactive problem-solving to proactive travel preparation.
```

### 4. USER INTERFACE & VISUALIZATION PROMPTS

#### 4.1 Dashboard Design

```
Create a React component for a comprehensive healthcare member journey dashboard with:
- Key health metrics cards with trend indicators
- Interactive timeline showing 8-month progression
- WhatsApp-style communication interface
- Team analytics and performance tracking
- Intervention timeline with detailed drill-downs

Use modern design: glass morphism effects, gradients, interactive hover states. Ensure mobile responsiveness and accessibility.
```

#### 4.2 Data Visualization

```
Design interactive charts for healthcare data visualization:
- Blood pressure progression over time (area chart)
- Multiple biomarker comparison (multi-line chart)
- Team utilization and response times (bar charts)
- Adherence patterns with travel correlation (scatter plot)
- Cognitive performance improvement (line chart with annotations)

Use Recharts library, ensure responsive design, include tooltips and interactive filtering.
```

### 5. NARRATIVE & STORYTELLING PROMPTS

#### 5.1 Member Journey Narrative

```
Write a compelling narrative arc for the 8-month healthcare transformation:
- Act 1: Ambitious start, initial optimism, early challenges
- Act 2: Mid-program crisis, service friction, member dissatisfaction
- Act 3: Service improvement, breakthrough results, sustainable success

Include specific moments: first test results concern, travel adaptation struggles, team communication improvements, breakthrough cognitive performance, final transformation celebration.
```

#### 5.2 Communication Voice Development

```
Develop distinct communication voices for each team member:
- Ruby: "I've taken care of scheduling your..." (proactive, organized)
- Dr. Warren: "Based on your latest results..." (clinical, authoritative)
- Advik: "I'm seeing in your data..." (analytical, pattern-focused)
- Carla: "The reason behind this is..." (educational, practical)
- Rachel: "Focus on proper form..." (direct, encouraging)
- Neel: "Looking at the bigger picture..." (strategic, reassuring)

Ensure consistency across 90+ messages while showing relationship evolution.
```

### 6. TECHNICAL IMPLEMENTATION PROMPTS

#### 6.1 React Component Architecture

```
Build a multi-tab React dashboard with state management for:
- Overview: key metrics and timeline
- Communications: filtered chat interface
- Progress: interactive health visualizations
- Decisions: intervention tracker with drill-downs
- Analytics: team performance analysis

Use hooks for state management, ensure component reusability, implement proper error boundaries, optimize for performance with large datasets.
```

#### 6.2 Data Integration & Processing

```
Create utility functions for processing healthcare journey data:
- Parse message timestamps and group by time periods
- Calculate health metric improvements and trend analysis
- Filter communications by team member and date ranges
- Generate adherence statistics and correlation analysis
- Export data summaries for reporting

Handle edge cases, missing data, and different data formats gracefully.
```

### 7. QUALITY ASSURANCE & VALIDATION PROMPTS

#### 7.1 Data Consistency Check

```
Validate the healthcare simulation dataset for:
- Timeline consistency across all data files
- Realistic health metric progressions
- Communication frequency matching behavioral patterns
- Intervention outcomes aligning with adherence rates
- Team member response patterns staying in character

Identify and flag any inconsistencies or unrealistic patterns.
```

#### 7.2 User Experience Testing

```
Evaluate the dashboard user experience for:
- Information hierarchy and visual clarity
- Navigation flow between different views
- Mobile responsiveness and touch interactions
- Data loading performance and error states
- Accessibility compliance (WCAG guidelines)

Provide specific recommendations for improvements.
```

### 8. DOCUMENTATION & PRESENTATION PROMPTS

#### 8.1 Technical Documentation

```
Create comprehensive documentation for the healthcare simulation including:
- Data schema and relationship explanations
- Component architecture and data flow
- Setup and installation instructions
- API/data integration possibilities
- Customization and extension guidelines

Format as clear, scannable documentation with code examples.
```

#### 8.2 Business Case Presentation

```
Develop a compelling presentation showcasing:
- Member journey transformation (before/after metrics)
- Service delivery optimization insights
- Team performance analytics and improvements
- Technology integration success factors
- Scalability and business impact potential

Include executive summary, key findings, and actionable recommendations.
```

---

## PROMPT USAGE STRATEGY

### Phase 1: Data Foundation (Prompts 1.1-1.3)
Use these prompts to establish comprehensive, realistic datasets that form the foundation of the simulation.

### Phase 2: Behavioral Modeling (Prompts 2.1-2.2, 3.1-3.2)
Apply these to create authentic human behavior patterns and service friction points.

### Phase 3: Interface Development (Prompts 4.1-4.2, 6.1-6.2)
Implement the user interface and technical architecture using these structured prompts.

### Phase 4: Narrative & Polish (Prompts 5.1-5.2, 7.1-7.2)
Refine the storytelling and ensure quality across all components.

### Phase 5: Documentation (Prompts 8.1-8.2)
Create comprehensive documentation and presentation materials.

## KEY SUCCESS FACTORS

1. **Iterative Refinement**: Use follow-up prompts to refine outputs based on initial results
2. **Cross-Validation**: Ensure consistency across different AI-generated components
3. **Human Oversight**: Review AI outputs for medical accuracy and realistic scenarios
4. **Integration Testing**: Validate that all components work together seamlessly

These prompts are designed to be specific enough to generate high-quality outputs while flexible enough to accommodate different AI tools and implementation approaches.