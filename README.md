# repositorio-ip
repositório de Introdução a programação
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jogo de Matemática</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      text-align: center;
      padding: 20px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      margin: 10px;
    }
    .feedback {
      font-size: 20px;
      margin-top: 20px;
    }
    .correct {
      color: green;
    }
    .wrong {
      color: red;
    }
    .timer {
      font-size: 24px;
      font-weight: bold;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>Jogo de Matemática</h1>
  <p>Resolva o problema abaixo para ganhar pontos:</p>
  <div id="question" style="font-size: 24px; margin: 20px;"></div>
  <input id="answer" type="number" placeholder="Sua resposta" style="font-size: 16px; padding: 5px;">
  <button onclick="checkAnswer()">Enviar Resposta</button>
  <div id="feedback" class="feedback"></div>
  <div class="timer">Tempo restante: <span id="timer">10</span> segundos</div>
  <div style="font-size: 20px; margin-top: 20px;">Pontuação: <span id="score">0</span></div>
  <script>
    let num1, num2, operator, correctAnswer, timerInterval;
    let score = 0;
    let timeLeft = 10;

    function generateQuestion() {
      const operators = ['+', '-', '*'];
      const maxNumber = 10 + score * 2; // Aumenta a dificuldade
      num1 = Math.floor(Math.random() * maxNumber) + 1;
      num2 = Math.floor(Math.random() * maxNumber) + 1;
      operator = operators[Math.floor(Math.random() * operators.length)];

      if (operator === '-' && num1 < num2) {
        [num1, num2] = [num2, num1]; // Evitar números negativos
      }

      correctAnswer = eval(num1 + operator + num2);
      document.getElementById('question').innerText = `${num1} ${operator} ${num2}`;
      document.getElementById('feedback').innerText = '';
      document.getElementById('answer').value = '';

      timeLeft = 10;
      document.getElementById('timer').innerText = timeLeft;
      startTimer();
    }

    function startTimer() {
      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
        timeLeft -= 1;
        document.getElementById('timer').innerText = timeLeft;

        if (timeLeft <= 0) {
          clearInterval(timerInterval);
          document.getElementById('feedback').innerText = 'Tempo esgotado! Tente novamente!';
          document.getElementById('feedback').className = 'feedback wrong';
          setTimeout(generateQuestion, 2000);
        }
      }, 1000);
    }

    function checkAnswer() {
      clearInterval(timerInterval);
      const userAnswer = parseInt(document.getElementById('answer').value, 10);
      if (userAnswer === correctAnswer) {
        document.getElementById('feedback').innerText = 'Parabéns! Você acertou!';
        document.getElementById('feedback').className = 'feedback correct';
        score += 1;
        document.getElementById('score').innerText = score;
      } else {
        document.getElementById('feedback').innerText = 'Ops, resposta errada!';
        document.getElementById('feedback').className = 'feedback wrong';
      }
      setTimeout(generateQuestion, 2000); // Gerar nova pergunta após 2 segundos
    }

    generateQuestion();
  </script>
</body>
</html>
const correctSound = new Audio('acerto.mp3');
const wrongSound = new Audio('erro.mp3');

if (userAnswer === correctAnswer) {
  correctSound.play();
} else {
  wrongSound.play();
}
