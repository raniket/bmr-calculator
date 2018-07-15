export const en = {
  site: {
    name: 'BMR Calculator'
  },
  home: {
    card: {
      title: "Calculate your BMR",
      description: "To determine your current BMR, please provide the following information:"
    },
    input: {
      weight: "weight in kg",
      height: "height in cm",
      age: "age in years",
      gender: {
        male: "Male",
        female: "Female"
      }
    },
    note: {
      title: "What is your BMR?",
      description: "Your BMR (Basal Metabolic Rate) is an estimate of how many calories you'd burn if you were to do nothing but rest for 24 hours. It represents the minimum amount of energy needed to keep your body functioning, including breathing and keeping your heart beating."
    },
    errors: {
      hasWeight: "weight is required",
      weightLimit: "weight can not be less than 1",
      hasHeight: "height is required",
      heightLimit: "height limit is 10 to 250 cms",
      hasAge: "age is required",
      ageLimit: "age limit is 0 to 200 years"
    }
  },
  modal: {
    submitButton: "Calculate Bmr",
    header: {
      unvalid: "Warning!",
      valid: "Basal Metabolic Rate"
    },
    body: {
      unvalid: "Please provide the correct values first.",
      valid: "Your estimated Basal Metabolic Rate (BMR) is: "
    },
    closeButton: "Close"
  }
}