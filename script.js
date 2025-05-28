const buttonClick = document.getElementById("btnGenerate");
const max = 36, min = 1, arraysLength = 5;
const defInfo = document.getElementById("def")
const rsltInfo = document.getElementById("result");
const boxRslt = document.querySelector(".box-result");

function generateNumbers() {
    let numbers = new Array(arraysLength);
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] = Math.floor(Math.random() * (max - min + 1) + min);
    }
    return numbers;
}

function sortGenNumsAsc(genNums) {
    return genNums.sort((a, b) => a - b);
}

function calcAvrg(genNums) {
    let sum = 0;
    for (const number of genNums) {
        sum += number;
    }
    return (sum / genNums.length).toFixed(2);
}

function calcMaxNumber(genNums) {
    return genNums[genNums.length - 1];
}

function calcMinNumber(genNums) {
    return genNums[0];
}

function statistics(minNumber, maxNumber, avg) {
    const info = {
        "Min value": minNumber,
        "Max value": maxNumber,
        "Average": avg,
        toString: function () {
            return JSON.stringify(info);
        }
    };
    rsltInfo.innerHTML =
        `<p>Min value: ${minNumber}</p>
<p>Max value: ${maxNumber}</p>
<p>Average : ${avg}</p>`;
}


buttonClick.onclick = function () {
    let genNums;
    genNums = generateNumbers();
    genNums = sortGenNumsAsc(genNums);
    const minNumber = calcMinNumber(genNums);
    const maxNumber = calcMaxNumber(genNums);
    const avg = calcAvrg(genNums);
    statistics(minNumber, maxNumber, avg);
    defInfo.style.display = "none";
    rsltInfo.style.display = "block";
    boxRslt.style.alignContent = "center";
}

boxRslt.ondblclick = function () {
    defInfo.style.display = "block";
    rsltInfo.style.display = "none";
}