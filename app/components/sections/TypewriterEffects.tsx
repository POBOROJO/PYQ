import { useState, useEffect } from "react";

interface Word {
  text: string;
}

export default function TypewriterEffect({ words }: { words: Word[] }) {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex].text;

      if (!isDeleting && displayText.length < currentWord.length) {
        setDisplayText(currentWord.substring(0, displayText.length + 1));
      } else if (isDeleting && displayText.length > 0) {
        setDisplayText(currentWord.substring(0, displayText.length - 1));
      } else if (!isDeleting && displayText.length === currentWord.length) {
        const timeout = setTimeout(() => setIsDeleting(true), 1000);
        return () => clearTimeout(timeout);
      } else if (isDeleting && displayText.length === 0) {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const typingSpeed = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, currentWordIndex, isDeleting, words]);

  return (
    <div className="text-3xl font-bold text-white">
      {displayText}
      <span className="animate-blink">|</span>
    </div>
  );
}