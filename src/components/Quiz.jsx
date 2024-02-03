import { useState, useEffect, useCallback } from "react";
import quizData from "../data/QuizData";
import Question from "./Question";
import Result from "./Result";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [remainingTime, setRemainingTime] = useState(10);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = useCallback(() => {
    if (selectedOption && selectedOption.isCorrect) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setRemainingTime(10);
    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  }, [selectedOption, currentQuestion, score]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime((prevTime) => prevTime - 1);
      } else {
        handleNextQuestion();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime, handleNextQuestion]);

  if (showResult) {
    return <Result score={score} />;
  }

  const currentQues = quizData[currentQuestion];

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="max-w-lg px-4 py-2 mx-3 bg-gray-200 rounded-xl shadow-lg">
        <div className="flex justify-between items-center mb-4 text-base sm:text-lg font-semibold ">
          <p>Quiz App</p>
          <p>
            Süre: {remainingTime == 0 ? "Bitti" : `${remainingTime} saniye`}
          </p>
        </div>
        <Question
          question={currentQues}
          onOptionSelect={handleOptionSelect}
          selectedOption={selectedOption}
        />
        <div className="flex justify-between font-semibold">
          <span className="flex items-end text-center ">
            {currentQuestion + 1}/{quizData.length}
          </span>
          <button
            onClick={handleNextQuestion}
            className={`sm:text-base text-sm font-medium bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-xl mt-5 focus:outline-none ${
              !selectedOption ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={!selectedOption}
          >
            {currentQuestion === quizData.length - 1
              ? "Quiz'i Bitir"
              : "Sonraki Soru"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
