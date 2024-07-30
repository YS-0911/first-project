//랜덤숫자 생성
//번호입력후 go버튼 누름
//번호 맞출때
//번호 업, 다운일때
//리셋버튼 누를때
//5번의 기회
//1~100까지 숫자 범위 알려줌
//같은 번호 입력 알려줌

let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chance = 5;
let chanceArea = document.getElementById("chance-area");
let gameOver = false;
let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function pickRandomNum(){
    computerNum = Math.floor(Math.random()*100)+1;
    console.log("정답 :", computerNum);
}

function play(){
    let userValue = userInput.value;
    // console.log(userValue);

    if(userValue < 1 || userValue > 100){
        resultArea.innerHTML = `범위는 1~100 입니다.<br>다시 입력해주세요.`;
        return;
    }

    if(history.includes(userValue)){
        resultArea.innerHTML = `이미 입력한 숫자입니다.<br>다시 입력해주세요.`;
        return;
    }

    chance -- ;
    chanceArea.textContent = `남은 기회 : ${chance}번`;
    // console.log("남은기회 :", chance);

    if(computerNum == userValue){
        resultArea.textContent = "정답";
        gameOver = true;
        // console.log("정답");
    }else if(computerNum > userValue){
        resultArea.textContent = "Up";
        // console.log("Up");
    }else if(computerNum < userValue){
        resultArea.textContent = "Down";
        // console.log("Down");
    }

    history.push(userValue);
    console.log(history);

    if(chance < 1){
        gameOver = true;
    }

    if(gameOver == true){
        playButton.disabled = true;
    }
}

function reset(){
    pickRandomNum();
    chance = 5;
    chanceArea.textContent = "남은 기회 : 5번"; 
    userInput.value = "";
    gameOver = false;
    playButton.disabled = false;
    resultArea.textContent = "숫자를 입력하세요";
}

pickRandomNum();