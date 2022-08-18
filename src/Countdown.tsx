import { Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";

const calcTimeLeft = (): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} => {
  let year = new Date().getFullYear();
  let difference = +new Date(year, 7, 29, 16, 30) - +new Date();

  let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Heading size="3xl">
      {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes{" "}
      {timeLeft.seconds} seconds
    </Heading>
  );
}

export default Countdown;
