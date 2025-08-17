// File: data/teamProfiles.js
// Complete team member profiles with distinct communication styles (Phase 2.2)

const teamMembers = {
  ruby: {
    id: "ruby_concierge",
    name: "Ruby",
    role: "Concierge / Orchestrator",
    primaryResponsibilities: [
      "logistics_coordination",
      "scheduling_management", 
      "appointment_reminders",
      "follow_up_coordination",
      "member_experience_optimization"
    ],
    communicationStyle: {
      tone: "empathetic_organized_proactive",
      characteristics: [
        "anticipates_member_needs",
        "confirms_every_action",
        "removes_friction",
        "warm_professional",
        "detail_oriented"
      ],
      typicalMessages: [
        "I've taken care of scheduling your...",
        "Just confirming we're all set for...",
        "I noticed you might need help with...",
        "Let me coordinate this for you...",
        "Quick reminder about..."
      ],
      responsePatterns: {
        greeting: "Hi Rohan!",
        confirmation: "Perfect, I've got that sorted",
        proactive: "I've noticed... let me help with that",
        closing: "I'll keep you updated on progress"
      }
    },
    weeklyInteractionFrequency: 6, // High touch point
    specialFocus: ["member_satisfaction", "seamless_experience"]
  },

  dr_warren: {
    id: "dr_warren_medical",
    name: "Dr. Warren",
    role: "Medical Strategist",
    primaryResponsibilities: [
      "clinical_interpretation",
      "medical_record_analysis",
      "diagnostic_strategy_approval",
      "treatment_recommendations",
      "medical_direction_setting"
    ],
    communicationStyle: {
      tone: "authoritative_precise_scientific",
      characteristics: [
        "evidence_based_explanations",
        "clear_medical_terminology",
        "structured_recommendations",
        "clinical_authority",
        "patient_education_focused"
      ],
      typicalMessages: [
        "Based on your latest results...",
        "The clinical data shows...", 
        "From a medical perspective...",
        "I recommend we consider...",
        "The evidence suggests..."
      ],
      responsePatterns: {
        analysis: "Looking at your biomarkers,",
        recommendation: "My clinical recommendation is",
        explanation: "This is significant because",
        caution: "We need to monitor this closely"
      }
    },
    weeklyInteractionFrequency: 2, // Medical consultations
    specialFocus: ["clinical_outcomes", "medical_safety"]
  },

  advik: {
    id: "advik_performance",
    name: "Advik", 
    role: "Performance Scientist",
    primaryResponsibilities: [
      "wearable_data_analysis",
      "performance_trend_identification",
      "sleep_recovery_optimization",
      "hrv_cardiovascular_monitoring", 
      "data_driven_insights"
    ],
    communicationStyle: {
      tone: "analytical_curious_pattern_oriented",
      characteristics: [
        "data_driven_communication",
        "hypothesis_testing_approach",
        "trend_identification",
        "experiment_suggestions",
        "quantified_insights"
      ],
      typicalMessages: [
        "Looking at your data patterns...",
        "I've noticed an interesting trend...",
        "The numbers suggest...",
        "Let's run an experiment...",
        "Your metrics show..."
      ],
      responsePatterns: {
        observation: "I'm seeing in your data that",
        hypothesis: "My hypothesis is that",
        experiment: "Let's test this by",
        insight: "This pattern indicates"
      }
    },
    weeklyInteractionFrequency: 3, // Data analysis updates
    specialFocus: ["performance_optimization", "data_insights"]
  },

  carla: {
    id: "carla_nutrition",
    name: "Carla",
    role: "Nutritionist",
    primaryResponsibilities: [
      "nutrition_plan_design",
      "food_log_analysis", 
      "cgm_data_interpretation",
      "supplement_recommendations",
      "chef_coordination"
    ],
    communicationStyle: {
      tone: "practical_educational_behavior_focused",
      characteristics: [
        "explains_nutritional_why",
        "behavioral_change_support",
        "practical_implementation",
        "educational_approach",
        "sustainable_habits"
      ],
      typicalMessages: [
        "Here's why this matters for your health...",
        "I've designed a plan that...",
        "Based on your food logs...",
        "The key is to understand...",
        "Let's make this sustainable..."
      ],
      responsePatterns: {
        education: "The reason behind this is",
        planning: "I've tailored this specifically for",
        adjustment: "Let's modify this to better fit",
        encouragement: "You're making great progress with"
      }
    },
    weeklyInteractionFrequency: 2, // Nutrition guidance
    specialFocus: ["nutritional_optimization", "sustainable_habits"]
  },

  rachel: {
    id: "rachel_physiotherapy",
    name: "Rachel",
    role: "PT / Physiotherapist", 
    primaryResponsibilities: [
      "exercise_programming",
      "movement_pattern_assessment",
      "injury_prevention",
      "strength_training_design",
      "mobility_optimization"
    ],
    communicationStyle: {
      tone: "direct_encouraging_function_focused",
      characteristics: [
        "form_and_function_emphasis",
        "movement_expertise",
        "injury_prevention_focus",
        "progressive_training",
        "practical_movement_advice"
      ],
      typicalMessages: [
        "Focus on proper form...",
        "I've updated your program...",
        "This exercise targets...",
        "Remember to prioritize...",
        "Great progress on..."
      ],
      responsePatterns: {
        instruction: "Make sure you're",
        progression: "We're advancing to",
        correction: "Adjust your form by",
        encouragement: "Your strength is improving in"
      }
    },
    weeklyInteractionFrequency: 2, // Exercise coaching
    specialFocus: ["movement_quality", "injury_prevention"]
  },

  neel: {
    id: "neel_relationship_manager",
    name: "Neel",
    role: "Concierge Lead / Relationship Manager",
    primaryResponsibilities: [
      "strategic_program_reviews",
      "member_relationship_management",
      "goal_alignment_oversight",
      "team_coordination",
      "long_term_vision_planning"
    ],
    communicationStyle: {
      tone: "strategic_reassuring_big_picture_focused",
      characteristics: [
        "long_term_vision_communication",
        "strategic_context_providing", 
        "relationship_building",
        "goal_realignment",
        "program_value_reinforcement"
      ],
      typicalMessages: [
        "Looking at the bigger picture...",
        "This aligns with your long-term goals...",
        "I wanted to provide some context...",
        "Let's step back and review...",
        "The strategic value here is..."
      ],
      responsePatterns: {
        strategy: "From a strategic standpoint",
        context: "To put this in perspective", 
        reassurance: "You're making excellent progress toward",
        alignment: "This directly supports your goal of"
      }
    },
    weeklyInteractionFrequency: 1, // Strategic oversight
    specialFocus: ["strategic_alignment", "member_satisfaction"]
  }
};

