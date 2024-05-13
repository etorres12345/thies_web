import React, { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import clsx from "clsx";

export function TextGenerateEffect({ words, className }) {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 3.5,
        delay: stagger(0.2),
      }
    );
  }, [scope.current, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className={className}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={clsx("dark:text-white text-black")}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div>
      <div>
        <div>{renderWords()}</div>
      </div>
    </div>
  );
}
