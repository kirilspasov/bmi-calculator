let weightInput = document.querySelector("#weight");
let heightInput = document.querySelector("#height");
let bmiInput = document.querySelector("#bmi");
let ageInput = document.querySelector("#age");
let warning = document.querySelector(".right-column");
const calculateButton = document.querySelector(".calculate");
const clearButton = document.querySelector(".clear");
let message = document.querySelector(".msg");

function clearValues() {
  weightInput.value = "";
  heightInput.value = "";
  bmiInput.value = "";
  ageInput.value = "";
  message.innerText = "";
}

function sanitizeInput(event) {
  event.target.value = event.target.value.replace(/[^0-9]/g, "");
}

weightInput.addEventListener("input", sanitizeInput);
heightInput.addEventListener("input", sanitizeInput);

calculateButton.addEventListener("click", function () {
  let weight = weightInput.value.trim();
  let height = heightInput.value.trim();
  let units = document.querySelector("#units").value;

  if (isNaN(weight) || isNaN(height) || weight === "" || height === "") {
    return false;
  }

  let bmi;

  if (units === "pounds") {
    bmi = (weight / (height * height)) * 703;
  } else {
    bmi = (weight / (height * height)) * 10000;
  }

  bmiInput.value = bmi.toFixed(2) + "%";

  if (bmi > 29) {
    message.innerText =
      "You are obese. Improve diet and start working out at least 3 to 4 times a week.";
  } else if (bmi > 25) {
    message.innerText =
      "You are overweight. A brisk walk and diet improvement is recommended.";
  } else if (bmi < 18) {
    message.innerText =
      "You are underweight. You should increase caloric intake. A protein-oriented, healthy diet and working out can help put on weight and increase muscle mass";
  } else {
    message.innerText = "Your BMI is in a normal range";
  }
});
