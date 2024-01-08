import React, { useState, useEffect } from "react";
import { StyledLoader} from "./loader-styled-component";
import anime from "animejs/lib/anime.es.js";
import { FaSpinner } from "react-icons/fa";

interface Props {
  onFinish: () => void;
}

export const Loader: React.FC<Props> = ({ onFinish }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isMounted) {
      animateLogo();
    }
  }, [isMounted]);

  const animateLogo = () => {
    anime({
      opacity: [0, 1],
      duration: 1300,
      easing: "linear",
      complete: () => {
        anime({
          opacity: [1, 0],
          duration: 1100,
          easing: "linear",
          complete: () => {
            setTimeout(() => {
              onFinish();
            }, 170);
          },
        });
      },
    });
  };

  return (
    <>
      <StyledLoader data-testid="loader">
        <FaSpinner size={40} color="#fff" data-testid="fa-spinner"/>
      </StyledLoader>
    </>
  );
};
