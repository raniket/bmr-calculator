/**
 *
 *
 * @param {*} payload patient data
 * @returns bmr of the patient
 */
let bmrCalculator = (payload) => {
  let weight = parseFloat(payload.weight);
  let height = parseFloat(payload.height);
  let age = parseFloat(payload.age);
  let gender = payload.gender;

  // using Revised Harris-Benedict formula to calculate the BMR.
  if (gender === 'male')
    return (66.5 + (13.75 * weight) + (5.003 * height) - (6.755 * age)).toFixed(4);
  return (655.1 + (9.563 * weight) + (1.850 * height) - (4.676 * age)).toFixed(4);
}

module.exports.bmrCalculator = bmrCalculator;