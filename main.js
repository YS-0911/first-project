let computerNum = 0;
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chance = 5;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];

playButton.addEventListener("click", play);
//play라는 함수도 변수처럼 매개변수 사용가능,, 그래서 play()라고 쓰지 않음
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function(){userInput.value = ""})

function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1;
    //math.random()은 0~1까지 랜덤숫자 지정(소수점 포함)
    //100을 곱해서 정수부분 만들기
    //math.floor은 소수점 자리 날려줌
    //0~99까지 랜덤이라서 마지막에 1을 더해서 1~100까지 범위 수정
    console.log("정답", computerNum);
}

function play() {
    let userValue = userInput.value;
    console.log("입력", userValue);

    if (userValue < 1 || userValue > 100){
        resultArea.textContent = "1과 100사이 숫자를 입력해 주세요";
        return;
        // return으로 종료
    }
    
    if (history.includes(userValue)){
        resultArea.textContent = "이미 입력한 숫자입니다.";
        return;
    }

    chance -- ;
    chanceArea.textContent = `남은 기회 : ${chance}번`;
    console.log("chance", chance)

    if(userValue < computerNum){
        resultArea.textContent = "UP";
    }else if(userValue > computerNum){
        resultArea.textContent = "DOWN";
    }else {
        resultArea.textContent = "정답";
        gameOver = true;
    }

    history.push(userValue);
    console.log(history);

    if(chance < 1){
        gameOver = true;
        console.log("여기")
    }

    if (gameOver == true){
        playButton.disabled = true;
    }
}

function reset() {
    //인풋창 정리
    userInput.value = ""
    //새로운 번호 생성
    pickRandomNum();
    resultArea.textContent = "숫자를 입력하세요.";
    gameOver = false;
    playButton.disabled = false;
    chance = 5;
    chanceArea.textContent = "남은 기회 : 5번";
    history = [];
}

pickRandomNum();