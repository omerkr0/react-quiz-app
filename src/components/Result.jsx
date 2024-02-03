/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import quizData from "../data/QuizData";

function Result({ score }) {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen font-semibold">
      <h2 className="text-2xl sm:text-4xl mb-5">Quiz bitti!</h2>
      <p className="font-semibold text-md sm:text-lg mb-5">
        Toplam {quizData.length} sorudan {score} doğru cevap verdiniz.
      </p>
      <Link
        to="/"
        className="text-sm sm:text-lg bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
      >
        Ana Sayfa
      </Link>
    </div>
  );
}

export default Result;
