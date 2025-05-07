const questionsAnswers = document.querySelectorAll('.question-answer');

const titleQuestion = document.querySelectorAll('.title_question');

questionsAnswers.forEach(function (questionAnswer) {
  const button = questionAnswer.querySelector('.question_button');

  const question = questionAnswer.querySelector('.question');

  questionAnswer.addEventListener('click', function (event) {
    const target = event.target.closest('.question, .question_button');

    if (!target) return;

    questionsAnswers.forEach(function (item) {
      if (item !== questionAnswer) {
        item.classList.remove('show-answer');
      }
    });

    questionAnswer.classList.toggle('show-answer');
  });
});
