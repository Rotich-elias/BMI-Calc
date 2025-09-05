# BMI Calculator

A web-based BMI calculator that collects user details and sends BMI results via email.

## Features
- Calculate BMI based on weight and height
- Collect user name and email
- Send BMI result to user's email using EmailJS

## Files
- `index.html` → Main webpage with BMI calculator form
- `script.js` → JavaScript for BMI calculation and email sending
- `styles.css` → Styling for the webpage
- `hello.py` → Basic Flask backend (not integrated yet)

## Setup EmailJS
1. Sign up at https://www.emailjs.com/
2. Create a service, template, and get your public key
3. In `script.js`, replace:
   - `YOUR_PUBLIC_KEY` with your EmailJS public key
   - `YOUR_SERVICE_ID` with your service ID
   - `YOUR_TEMPLATE_ID` with your template ID
4. In your EmailJS template, use variables: {{to_name}}, {{bmi}}, {{category}}

## How to Run
Open `index.html` in a web browser.
