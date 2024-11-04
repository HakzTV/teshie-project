import { useState, useEffect } from 'react';

const TextAnimation = () => {
  const phrases = [
    'find your next land',
    'find affordable and well-located land',
    'find litigation-free land at an affordable price'
  ];

  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const typingSpeed = 100; // Speed in milliseconds
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Typing effect
    const typingInterval = setInterval(() => {
      // Check if we have not finished the current phrase
      if (charIndex < phrases[currentPhrase].length) {
        setDisplayedText((prev) => prev + phrases[currentPhrase][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        // Move to the next phrase after a delay
        clearInterval(typingInterval);
        setTimeout(() => {
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
          setDisplayedText(''); // Clear the displayed text for the new phrase
          setCharIndex(0); // Reset character index for the next phrase
        }, 2000); // Delay before starting the next phrase
      }
    }, typingSpeed);

    // Cursor blinking effect
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500); // Cursor blinks every 500ms

    // Clean up intervals on unmount
    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [currentPhrase, charIndex]);

  return (
    <span className="text-animation">
      A better way to {displayedText}
      {showCursor && <span className="cursor"></span>} {/* Cursor element */}
    </span>
  );
};

export default TextAnimation;
