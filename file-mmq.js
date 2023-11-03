function calculateTemperature() {
  const input = document.getElementById("input").value;
  const unit = document.getElementById("unit").value;
  let output;

  if (unit === "celsius") {
    output = (input * 9) / 5 + 32;
  } else if (unit === "fahrenheit") {
    output = ((input - 32) * 5) / 9;
  } else if (unit === "kelvin") {
    output = parseFloat(input) + 273.15; // Convert to a floating-point number and then add 273.15
  }

  document.getElementById(
    "output"
  ).textContent = `Temperature in ${unit.toUpperCase()} is ${output.toFixed(
    2
  )}`;
}
