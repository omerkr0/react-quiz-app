import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen font-semibold">
      <h1 className="text-2xl sm:text-4xl mb-5">Quiz&apos;e Hoşgeldiniz!</h1>
      <Link
        to="/quiz"
        className="text-sm sm:text-lg bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-xl"
      >
        Quiz&apos;i Başlat
      </Link>
    </div>
  );
}

export default Home;
