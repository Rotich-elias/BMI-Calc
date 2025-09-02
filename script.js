document.getElementById("bmiForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  if (weight > 0 && height > 0) {
    let bmi = (weight / ((height / 100) ** 2)).toFixed(2);
    let category = "";

    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      category = "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
      category = "Overweight";
    } else {
      category = "Obese";
    }

    document.getElementById("result").innerHTML =
      `Your BMI is <b>${bmi}</b> (${category})`;
  } else {
    document.getElementById("result").innerHTML = "Please enter valid values.";
  }
});
