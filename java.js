function convert() 
{
    var fahrenheitInput = document.getElementById("fahrenheit");
    var celsiusResult = document.getElementById("celsiusResult");
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsius = (fahrenheit - 32) * 5 / 9;
    celsiusResult.innerText = celsius.toFixed(2) + " °C";
}  