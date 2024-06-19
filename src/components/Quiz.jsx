import { useEffect, useState } from "react";
import useSound from "use-sound";
// import play from "../sounds/play.mp3";
import correct from "../sounds/correct.mp3";
import wrong from "../sounds/wrong.mp3";

const Quiz = ({ data, questionNumber, setQuestionNumber, setStop }) => {
  const [question, setQuestion] = useState(null);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [style, setStyle] = useState("bg-blue-600");

  //   utilisation du son
  //   const [letsPlay] = useSound(play);
  const [correctAnswer] = useSound(correct);
  const [wrongAnswer] = useSound(wrong);

  useEffect(() => {
    questionNumber - 1 === data.length && setStop(true);
    setQuestion(data[questionNumber - 1]);
  }, [data, questionNumber, setStop]);

  //   useEffect(() => {
  //     letsPlay();
  //   }, [letsPlay]);

  const delay = (duration, callback) => {
    setTimeout(() => {
      callback();
    }, duration);
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    setStyle("bg-blue-800");
    delay(3000, () => {
      if (answer.correct) {
        setStyle("bg-green-800 animate-flash");
      } else {
        setStyle("bg-red-600 animate-flash");
      }
    });
    delay(4000, () => {
      if (answer.correct) {
        correctAnswer();
        setTimeout(() => {
          setQuestionNumber((previous) => previous + 1);
          setSelectedAnswer(null);
        }, 2000);
      } else {
        wrongAnswer();
        setTimeout(() => {
          setStop(true);
        }, 2000);
      }
    });
  };

  return (
    <section>
      <div className="flex flex-col px-2 md:px-20 md:items-center">
        {/* question */}
        <div className="w-full py-5 text-sm font-bold text-center border-4 border-yellow-600 rounded-full md:text-xl bg-bleu">
          {question?.question}
        </div>

        {/* reponses */}
        <div className="grid grid-cols-2 mt-10 gap-x-10 gap-y-5">
          {question?.answers.map((answer, index) => (
            <div
              key={index}
              className={`px-2 py-1 text-center border-4 border-yellow-600 rounded-full cursor-pointer text-[9px] md:text-base  hover:bg-blue-600 ${
                selectedAnswer === answer ? style : "bg-bleu"
              }`}
              onClick={() => handleAnswer(answer)}
            >
              <span className="text-yellow-600">&#x2756;</span>{" "}
              <span className="text-yellow-600">{answer.option} : </span>{" "}
              <span>{answer.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Quiz;
