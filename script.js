const buttonClick = document.getElementById("btnGenerate");
const max = 36, min = 1, arraysLength = 5;
const defInfo = document.getElementById("def")
const rsltInfo = document.getElementById("result");
const boxRslt = document.querySelector(".box-result");
const bigBoxGenNumb = document.querySelector(".box-numbers");
const genNumbersBox = document.querySelectorAll(".box-numbers>div");

function generateNumbers() {
    let newNum;
    let numbers = new Array(arraysLength);
    for (let i = 0; i < numbers.length;) {
        newNum = Math.floor(Math.random() * (max - min + 1) + min);
        if (!numbers.includes(newNum)) {
            numbers[i++] = newNum
        }
    }
    return numbers;
}

function sortGenNumsAsc(genNums) {
    return genNums.sort((a, b) => b - a);
}

function calcAvrg(genNums) {
    let sum = 0;
    for (const number of genNums) {
        sum += number;
    }
    return (sum / genNums.length).toFixed(2);
}

function calcMinNumber(genNums) {
    return genNums[genNums.length - 1];
}

function calcMaxNumber(genNums) {
    return genNums[0];
}

function statistics(minNumber, maxNumber, avg, even, odd) {
    const info = {
        "Min value": minNumber,
        "Max value": maxNumber,
        "Average": avg,
        "Number of even": even,
        "Number of odd": odd,
        toString: function () {
            return JSON.stringify(info);
        }
    };

    //-------№1------
    rsltInfo.innerHTML =
        `<p>Min value: ${minNumber}</p>
<p>Max value: ${maxNumber}</p>
<p>Average : ${avg}</p>
<p>Number of even: ${even}</p>
<p>Number of odd: ${odd}</p>`;

//--------№2--------
//     let htmlText = '<table>';
//     for (const [key, value] of Object.entries(info)) {
//         if (key !== 'toString')
//             htmlText += `<tr><td>${key}:</td><td>${value}</td></tr>`;
//     }
//     htmlText += '</table>';
//     rsltInfo.innerHTML = htmlText;
}


function inGenBox(genNums) {
    for (let i = 0; i < genNums.length; i++)
        genNumbersBox[i].textContent = genNums[i];
}

function calcEvenOdd(genNums, flag) {//true=even, false=odd
    let countEven = 0;
    let countOdd = 0;
    genNums.forEach(genNum => {
        if (genNum % 2 === 0) countEven++;
        else countOdd++;
    })
    if (flag === true)
        return countEven;
    else return countOdd;
}

buttonClick.onclick = function () {
    let genNums;
    genNums = generateNumbers();
    genNums = sortGenNumsAsc(genNums);
    statistics(calcMinNumber(genNums), calcMaxNumber(genNums), calcAvrg(genNums), calcEvenOdd(genNums, true), calcEvenOdd(genNums, false));
    bigBoxGenNumb.classList.remove("d-none");
    inGenBox(genNums);
    defInfo.style.display = "none";
    rsltInfo.style.display = "block";
    boxRslt.style.alignContent = "center";
}

boxRslt.ondblclick = function () {
    bigBoxGenNumb.classList.add("d-none");
    defInfo.style.display = "block";
    rsltInfo.style.display = "none";
}