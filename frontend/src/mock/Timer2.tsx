import React, { useEffect, useRef, useState } from "react";
import Tick from "@pqina/flip";
import "@pqina/flip/dist/flip.min.css";

interface TickInstance {
  value: string;
  destroy?: () => void;
}

interface TickDOM {
  create: (element: HTMLElement, options: { value: string }) => TickInstance;
  destroy: (element: HTMLElement) => void;
}

const TickDOM = Tick.DOM as TickDOM;

const Timer2 = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);
  const minutesRef = useRef<HTMLDivElement>(null);
  const secondsRef = useRef<HTMLDivElement>(null);
  const minutesInstance = useRef<TickInstance | null>(null);
  const secondsInstance = useRef<TickInstance | null>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const getMinutes = (seconds: number): string => {
    return Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
  };

  const getSeconds = (seconds: number): string => {
    return (seconds % 60).toString().padStart(2, "0");
  };

  useEffect(() => {
    if (minutesRef.current && secondsRef.current) {
      minutesInstance.current = TickDOM.create(minutesRef.current, {
        value: getMinutes(timeLeft),
      });
      secondsInstance.current = TickDOM.create(secondsRef.current, {
        value: getSeconds(timeLeft),
      });
    }

    return () => {
      if (minutesRef.current) TickDOM.destroy(minutesRef.current);
      if (secondsRef.current) TickDOM.destroy(secondsRef.current);
    };
  }, []);

  useEffect(() => {
    if (minutesInstance.current) {
      minutesInstance.current.value = getMinutes(timeLeft);
    }
    if (secondsInstance.current) {
      secondsInstance.current.value = getSeconds(timeLeft);
    }

    if (timeLeft === 0) {
      setIsActive(false);
      if (isBreak) {
        setTimeLeft(25 * 60);
        setIsBreak(false);
      } else {
        setTimeLeft(5 * 60);
        setIsBreak(true);
      }
    }
  }, [timeLeft, isBreak]);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft]);

  const handleStart = () => setIsActive(true);
  const handlePause = () => setIsActive(false);
  const handleReset = () => {
    setIsActive(false);
    setIsBreak(false);
    setTimeLeft(25 * 60);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-8">
      <div className="text-2xl">Dynamic Title</div>
      <div className="flex items-center">
        <div ref={minutesRef} className="tick">
          <div data-repeat="true" aria-hidden="true">
            <span data-view="flip"></span>
          </div>
        </div>
        <div className="text-[15vw] mx-4 text-gray-800">:</div>
        <div ref={secondsRef} className="tick">
          <div data-repeat="true" aria-hidden="true">
            <span data-view="flip"></span>
          </div>
        </div>
      </div>
      <div className="flex gap-4">
        {!isActive ? (
          <button
            onClick={handleStart}
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Start
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
          >
            Pause
          </button>
        )}
        <button
          onClick={handleReset}
          className="px-6 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer2;
