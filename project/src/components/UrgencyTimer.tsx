import React, { useState, useEffect } from 'react';

const UrgencyTimer = () => {
  const [timeLeft, setTimeLeft] = useState((6 * 3600) + (39 * 60) + 13); // 6:39:13

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 0) {
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const formatNumber = (num: number) => num.toString().padStart(2, '0');

    return `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(secs)}`;
  };

  return (
    <div className="bg-red-600 rounded-lg p-4 text-center max-w-lg mx-auto my-5 font-sans shadow-lg">
      <span className="text-white font-bold text-lg">
        🚨 ESSA OFERTA EXPIRA EM:{' '}
        <span className="text-yellow-400 text-xl font-bold">
          {timeLeft > 0 ? formatTime(timeLeft) : '00:00:00'}
        </span>
      </span>
    </div>
  );
};

export default UrgencyTimer;