// File: data/memberProfile.js
// Complete member profile for Rohan Patel with all constraints and timeline structure

const memberProfile = {
  // Basic Information
  id: "rohan_patel_001",
  basicInfo: {
    preferredName: "Rohan Patel",
    dateOfBirth: "1979-03-12",
    age: 46,
    genderIdentity: "Male",
    primaryResidence: "Singapore",
    frequentTravelHubs: ["UK", "US", "South Korea", "Jakarta"],
    occupation: "Regional Head of Sales for FinTech company",
    personalAssistant: "Sarah Tan"
  },

  // Health Goals & Outcomes (Phase 1.1)
  healthGoals: [
    {
      id: "goal_heart_disease",
      description: "Reduce risk of heart disease (due to family history)",
      targetDate: "2026-12-31",
      targetMetrics: ["cholesterol", "blood_pressure", "inflammatory_markers"],
      baseline: {
        cholesterol: { total: 195, ldl: 125, hdl: 42 },
        bloodPressure: { systolic: 138, diastolic: 88 },
        crp: 2.8
      },
      currentProgress: 0.15
    },
    {
      id: "goal_cognitive_function",
      description: "Enhance cognitive function and focus for sustained mental performance",
      targetDate: "2026-06-30",
      targetMetrics: ["cognitive_assessment_scores", "sleep_quality", "stress_resilience"],
      baseline: {
        cognitiveScore: 78,
        sleepQuality: 65,
        stressLevel: 7
      },
      currentProgress: 0.20
    },
    {
      id: "goal_preventive_screening",
      description: "Implement annual full-body health screenings for early detection",
      targetDate: "2025-11-30",
      targetMetrics: ["screening_completion", "biomarker_trending"],
      baseline: { lastComprehensiveScreening: "2023-01-15" },
      currentProgress: 0.10
    }
  ],

  // Chronic Conditions (Phase 1.1)
  chronicConditions: [
    {
      condition: "mild_hypertension",
      diagnosedDate: "2023-08-15",
      severity: "mild",
      currentTreatment: "lifestyle_modifications",
      monitoringFrequency: "weekly",
      familyHistory: true
    }
  ],

  // Key Constraints Implementation (Phase 1.3)
  constraints: {
    timeCommitment: {
      hoursPerWeek: 5,
      preferredTimeSlots: ["morning_6_7am", "evening_7_9pm"],
      constraints: ["frequent_travel", "high_stress_job"]
    },
    travelPattern: {
      frequency: "1_week_every_4_weeks", // 25% of time
      destinations: ["UK", "US", "South Korea", "Jakarta"],
      impactOnPlanning: "high",
      advanceNotice: "2_weeks_typical"
    },
    adherenceProfile: {
      expectedRate: 0.50, // 50% plan adherence rate
      strongAreas: ["technology_adoption", "data_tracking"],
      weakAreas: ["meal_planning", "stress_management"],
      motivationTriggers: ["data_insights", "efficiency_gains"]
    }
  },

  // Timeline Structure (Phase 1.2)
  journeyTimeline: {
    startDate: "2024-04-01",
    endDate: "2024-12-01",
    phases: {
      month1: {
        name: "Onboarding & Initial Assessments",
        period: "2024-04-01 to 2024-04-30",
        keyActivities: ["member_onboarding", "medical_history_review", "initial_test_scheduling"],
        diagnosticTests: ["comprehensive_blood_panel", "physical_exam", "baseline_assessments"]
      },
      months2_3: {
        name: "First Intervention Cycle",
        period: "2024-05-01 to 2024-06-30",
        keyActivities: ["intervention_implementation", "weekly_checkins", "plan_adjustments"],
        diagnosticTests: [] // No quarterly tests this period
      },
      months4_5: {
        name: "Plan Adjustments & Travel Adaptations",
        period: "2024-07-01 to 2024-08-31",
        keyActivities: ["travel_adaptations", "plan_modifications", "progress_evaluation"],
        diagnosticTests: ["quarterly_blood_panel", "fitness_assessments"] // Month 4 tests
      },
      months6_7: {
        name: "Progress Evaluation & Plan Refinement",
        period: "2024-09-01 to 2024-10-31",
        keyActivities: ["comprehensive_review", "goal_reassessment", "intervention_optimization"],
        diagnosticTests: ["advanced_biomarkers", "cognitive_assessments"] // Month 7 tests
      },
      month8: {
        name: "Comprehensive Review & Future Planning",
        period: "2024-11-01 to 2024-11-30",
        keyActivities: ["final_assessment", "long_term_planning", "program_evaluation"],
        diagnosticTests: ["comprehensive_final_panel"]
      }
    }
  },

  // Behavioral & Psychosocial Profile
  behavioralProfile: {
    personality: ["analytical", "driven", "efficiency_focused"],
    values: ["evidence_based_approaches", "time_optimization", "family_health"],
    changeReadiness: "highly_motivated_but_time_constrained",
    socialSupport: {
      family: ["supportive_wife", "two_young_children"],
      work: ["high_stress_environment", "frequent_travel_demands"],
      lifestyle: ["home_cook_employed", "PA_for_scheduling"]
    },
    communicationPreferences: {
      preferredChannels: ["whatsapp", "email_for_reports"],
      responseTimeExpectation: "24_48_hours",
      detailLevel: "executive_summary_with_data_access",
      escalationProtocol: "contact_PA_for_urgent_matters"
    }
  },

  // Technology & Data Integration
  techStack: {
    currentWearables: ["garmin_watch"],
    consideringWearables: ["oura_ring"],
    healthApps: ["garmin_connect"],
    dataPermissions: "full_sharing_enabled",
    reportingPreferences: {
      frequency: "monthly_consolidated_reports",
      depth: "quarterly_deep_dives",
      format: "executive_summary_with_drill_down"
    }
  },

  // Success Metrics & KPIs
  successMetrics: {
    primary: [
      "blood_pressure_normalization",
      "cholesterol_optimization", 
      "cognitive_performance_improvement",
      "sleep_quality_enhancement"
    ],
    secondary: [
      "stress_resilience_building",
      "exercise_consistency",
      "nutritional_adherence",
      "preventive_screening_completion"
    ],
    tracking: {
      biomarkers: "quarterly",
      wearableData: "continuous",
      assessments: "monthly",
      goalProgress: "weekly"
    }
  }
};

