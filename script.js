(function() {
  emailjs.init("904UCyePGrHqkTcP0");
})();

document.getElementById("bmiForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
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
      `Hello ${name}, your BMI is <b>${bmi}</b> (${category})`;

    // Send email
    sendEmail(name, email, bmi, category);
  } else {
    document.getElementById("result").innerHTML = "Please enter valid values.";
  }
});

function sendEmail(name, email, bmi, category) {
  const templateParams = {
    to_email: email,
    to_name: name,
    bmi: bmi,
    category: category
  };

  emailjs.send('service_7216f1v', 'template_b614aol', templateParams)
    .then(function(response) {
      console.log('Email sent successfully!', response.status, response.text);
      alert('BMI result sent to your email!');
    }, function(error) {
      console.log('Failed to send email:', error);
      alert('Failed to send email. Please try again.');
    });
}
