import { useState, useEffect } from "react";

const TopBar = () => {
  const [timeLeft, setTimeLeft] = useState(14 * 60); // 14 minutos em segundos

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-red-600 text-white text-center py-3 px-4 animate-pulse">
      <p className="text-sm md:text-base font-bold">
        🔥 OFERTA EXCLUSIVA — 70% DE DESCONTO POR TEMPO LIMITADO{" "}
        <span className="bg-white text-red-600 px-2 py-1 rounded ml-2 font-mono">
          {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
        </span>
      </p>
    </div>
  );
};

export default TopBar;
