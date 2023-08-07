import { Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { chakra } from "@chakra-ui/react";
import "@fontsource/jetbrains-mono";

const leftpad = (num: number, size: number) => {
  let s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
};

const calcTimeLeft = (): {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
} => {
  let year = new Date().getFullYear();
  let difference = +new Date(year, 7, 28, 17, 30) - +new Date();

  let timeLeft = { days: "0", hours: "00", minutes: "00", seconds: "00" };

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)) + "",
      hours: leftpad(Math.floor((difference / (1000 * 60 * 60)) % 24), 2),
      minutes: leftpad(Math.floor((difference / 1000 / 60) % 60), 2),
      seconds: leftpad(Math.floor((difference / 1000) % 60), 2),
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
      fontFamily={digital ? "JetBrains Mono, sans-serif" : "heading"}
    >
      {timeLeft.days} <chakra.span fontFamily={"heading"}>days</chakra.span>{" "}
      {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
    </Heading>
  );
}

export default Countdown;
