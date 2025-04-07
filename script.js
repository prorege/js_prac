// 디스플레이 영역 (숫자 표시)
const display = document.getElementById("display")

// 숫자 버튼들
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const dot = document.getElementById('dot');

// 연산 버튼들
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const multiply = document.getElementById('multiply');
const divide = document.getElementById('divide');
const mod = document.getElementById('mod');

// 기타 기능 버튼들
const equal = document.getElementById('equal');
const ac = document.getElementById('ac');
const plusminus = document.getElementById('plusminus');

function acBtn(){
    display.textContent = "";
    console.log("it clicked!")
    return;
}

function showDisplay(num){
    display.textContent = num;
    return;
}