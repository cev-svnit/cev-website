"use client";

import React, { useState, useEffect } from "react";
import styles from './Flipcard.module.css';

interface ScrollButtonProps {
  targetSectionId: string;
  buttonLabel: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ targetSectionId, buttonLabel }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    const sectionElement = document.getElementById(targetSectionId);
    if (sectionElement) {
      const sectionTop = sectionElement.getBoundingClientRect().top + window.scrollY;
      const sectionBottom = sectionTop + sectionElement.offsetHeight;
      if (window.scrollY > sectionTop && window.scrollY < sectionBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  const scrollToSection = () => {
    const sectionElement = document.getElementById(targetSectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToSection}
          className={styles.scrollButton}
          aria-label={`Scroll to ${buttonLabel}`}
        >
          <span>{buttonLabel}</span>
          <svg
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 12h14M12 5l7 7-7 7"
            ></path>
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollButton;