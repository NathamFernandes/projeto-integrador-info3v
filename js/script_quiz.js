var myQuestions = [
	{
		question: "As Revoltas Coloniais ocorreram distribuídas em um período de APROXIMADAMENTE:",
		answers: {
			a: '10 anos',
			b: '100 anos',
			c: '160 anos',
			d: '170 anos'
		},
		correctAnswer: 'b'
	},
	{
		question: "Qual foi a última província do Império do Brasil que aderiu a independência?",
		answers: {
			a: 'Província de Cisplatina',
			b: 'Província de Minas Gerais',
			c: 'Província de Pará',
			d: 'Província de Maranhão'
		},
		correctAnswer: 'a'
	},
	{
		question: "Sobre a Província da Cisplatina e a eventual Guerra da Cisplatina, escolha a alternativa verdadeira:",
		answers: {
			a: 'Os portugueses e espanhóis nunca tentaram disputar o território da Cisplatina.<br>',
			b: 'Os portugueses idealizaram a formação da República Oriental do Uruguai.<br>',
			c: 'Por ter um exército muito grande, o Império Brasileiro decidiu não contratar mercenários para a guerra.<br>',
			d: 'Na Guerra da Cisplatina, o Brasil foi derrotado na disputa militar.'
		},
		correctAnswer: 'd'
	},
	{
		question: "Quais países formavam a tríplice aliança, na Guerra do Paraguai?",
		answers: {
			a: 'Brasil, Argentina e Bolívia',
			b: 'Argentina, Uruguai e Chile',
			c: 'Brasil, Argentina e Uruguai',
			d: 'Brasil, Uruguai e Venezuela'
		},
		correctAnswer: 'c'
	},
	{
		question: "Quantas expedições do exército foram precisas para que Canudos fosse capturada?",
		answers: {
			a: '2 expedições.',
			b: '3 expedições.',
			c: '5 expedições.',
			d: '4 expedições.'
		},
		correctAnswer: 'd'
	},
	{
		question: "Qual período da Segunda Guerra Mundial houve participação direta da FEB (Força Expedicionária Brasileria)?",
		answers: {
			a: '(1942-1945)',
			b: '(1940-1944)',
			c: '(1944-1945)',
			d: '(1939-1945)'
		},
		correctAnswer: 'c'
	},
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

	function showQuestions(questions, quizContainer) {
		// precisaremos de um lugar para armazenar a saída e as opções de resposta
		var output = [];
		var answers; // poderia ter dado outro nome, alem do mais, eu mesmo me confundi :/

		// para cada questão
		for (var i = 0; i < questions.length; i++) {

			// mas, primeiro resetamos a lista de questões
			answers = [];

			// e aqui faremos para cada resposta na questão.
			for (letter in questions[i].answers) {

				// Aqui será escrito para html para usar o Radio.
				answers.push(
					'<label>'
					+ '<input type="radio" name="question' + i + '" value="' + letter + '">'
					//	+ letter + ') ' vou deixar a letra comentada, porque achei melhor assim
					+ questions[i].answers[letter]
					+ '</label>'
				);
			}

			// add this question and its answers to the output
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}

		// finally combine our output list into one string of html and put it on the page
		quizContainer.innerHTML = output.join('');
	}


	function showResults(questions, quizContainer, resultsContainer) {


		var answerContainers = quizContainer.querySelectorAll('.answers');


		var userAnswer = '';
		var numCorrect = 0;


		for (var i = 0; i < questions.length; i++) {

			// agora ele vai virar a letra que esta marcada.
			userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;



			if (userAnswer === questions[i].correctAnswer) {

				numCorrect++;


				answerContainers[i].style.color = 'green';
			}

			else {

				answerContainers[i].style.color = 'red';
			}
		}


		resultsContainer.innerHTML = 'Você acertou ' + numCorrect + ' de ' + questions.length + ' questões. Parabéns!';
	}

	// show questions right away
	showQuestions(questions, quizContainer);

	// on submit, show results
	submitButton.onclick = function () {
		showResults(questions, quizContainer, resultsContainer);
	}
}
