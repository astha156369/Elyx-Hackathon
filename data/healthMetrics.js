const healthMetricsEvolution = {
  // Baseline (April 1, 2024)
  baseline: {
    date: "2024-04-01",
    biomarkers: {
      bloodPressure: { systolic: 138, diastolic: 88, status: "stage_1_hypertension" },
      cholesterol: { 
        total: 195, 
        ldl: 125, 
        hdl: 42, 
        triglycerides: 140,
        status: "borderline_high" 
      },
      glucose: { fasting: 98, hba1c: 5.3, status: "normal" },
      inflammation: { crp: 2.8, status: "elevated" },
      hormones: {
        cortisol: { morning: 18.5, evening: 8.2 },
        testosterone: 485,
        thyroid: { tsh: 2.1, t3: 3.2, t4: 1.1 }
      }
    },
    wearableData: {
      hrv: { rmssd: 28, status: "below_average" },
      sleep: { 
        duration: 6.2, 
        efficiency: 78, 
        deepSleep: 0.9, 
        remSleep: 1.8,
        status: "suboptimal" 
      },
      activity: { 
        steps: 7500, 
        activeMinutes: 35,
        vo2max: 42,
        restingHeartRate: 68
      }
    },
    assessments: {
      cognitiveScore: 78,
      stressLevel: 7.2, // 1-10 scale
      energyLevel: 5.8,
      wellbeingScore: 6.2
    },
    bodyComposition: {
      weight: 78.5,
      bodyFat: 18.2,
      muscleMass: 38.7,
      visceralFat: 12
    }
  },

  // Month 1 Results (April 15, 2024 - Post Initial Testing)
  month1: {
    date: "2024-04-15",
    biomarkers: {
      bloodPressure: { systolic: 136, diastolic: 86, status: "stage_1_hypertension" },
      cholesterol: { total: 195, ldl: 125, hdl: 42, triglycerides: 140, status: "confirmed_borderline" },
      glucose: { fasting: 96, hba1c: 5.3, status: "normal" },
      inflammation: { crp: 2.8, status: "elevated" }
    },
    notes: "Comprehensive baseline established. All systems confirmed for intervention planning."
  },

  // Month 2 Progress (May 15, 2024)  
  month2: {
    date: "2024-05-15",
    biomarkers: {
      bloodPressure: { systolic: 134, diastolic: 85, status: "improving" },
      inflammation: { crp: 2.5, status: "slight_improvement" }
    },
    wearableData: {
      hrv: { rmssd: 31, status: "improving" },
      sleep: { duration: 6.5, efficiency: 80, deepSleep: 1.1, status: "improving" },
      activity: { steps: 8200, activeMinutes: 42, vo2max: 43 }
    },
    assessments: {
      cognitiveScore: 80,
      stressLevel: 6.8,
      energyLevel: 6.2,
      adherenceRate: 0.45
    },
    notes: "Early improvements visible. Some adherence challenges with travel."
  },

  // Month 3 Progress (June 15, 2024)
  month3: {
    date: "2024-06-15", 
    biomarkers: {
      bloodPressure: { systolic: 130, diastolic: 83, status: "significant_improvement" },
      inflammation: { crp: 2.2, status: "improving" }
    },
    wearableData: {
      hrv: { rmssd: 33, status: "good_progress" },
      sleep: { duration: 6.8, efficiency: 82, deepSleep: 1.3, status: "good_improvement" },
      activity: { steps: 8800, activeMinutes: 48, vo2max: 44 }
    },
    assessments: {
      cognitiveScore: 83,
      stressLevel: 6.2,
      energyLevel: 6.8,
      adherenceRate: 0.55
    },
    notes: "Steady progress despite mid-program challenges. Member feedback addressed."
  },

  // Month 4 Quarterly Results (July 17, 2024)
  month4: {
    date: "2024-07-17",
    biomarkers: {
      bloodPressure: { systolic: 128, diastolic: 82, status: "excellent_progress" },
      cholesterol: { 
        total: 175, 
        ldl: 105, 
        hdl: 48, 
        triglycerides: 110,
        status: "significant_improvement" 
      },
      glucose: { fasting: 92, hba1c: 5.1, status: "optimal" },
      inflammation: { crp: 1.9, status: "good_improvement" }
    },
    wearableData: {
      hrv: { rmssd: 35, status: "above_average" },
      sleep: { duration: 7.1, efficiency: 84, deepSleep: 1.5, status: "good" },
      activity: { steps: 9200, activeMinutes: 52, vo2max: 46 }
    },
    assessments: {
      cognitiveScore: 86,
      stressLevel: 5.5,
      energyLevel: 7.5,
      adherenceRate: 0.70
    },
    bodyComposition: {
      weight: 77.8,
      bodyFat: 16.5,
      muscleMass: 40.2,
      visceralFat: 9
    },
    notes: "Excellent quarterly progress. All major biomarkers improving significantly."
  },

  // Month 5 Continued Progress (August 15, 2024)
  month5: {
    date: "2024-08-15",
    wearableData: {
      hrv: { rmssd: 37, status: "excellent" },
      sleep: { duration: 7.3, efficiency: 85, deepSleep: 1.6, status: "very_good" },
      activity: { steps: 9500, activeMinutes: 58, vo2max: 47 }
    },
    assessments: {
      cognitiveScore: 88,
      stressLevel: 5.0,
      energyLevel: 8.0,
      adherenceRate: 0.80
    },
    notes: "Sleep optimization protocols showing excellent results. High adherence achieved."
  },

  // Month 6 Mid-Program Excellence (September 15, 2024)
  month6: {
    date: "2024-09-15",
    biomarkers: {
      bloodPressure: { systolic: 124, diastolic: 80, status: "optimal_range" },
      inflammation: { crp: 1.4, status: "excellent" }
    },
    wearableData: {
      hrv: { rmssd: 38, status: "excellent" },
      sleep: { duration: 7.4, efficiency: 86, deepSleep: 1.7, status: "excellent" },
      activity: { steps: 10000, activeMinutes: 62, vo2max: 48 }
    },
    assessments: {
      cognitiveScore: 92,
      stressLevel: 4.5,
      energyLevel: 8.5,
      adherenceRate: 0.85
    },
    notes: "Breakthrough cognitive performance. Stress resilience dramatically improved."
  },

  // Month 7 Quarterly Excellence (October 15, 2024)
  month7: {
    date: "2024-10-15",
    biomarkers: {
      bloodPressure: { systolic: 122, diastolic: 78, status: "optimal" },
      cholesterol: { 
        total: 158, 
        ldl: 88, 
        hdl: 55, 
        triglycerides: 85,
        status: "excellent" 
      },
      glucose: { fasting: 88, hba1c: 4.9, status: "excellent" },
      inflammation: { crp: 0.8, status: "optimal" },
      hormones: {
        cortisol: { morning: 15.2, evening: 6.8 },
        testosterone: 542,
        thyroid: { tsh: 1.8, t3: 3.6, t4: 1.3 }
      }
    },
    wearableData: {
      hrv: { rmssd: 40, status: "exceptional" },
      sleep: { duration: 7.6, efficiency: 88, deepSleep: 1.8, status: "excellent" },
      activity: { steps: 10500, activeMinutes: 68, vo2max: 50 }
    },
    assessments: {
      cognitiveScore: 95,
      stressLevel: 3.8,
      energyLevel: 9.0,
      adherenceRate: 0.90
    },
    bodyComposition: {
      weight: 77.2,
      bodyFat: 14.8,
      muscleMass: 42.1,
      visceralFat: 7
    },
    notes: "Exceptional results across all parameters. Performance optimization phase initiated."
  },

  // Month 8 Final Results (November 25, 2024)
  month8: {
    date: "2024-11-25",
    biomarkers: {
      bloodPressure: { systolic: 118, diastolic: 75, status: "optimal" },
      cholesterol: { 
        total: 145, 
        ldl: 78, 
        hdl: 58, 
        triglycerides: 75,
        status: "optimal" 
      },
      glucose: { fasting: 85, hba1c: 4.8, status: "optimal" },
      inflammation: { crp: 0.6, status: "optimal" }
    },
    wearableData: {
      hrv: { rmssd: 42, status: "exceptional" },
      sleep: { duration: 7.8, efficiency: 90, deepSleep: 1.9, status: "optimal" },
      activity: { steps: 11000, activeMinutes: 72, vo2max: 52 }
    },
    assessments: {
      cognitiveScore: 102, // 32% improvement from baseline
      stressLevel: 3.2,
      energyLevel: 9.5,
      adherenceRate: 0.92
    },
    bodyComposition: {
      weight: 76.8,
      bodyFat: 13.5,
      muscleMass: 43.8,
      visceralFat: 6
    },
    notes: "Outstanding transformation complete. All health goals exceeded significantly."
  }
};


export default healthMetricsEvolution;