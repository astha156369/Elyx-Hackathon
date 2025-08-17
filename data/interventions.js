// data/interventions.js
// Interventions and Plans Evolution (completed)
// This file continues and finishes the interventionsTimeline array you started.
// It is valid ESM. If you need CommonJS, replace the export line with `module.exports = interventionsTimeline;`

const interventionsTimeline = [
  // Month 1: Initial Interventions
  {
    period: "April 2024",
    phase: "Foundation Building",
    interventions: [
      {
        type: "nutrition",
        name: "Mediterranean-Style Anti-Inflammatory Plan",
        implementationDate: "2024-04-29",
        owner: "Carla",
        details: {
          focus: ["cholesterol_reduction", "inflammation_control", "cardiovascular_health"],
          keyComponents: [
            "Omega-3 rich foods 3x/week",
            "Daily antioxidant-rich vegetables",
            "Lean protein optimization",
            "Refined sugar elimination"
          ],
          supplements: ["Omega-3 2g daily", "Magnesium glycinate 400mg", "Antioxidant complex"],
          adherenceTarget: 0.70,
          actualAdherence: 0.45
        },
        modifications: [
          {
            date: "2024-05-09",
            reason: "Travel compliance issues",
            change: "Simplified morning supplement routine (moved omega-3 + magnesium to dinner)."
          }
        ]
      },
      {
        type: "exercise",
        name: "Cardiovascular-Strength Hybrid Program",
        implementationDate: "2024-05-13",
        owner: "Rachel",
        details: {
          frequency: "4 sessions/week, 45 minutes each",
          focus: ["blood_pressure_reduction", "strength_building", "cardiovascular_fitness"],
          keyComponents: [
            "Compound movements 2x/week",
            "HIIT cardio 2x/week",
            "Mobility work daily"
          ],
          progressionPlan: "Bi-weekly program updates",
          adherenceTarget: 0.80,
          actualAdherence: 0.55
        },
        modifications: [
          {
            date: "2024-05-24",
            reason: "Travel + HRV dips",
            change: "Reduced interval intensity during travel; introduced maintenance plan for hotel gyms."
          }
        ]
      },
      {
        type: "lifestyle",
        name: "Sleep Optimization Protocol",
        implementationDate: "2024-05-20",
        owner: "Advik",
        details: {
          focus: ["sleep_quality_improvement", "recovery_optimization"],
          keyComponents: [
            "Consistent sleep schedule",
            "Blue light management",
            "Bedroom environment optimization",
            "Pre-sleep routine establishment"
          ],
          adherenceTarget: 0.60,
          actualAdherence: 0.40
        },
        modifications: [
          {
            date: "2024-06-01",
            reason: "Low adherence due to late work calls",
            change: "Introduced wind-down micro-routines and travel-friendly sleep hacks (eye mask + white noise)."
          }
        ]
      }
    ]
  },

  // Month 2-3: Plan Adjustments
  {
    period: "May-June 2024",
    phase: "Adaptation and Refinement",
    interventions: [
      {
        type: "travel_protocol",
        name: "Business Travel Health Maintenance",
        implementationDate: "2024-05-06",
        owner: "Ruby + Team",
        details: {
          focus: ["travel_adherence", "routine_maintenance", "jet_lag_mitigation"],
          keyComponents: [
            "Hotel gym workout adaptations",
            "Travel-friendly meal guidelines",
            "Time zone adjustment protocols",
            "Supplement travel packs"
          ],
          adherenceTarget: 0.50,
          actualAdherence: 0.30
        },
        improvements: [
          {
            date: "2024-08-12",
            change: "Simplified travel protocols based on member feedback; created pre-packed travel kits and partner restaurant lists",
            newAdherence: 0.85
          }
        ]
      }
    ]
  },

  // Month 4-5: Enhanced Protocols
  {
    period: "July-August 2024",
    phase: "Optimization and Integration",
    interventions: [
      {
        type: "precision_sleep",
        name: "Data-Driven Sleep Optimization",
        implementationDate: "2024-08-16",
        owner: "Advik",
        details: {
          focus: ["deep_sleep_maximization", "cognitive_performance", "recovery_optimization"],
          keyComponents: [
            "Room temperature 67-69°F",
            "Blue light cutoff 9 PM",
            "Magnesium glycinate timing optimization",
            "4-7-8 breathing technique"
          ],
          adherenceTarget: 0.80,
          actualAdherence: 0.85,
          results: "15% increase in deep sleep, 22% cognitive performance improvement"
        },
        modifications: [
          {
            date: "2024-08-30",
            reason: "Fine-tune dose timing for travel days",
            change: "Added flexible magnesium timing and short nap protocol when crossing >8 hours time zones"
          }
        ]
      },
      {
        type: "nutrition_advancement",
        name: "Precision Nutrition with CGM Integration",
        implementationDate: "2024-07-26",
        owner: "Carla",
        details: {
          focus: ["glucose_optimization", "inflammation_reduction", "performance_nutrition"],
          keyComponents: [
            "Continuous glucose monitoring",
            "Meal timing optimization",
            "Targeted phytonutrients",
            "Performance nutrition protocols"
          ],
          adherenceTarget: 0.85,
          actualAdherence: 0.80,
          results: "Improved glucose stability; reduced post-prandial spikes on travel days"
        },
        modifications: [
          {
            date: "2024-08-10",
            reason: "CGM data showed late-night spikes during travel",
            change: "Adjusted evening meal composition and added low-GI snack options for flights."
          }
        ]
      }
    ]
  },

  // Month 6-7: Performance Phase
  {
    period: "September-October 2024",
    phase: "Performance Optimization",
    interventions: [
      {
        type: "advanced_training",
        name: "Periodized Performance Training",
        implementationDate: "2024-10-20",
        owner: "Rachel",
        details: {
          focus: ["peak_performance", "strength_maximization", "advanced_recovery"],
          keyComponents: [
            "Periodization protocols (4-week blocks)",
            "Sport-specific/role-specific movements",
            "Advanced recovery techniques (contrast baths, percussion tools)",
            "Performance testing (VO2 estimate, grip strength, functional movement)"
          ],
          testingPlan: {
            schedule: "Baseline at start of block, mid-block check, end-block performance test",
            metrics: ["VO2_estimate", "1RM_estimates", "grip_strength", "functional_movement_score"]
          },
          adherenceTarget: 0.85,
          actualAdherence: 0.75
        },
        modifications: [
          {
            date: "2024-11-01",
            reason: "Member travel and workload spike",
            change: "Shifted intensity peaks to align with lower travel windows; added micro-sessions for travel days"
          }
        ],
        results: "Increased strength markers (~6% on compound lifts) and maintained cardiovascular improvements"
      },

      {
        type: "cardio_monitoring",
        name: "Cardiovascular Surveillance & Pharmacology Watchlist",
        implementationDate: "2024-09-01",
        owner: "Dr. Warren",
        details: {
          focus: ["lipid_monitoring", "inflammation_tracking", "BP_control", "shared_decision_medicine"],
          keyComponents: [
            "Quarterly lipid panels and CRP",
            "Blood pressure home monitoring protocol",
            "Decision thresholds for statin discussion",
            "Pharmacogenomics review if medication initiated"
          ],
          adherenceTarget: 1.0,
          actualAdherence: 0.95
        },
        triggers: {
          statin_consideration: "LDL persistently >140 mg/dL after 12 weeks lifestyle OR rapid rise + family history",
          escalate_cardiology: "Symptoms or CAC score >100 or concerning imaging"
        },
        modifications: [
          {
            date: "2024-07-29",
            reason: "Shared decision with member and PCP conflict",
            change: "Added formal evidence summary step and PCP liaison workflow; introduced conservative statin prescription pathway if consensus reached"
          }
        ]
      },

      {
        type: "device_integration",
        name: "Wearable Fusion (Garmin + Whoop)",
        implementationDate: "2024-10-03",
        owner: "Advik",
        details: {
          focus: ["sleep", "HRV", "recovery", "activity_tracking"],
          keyComponents: [
            "Unified dashboard with stage-based alerts",
            "Weekly HRV trend reporting",
            "Auto-detect travel-related circadian disruptions",
            "Push alerts to PA for schedule adjustments"
          ],
          adherenceTarget: 1.0,
          actualAdherence: 0.95,
          results: "HRV responsiveness improved; ability to pre-emptively reduce load during travel"
        }
      }
    ]
  },

  // Month 8: Maintenance & Transition to Long-term Surveillance
  {
    period: "November-December 2024",
    phase: "Maintenance & Handoff Ready",
    interventions: [
      {
        type: "maintenance_cadence",
        name: "Bi-weekly Coaching + Monthly Reports",
        implementationDate: "2024-11-13",
        owner: "Ruby / Neel",
        details: {
          focus: ["sustainability", "early_detection", "minimal-friction monitoring"],
          keyComponents: [
            "Bi-weekly coach check-ins (virtual)",
            "Monthly consolidated health report (executive)",
            "Quarterly labs (lipids, CRP, HbA1c)",
            "Alert triggers (LDL +15 mg/dL, HRV drop >15% x3 weeks, CRP rise >1.0 mg/L)"
          ],
          adherenceTarget: 0.90,
          actualAdherence: 0.88,
          rationale: "Reduce touchpoints while preserving surveillance; focus on triggers to re-escalate."
        }
      },

      {
        type: "family_communication",
        name: "Family-Friendly Summary & Escalation Plan",
        implementationDate: "2024-11-14",
        owner: "Neel",
        details: {
          focus: ["family_engagement", "simplified_monitoring", "escalation_contacts"],
          keyComponents: [
            "1-page family summary (non-technical)",
            "Clear contact points for urgent concerns (PA -> Ruby -> Neel -> Dr. Warren)",
            "Instructions on what to watch for (dizziness, chest pain, acute cognitive change)"
          ],
          adherenceTarget: 1.0,
          actualAdherence: 1.0
        }
      },

      {
        type: "data_governance",
        name: "Archive & Traceability Workflow",
        implementationDate: "2024-11-30",
        owner: "Ruby / Compliance",
        details: {
          focus: ["audit_readiness", "traceability", "exportability"],
          keyComponents: [
            "Archive of all tests, decisions, and key messages",
            "Mapping messages -> decisions -> tests for third-party review",
            "Versioned exports for external specialists"
          ],
          rationale: "Ensure any third party can retrace the clinical reasoning and evidence supporting each decision."
        }
      }
    ]
  },

  // Forward-looking items (early 2025): planned but not yet implemented (traceable)
  {
    period: "Planned 2025",
    phase: "Proactive Screening & Long-Term Optimization",
    interventions: [
      {
        type: "imaging_plan",
        name: "Coronary Calcium Score (CAC) - Watchlist",
        implementationDate: "2025-04-01 (watchlist target)",
        owner: "Dr. Warren",
        details: {
          focus: ["subclinical_atherosclerosis_detection"],
          keyComponents: [
            "Schedule CAC in Q2 2025 window",
            "If CAC > 0, stratify risk and consider cardiology consult",
            "Add vascular imaging results to long-term risk model"
          ],
          rationale: "Family history + prior borderline biomarkers justify periodic imaging to detect early disease."
        }
      },
      {
        type: "annual_full_body",
        name: "Annual Full-Body Screening (MRI optional)",
        implementationDate: "2025-11-01",
        owner: "Neel / Ruby",
        details: {
          focus: ["early_cancer_detection", "comprehensive_surveillance"],
          keyComponents: [
            "Full diagnostic panel + targeted imaging as indicated",
            "Cognitive re-assessment",
            "Bone density and body composition re-evaluation"
          ],
          rationale: "Annual screening to meet member's core outcomes and provide peace-of-mind."
        }
      }
    ]
  }
]

// Export (ESM). If you need CommonJS, replace with: module.exports = interventionsTimeline;
export default interventionsTimeline;
