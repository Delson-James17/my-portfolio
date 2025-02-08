import { useState, useEffect } from "react";
import  '../css/TypingText.css'
export default function TypingText() {
  const texts = [
    "Hi My Name is Delson James M. Tubiera Welcome to my Website",
   `I’m a young professional with 2 years of experience in Information Technology involving 
Software Engineering.`,
    `Have background in web development and have in-dept 
exposureto ASP.NET Framework, ASP.NET Core, SQL Server ,WordPress, Shopify 
and design / architectural patterns. `
  ];

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100; 
  const deleteSpeed = 50; 
  const delay = 1500; 

  useEffect(() => {
    const handleTyping = () => {
      if (!isDeleting && charIndex < texts[index].length) {
        setCurrentText((prev) => prev + texts[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === texts[index].length) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const typingInterval = setTimeout(handleTyping, isDeleting ? deleteSpeed : typingSpeed);

    return () => clearTimeout(typingInterval);
  }, [charIndex, isDeleting, index]);

  return (
    <p className="typer wow animate__animated animate__fadeInLeft">
      {currentText}
      <span className="cursor">|</span>
    </p>
  );
}
