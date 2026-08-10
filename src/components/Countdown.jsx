import { useEffect, useState } from "react";

function calculateTimeRemaining(targetDate) {
  const difference = new Date(targetDate).getTime() - Date.now();

  if (difference <= 0) {
    return null;
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

function Countdown({ targetDate }) {
  const [timeRemaining, setTimeRemaining] = useState(() =>
    calculateTimeRemaining(targetDate)
  );

  useEffect(() => {
    setTimeRemaining(calculateTimeRemaining(targetDate));

    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!timeRemaining) {
    return <p>This deadline or event has arrived!</p>;
  }

  const timeUnits = [
    { label: "Days", value: timeRemaining.days },
    { label: "Hours", value: timeRemaining.hours },
    { label: "Minutes", value: timeRemaining.minutes },
    { label: "Seconds", value: timeRemaining.seconds },
  ];

  return (
    <div className="countdown">
      {timeUnits.map((unit) => (
        <div className="countdown__unit" key={unit.label}>
          <span className="countdown__number">
            {unit.value}
          </span>

          <span className="countdown__label">
            {unit.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export default Countdown;