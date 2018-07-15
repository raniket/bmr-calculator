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

  //Using Harris–Benedict equations revised by Mifflin and St Jeor in 1990
  if (gender === 'male')
    return ((10 * weight) + (6.25 * height) - (5 * age) + 5).toFixed(4);
  return ((10 * weight) + (6.25 * height) - (5 * age) - 161).toFixed(4);
}

module.exports.bmrCalculator = bmrCalculator;