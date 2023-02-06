import { useState } from "react"
import './pages/mainstyle.css'


function App () {

	const questions =[
    
	{
	questionText: 'Who is the National Hero of the Philippines?',
	answerOptions: [
	{answerText: 'Apolinario Mabini', isCorrect: false},
    {answerText: 'Macario Sakay', isCorrect: false},
    {answerText: 'Jose Rizal', isCorrect: true},
    {answerText: 'Andres Bonifacio', isCorrect: false},
	],
	},
	{
	questionText: 'What is the official news paper of the Katipunan?',
	answerOptions: [
	{answerText: 'Kalayaan', isCorrect: true},
    {answerText: 'Kartilya ng Katipunan', isCorrect: false},
    {answerText: 'Noli me Tangera', isCorrect: false},
    {answerText: 'La solidaridad', isCorrect: false},
  ],
	},
	{
	questionText: 'What is the first novel of Dr. Jose Rizal?',
	answerOptions: [
	{answerText: 'El Filebusterismo', isCorrect: false},
    {answerText: 'Kartilya ng Katipunan', isCorrect: false},
    {answerText: 'Noli me Tangera',isCorrect: true },
    {answerText: 'La solidaridad', isCorrect: false},
	],
	},
	{
	questionText: 'What is the second novel of Dr. Jose Rizal?',
	answerOptions: [
	{answerText: 'El Filebusterismo', isCorrect: true},
    {answerText: 'Kartilya ng Katipunan', isCorrect: false},
    {answerText: 'Noli me Tangera',isCorrect: false },
    {answerText: 'La solidaridad', isCorrect: false},
	],
	},
 
	]
  
	
	const [currentQuestion, setCurrentQuestion] = useState(0)
	const [showScore, setShowScore] = useState(false)
	const [score, setScore] = useState(0)
	
	function handleAnswerClick(isCorrect) {
		if(isCorrect === true) {	
      setScore(score + 1)
    }
	
		

		
		const nextQuestion = currentQuestion + 1
		if(nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
			
			}else{
				setShowScore(true)
			}
		}
	
	
	
    return (

      
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length} questions.
          </div>
        ) : (
          <>
          
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}/{questions.length}</span>
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map(answerOptions => (
                <button
                  className="btn btn-primary"
                  onClick={() => handleAnswerClick(answerOptions.isCorrect)}
                >
                  {answerOptions.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    );
    
}
export default App;