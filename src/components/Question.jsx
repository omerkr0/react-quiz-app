/* eslint-disable react/prop-types */
function Question({ question, onOptionSelect, selectedOption }) {
  return (
    <div className="text-center">
      <h2 className="sm:text-2xl text-lg font-normal mb-4">{question.text}</h2>
      <ul className="list-none">
        {question.options.map((option) => (
          <li key={option.id} className="mb-4">
            <button
              onClick={() => onOptionSelect(option)}
              className={`w-2/4 py-2 px-4 rounded-xl focus:outline-none sm:text-base text-sm font-medium ${
                selectedOption && selectedOption.id === option.id
                  ? option.isCorrect
                    ? "border-2 border-green-500 bg-green-500 text-white"
                    : "border-2 border-red-500 bg-red-500 text-white"
                  : "border-2 border-blue-500 hover:bg-blue-500 hover:text-white"
              }`}
              disabled={selectedOption}
            >
              {option.text}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
