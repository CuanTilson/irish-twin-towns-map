import { useState, useEffect } from "react";
import ennistymon from "../assets/ennistymon.jpg";
import pozzoleone from "../assets/pozzoleone.jpg";
import schimatari from "../assets/schimatari.jpg";

type Option = {
  text: string;
  correct: boolean;
};

const answerOptions: Option[] = [
  { text: "They are all in Ireland", correct: false },
  { text: "They are all coastal towns", correct: false },
  { text: "They are all twinned towns", correct: true },
  { text: "They all speak Irish", correct: false },
];

export default function Intro({
  onFinish,
  isFadingOut,
}: {
  onFinish: () => void;
  isFadingOut: boolean;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const [answeredCorrectly, setAnsweredCorrectly] = useState(false);

  useEffect(() => {
    if (answeredCorrectly) {
      const timeout = setTimeout(() => onFinish(), 1500);
      return () => clearTimeout(timeout);
    }
  }, [answeredCorrectly, onFinish]);

  const handleAnswer = (i: number) => {
    if (answeredCorrectly) return;

    setSelected(i);
    if (answerOptions[i].correct) {
      setAnsweredCorrectly(true);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-1000 ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      } bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white`}
    >
      <div className="flex flex-col justify-center items-center h-full px-4 py-8 md:py-16 space-y-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center drop-shadow-md">
          What do these towns all have in common?
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full px-4">
          {[ennistymon, pozzoleone, schimatari].map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-2xl shadow-lg border border-gray-700 hover:scale-105 transition-transform"
            >
              <img
                src={img}
                alt={`Town ${i}`}
                className="w-full h-48 md:h-56 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full px-4">
          {answerOptions.map((opt, i) => {
            const isSelected = selected === i;
            const correct = opt.correct;

            let buttonClasses =
              "py-4 px-6 rounded-xl text-lg font-semibold border-2 transition-colors duration-300 w-full";

            if (isSelected) {
              buttonClasses += correct
                ? " bg-green-600 border-green-700 text-white"
                : " bg-red-600 border-red-700 text-white";
            } else {
              buttonClasses +=
                " bg-gray-800 hover:bg-gray-700 border-gray-600 text-white";
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(i)}
                className={buttonClasses}
              >
                {opt.text}
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className="mt-6 text-center">
            {answerOptions[selected].correct ? (
              <p className="text-green-400 text-xl font-semibold">
                🎉 Correct! Great job.
              </p>
            ) : (
              <p className="text-red-400 text-lg font-medium">
                ❌ Not quite — try another!
              </p>
            )}
          </div>
        )}
        <p className="text-sm text-gray-400 pt-4">
          Select the correct answer to continue
        </p>
      </div>
    </div>
  );
}