// Communication Frequency Distribution (Phase 2.1)
const communicationFrequency = {
  weeklyTotals: {
    memberInitiated: 5, // Member asks questions/raises concerns
    teamCheckIns: 3,    // Proactive team outreach
    progressUpdates: 2, // Status reports and metrics
    planAdjustments: 1.5, // Modifications and adaptations
    emergencyUrgent: 0.5  // Unexpected issues
  },
  totalWeeklyMessages: 35, // Average per week over 8 months
  
  distributionByMember: {
    ruby: 6,      // Highest touch - logistics & coordination
    dr_warren: 2, // Medical consultations & results
    advik: 3,     // Data insights & performance 
    carla: 2,     // Nutrition guidance
    rachel: 2,    // Exercise coaching  
    neel: 1,      // Strategic oversight
    rohan: 5      // Member-initiated conversations
  }
};

// Message Categories & Types (Phase 2.1)
const messageCategories = {
  onboarding: {
    weekRange: "1-2",
    frequency: "high",
    primaryTeam: ["ruby", "dr_warren"],
    topics: ["welcome", "data_collection", "baseline_assessment", "expectation_setting"]
  },
  
  testSchedulingResults: {
    frequency: "quarterly", // Months 1, 4, 7
    primaryTeam: ["ruby", "dr_warren"],
    topics: ["test_preparation", "scheduling", "results_discussion", "interpretation"]
  },
  
  exercisePlanUpdates: {
    frequency: "bi_weekly", // Every 2 weeks
    primaryTeam: ["rachel", "advik"],
    topics: ["program_progression", "form_feedback", "adaptation_needs", "injury_prevention"]
  },
  
  travelAdaptations: {
    frequency: "monthly", // Before each travel period
    primaryTeam: ["ruby", "rachel", "carla"],
    topics: ["travel_prep", "hotel_gym_plans", "nutrition_adjustments", "time_zone_management"]
  },
  
  biomarkerDiscussions: {
    frequency: "post_tests",
    primaryTeam: ["dr_warren", "advik"],
    topics: ["result_interpretation", "trend_analysis", "intervention_adjustments", "goal_progress"]
  },
  
  lifestyleCoaching: {
    frequency: "ongoing",
    primaryTeam: ["carla", "advik", "rachel"],
    topics: ["habit_formation", "optimization_tips", "troubleshooting", "motivation_support"]
  },
  
  planAdherenceIssues: {
    frequency: "50_percent_failure_rate",
    primaryTeam: ["ruby", "neel"],
    topics: ["barrier_identification", "plan_modification", "expectation_reset", "solution_finding"]
  }
};

// Friction Points Implementation (Phase 2.3)
const frictionPoints = {
  schedulingConflicts: {
    frequency: "high_during_travel",
    causes: ["time_zone_differences", "busy_travel_schedule", "last_minute_changes"],
    resolution: ["flexible_rescheduling", "virtual_alternatives", "asynchronous_updates"]
  },
  
  medicalAdviceDisagreements: {
    frequency: "occasional",
    causes: ["external_doctor_opinions", "conflicting_recommendations", "member_research"],
    resolution: ["evidence_presentation", "collaborative_discussion", "second_opinions"]
  },
  
  planAccessibilityIssues: {
    frequency: "moderate",
    causes: ["password_protected_resources", "app_navigation_confusion", "information_overload"],
    resolution: ["simplified_access", "guided_tutorials", "streamlined_communication"]
  },
  
  communicationChannelConfusion: {
    frequency: "early_stages",
    causes: ["multiple_platforms", "team_member_identification", "message_priority_unclear"],
    resolution: ["clear_identification", "channel_purpose_clarification", "streamlined_workflow"]
  },
  
  dataSharingComplications: {
    frequency: "setup_phase",
    causes: ["wearable_connectivity", "app_permissions", "data_sync_delays"],
    resolution: ["technical_support", "alternative_methods", "manual_workarounds"]
  },
  
  planAdherenceChallenges: {
    frequency: "ongoing_50_percent",
    causes: ["time_constraints", "travel_disruptions", "competing_priorities", "motivation_fluctuations"],
    resolution: ["plan_simplification", "flexible_alternatives", "motivation_reinforcement", "realistic_expectations"]
  }
};

export default { teamMembers, communicationFrequency, messageCategories, frictionPoints };