let functionInput = document.getElementById("function");
let xValueInput = document.getElementById("xValue");
let precisionInput = document.getElementById("precision");
let derivativePrecisionInput = document.getElementById("derivativePrecision");
let solutionDiv = document.getElementById("result");

let newtonsMethod = new NewtonsMethod();
updateSettings();

function updateSettings() {
    let settings = {};
    settings.f = new Function("x", "return " + functionInput.value + ";"); 
    settings.precision = Number.parseFloat(precisionInput.value);
    settings.derivativePrecision = Number.parseFloat(derivativePrecisionInput.value);
    try {
        newtonsMethod.update(settings);
    } catch (e) {
        console.log(e);
        if (e.name = "NumberFormatError") {
            printResult("Неверный ввод чисел в параметрах");
        } else {
            printResult("Неверный ввод функции в параметрах")
        }
    }
}

function getResult() {
    try {
        let x = Number.parseFloat(xValueInput.value);
        let result = newtonsMethod.getResult(x);
        printResult(result);
    } catch (e) {
        if (e.name == "FunctionFormatError") {
            printResult("Функция задана неправильно!");
        }
        console.log(e);
    }
}

function printResult(result) {
    solutionDiv.innerHTML = "";
    let str = "Результат выполнения функции: " + result
    addTextToDiv(str)
}

function addTextToDiv(str) {
    let p = document.createElement("p");
    p.innerText = str;
    solutionDiv.appendChild(p);
}