// Travel Schedule Implementation (1 week every 4 weeks)
const travelSchedule = [
  // Month 1 (April 2024)
  { dates: "2024-04-08 to 2024-04-14", destination: "UK", purpose: "sales_meetings" },
  
  // Month 2 (May 2024)  
  { dates: "2024-05-06 to 2024-05-12", destination: "US", purpose: "conference_client_meetings" },
  
  // Month 3 (June 2024)
  { dates: "2024-06-10 to 2024-06-16", destination: "South Korea", purpose: "regional_review" },
  
  // Month 4 (July 2024)
  { dates: "2024-07-08 to 2024-07-14", destination: "Jakarta", purpose: "team_building" },
  
  // Month 5 (August 2024)
  { dates: "2024-08-12 to 2024-08-18", destination: "UK", purpose: "quarterly_planning" },
  
  // Month 6 (September 2024)
  { dates: "2024-09-09 to 2024-09-15", destination: "US", purpose: "product_launch" },
  
  // Month 7 (October 2024)
  { dates: "2024-10-07 to 2024-10-13", destination: "South Korea", purpose: "partnership_negotiations" },
  
  // Month 8 (November 2024)
  { dates: "2024-11-11 to 2024-11-17", destination: "Jakarta", purpose: "year_end_review" }
];

// Diagnostic Test Schedule (Every 3 months - Months 1, 4, 7)
const diagnosticTestSchedule = [
  {
    month: 1,
    date: "2024-04-15",
    testSuite: "comprehensive_initial_panel",
    tests: [
      "clinical_history_review",
      "physical_examination", 
      "vital_signs_assessment",
      "comprehensive_blood_panel",
      "lipid_profile_advanced",
      "micronutrient_analysis",
      "hormone_profiling",
      "inflammatory_markers",
      "genetic_testing",
      "body_composition_dexa",
      "cardiovascular_assessment",
      "cognitive_baseline",
      "fitness_assessment"
    ]
  },
  {
    month: 4,
    date: "2024-07-15", 
    testSuite: "quarterly_progress_panel",
    tests: [
      "blood_panel_comparison",
      "lipid_profile_followup",
      "inflammatory_markers_check",
      "hormone_level_tracking",
      "body_composition_progress",
      "cardiovascular_improvement",
      "fitness_progression_test",
      "cognitive_performance_check"
    ]
  },
  {
    month: 7,
    date: "2024-10-15",
    testSuite: "comprehensive_progress_evaluation", 
    tests: [
      "full_biomarker_panel",
      "advanced_cardiac_screening",
      "comprehensive_hormone_analysis",
      "nutritional_status_assessment",
      "cognitive_function_battery",
      "fitness_capacity_evaluation",
      "stress_resilience_testing",
      "sleep_quality_analysis"
    ]
  }
];

export default { memberProfile, travelSchedule, diagnosticTestSchedule };