let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Нужно ввести число от ${min} до ${max}`, "red");
  } else {
    if (guess === winningNum) {
      gameOver(true, `Поздравляю! Вы угадали число ${winningNum}`);
    } else {
      guessesLeft -= 1;

      if (guessesLeft === 0) {
        gameOver(false, `Вы проиграли! Правильный ответ ${winningNum}`);
      } else {
        guessInput.style.border = "1px solid red";
        setMessage(`Неверно! У вас осталось ${guessesLeft} попыток`, "red");
      }
    }
  }
  guessInput.value = "";
});

// play again
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");

  guessInput.disabled = true;
  guessInput.style.border = `1px solid ${color}`;
  message.style.color = color;
  setMessage(msg);

  // play again
  guessBtn.textContent = "Начать заново";
  guessBtn.className += "play-again";
}

function setMessage(msg, color) {
  message.textContent = msg;
  message.style.color = color;
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
