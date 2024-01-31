import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <h1 className="my-4 text-xl">Welcome to Quiz</h1>
      <Link to="/quiz">
        <button className="text-xl bg-blue-400 hover:bg-blue-500 py-2 px-4 rounded-md" type="button">Start Quiz</button>
      </Link>
    </div>
  );
}

export default Home;
