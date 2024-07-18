// Get references to the relevant DOM elements
const calculateBMIButton = document.getElementById("calculate-bmi");
const resetButton = document.getElementById("reset");
const bmiResult = document.getElementById("bmi-result");
const bmiCategory = document.getElementById("bmi-category");
const bmiExplanation = document.getElementById("bmi-explanation");

// Add event listeners to buttons
calculateBMIButton.addEventListener("click", calculation);
resetButton.addEventListener("click", resetForm);

// Function to calculate BMI
function calculation(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  const gender = document.querySelector('input[name="gender"]:checked');
  const age = parseInt(document.getElementById("usia").value);
  const weight = parseFloat(document.getElementById("berat").value);
  const height = parseFloat(document.getElementById("tinggi").value);

  // validation
  if (!gender || isNaN(age) || isNaN(weight) || isNaN(height)) {
    alert("Enter the correct data!"); // Alert if data is incorrect
    return; // Exit function if validation fails
  }

  // convert height to meter
  const heightMeter = height / 100;

  // Calculate BMI
  const bmi = weight / (heightMeter * heightMeter);

  // display result
  bmiResult.textContent = bmi.toFixed(1);

  // Determine BMI category and explanation
  let category = "";
  let explanation = "";
  if (bmi < 18.5) {
    category = "Underweight";
    explanation =
      "You are in the Underweight category. Consider increasing your calorie intake and focusing on nutrient-rich foods. Consult with a healthcare provider for a personalized plan.";
  } else if (bmi >= 18.5 && bmi < 25) {
    category = "Normal Weight";
    explanation =
      "You are in the Normal Weight category. Continue to maintain a balanced diet and regular exercise to stay healthy.";
  } else if (bmi >= 25 && bmi < 30) {
    category = "Overweight";
    explanation =
      "You are in the Overweight category. Consider incorporating more physical activity into your daily routine and adopting healthier eating habits. Consulting with a healthcare provider for personalized advice could be beneficial.";
  } else {
    category = "Obesity";
    explanation =
      "You are in the Obesity category. It is advisable to work on a weight loss plan that includes a balanced diet and regular exercise. Seeking guidance from a healthcare provider or a dietitian can help create a tailored plan for you.";
  }

  // Display BMI category and explanation
  bmiCategory.textContent = category;
  bmiExplanation.textContent = explanation;
}

// Function to reset the form
function resetForm(event) {
  event.preventDefault(); // Prevent form submission

  // Clear gender selection
  const genderInputs = document.querySelectorAll('input[name="gender"]');
  genderInputs.forEach((input) => (input.checked = false));

  // Clear input values
  document.getElementById("usia").value = "";
  document.getElementById("berat").value = "";
  document.getElementById("tinggi").value = "";

  // Reset BMI result and explanation
  bmiResult.textContent = "0.0";
  bmiCategory.textContent = "";
  bmiExplanation.textContent = "";
}
