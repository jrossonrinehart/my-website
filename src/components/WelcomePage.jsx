import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function WelcomePage() {
  // Step 2: Initialize state
  const [displayText, setDisplayText] = useState("");
  const fullText = "Welcome to My Portfolio";
  const [showCursor, setShowCursor] = useState(true)
  useEffect(() => {
  const cursorInterval = setInterval(() => {
    setShowCursor(prev => !prev);
  }, 500); // adjust the blinking rate as needed

  return () => clearInterval(cursorInterval);
}, []);
  useEffect(() => {
    // Check if the text is fully displayed
    if (displayText.length < fullText.length) {
      // Step 3: Use setTimeout to periodically update the displayed text
      const timeoutId = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 100); // adjust the delay as needed
      
      // Cleanup the timeout if the component is unmounted
      return () => clearTimeout(timeoutId);
    }
  }, [displayText]);

  return (
    <div className="bg-orange-50 min-h-screen text-black flex items-center pl-8">
      <div>
        <h1 className="text-4xl sm:text-6xl font-serif mb-4">
          {displayText}{showCursor ? '_' : ''}
        </h1>
        <p className="text-lg sm:text-2xl text-black font-serif mb-8">
          Discover my work, skills, and experience.
        </p>

        <Link
          to="/about"
          className="inline-block px-6 py-3 text-white font-semibold bg-red-600 hover:from-teal-500 hover:to-green-500"
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;

