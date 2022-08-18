import { Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { chakra } from "@chakra-ui/react";
import "@fontsource/orbitron";

const calcTimeLeft = (): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
} => {
  let year = new Date().getFullYear();
  let difference = +new Date(year, 7, 29, 17, 30) - +new Date();

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

function Countdown({ digital = false }: { digital?: boolean }) {
  const [timeLeft, setTimeLeft] = useState(calcTimeLeft);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calcTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <Heading
      size="3xl"
      fontFamily={digital ? "Orbitron, sans-serif" : "heading"}
    >
      {timeLeft.days} <chakra.span fontFamily={"heading"}>days</chakra.span>{" "}
      {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
    </Heading>
  );
}

export default Countdown;
