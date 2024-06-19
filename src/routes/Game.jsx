import { useEffect, useState } from "react";
import Quiz from "../components/Quiz";
import Timer from "../components/Timer";
import { data, prices } from "../../data";

const Game = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [gain, setGain] = useState(0);

  const prix = [...prices].reverse();

  useEffect(() => {
    questionNumber > 1 &&
      setGain(prices.find((price) => price.id === questionNumber - 1).price);
  }, [questionNumber]);

  return (
    <main className="relative">
      <div className="flex flex-col justify-between text-white bg-no-repeat bg-cover md:flex-row bg-game">
        {/* partie stop */}
        {stop ? (
          questionNumber - 1 === data.length ? (
            <div className="w-full md:w-[70%] h-screen px-2 md:px-20 ">
              <p className="w-full py-5 mt-10 text-sm font-bold text-center border-4 border-yellow-600 rounded-full md:mt-40 md:text-2xl bg-bleu">
                👏👏👏Félicitations, Vous remportez la cagnotte de :{" "}
                <span className="text-yellow-600">{gain}</span>
              </p>
            </div>
          ) : (
            <div className="w-full md:w-[70%] h-screen px-2 md:px-20">
              <p className="w-full py-5 mt-10 text-sm font-bold text-center border-4 border-yellow-600 rounded-full md:text-2xl md:mt-40 bg-bleu">
                Votre gain est de :{" "}
                <span className="text-yellow-600">{gain}</span>
              </p>
            </div>
          )
        ) : (
          <div className="w-full md:w-[70%]  h-screen bg-no-repeat bg-cover bg-game py-[10%]">
            <Timer setStop={setStop} questionNumber={questionNumber} />
            <Quiz
              data={data}
              questionNumber={questionNumber}
              setQuestionNumber={setQuestionNumber}
              setStop={setStop}
              gain={gain}
            />
          </div>
        )}
        {/* espace de jeu */}

        {/* espace des prix */}
        <div className="absolute w-full py-5 bottom-0 right-0 md:right-0 md:w-[30%] md:flex justify-center items-center md:h-screen text-white bg-bleu ">
          <ul className="grid grid-cols-2 gap-5 text-sm font-semibold md:text-xl md:flex md:flex-col">
            {prix.map((price, index) => (
              <li
                key={index}
                className={`flex items-center justify-center gap-5 ${
                  questionNumber === price.id
                    ? "bg-yellow-600 px-1 md:px-3 rounded-full"
                    : ""
                }`}
              >
                <span>{price.id} </span>
                <span> {price.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};

export default Game;
