import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [userLevel, setUserLevel] = useState("");

  const questions = [
    {
      text: "What is C++ primarily known as?",
      options: [
        { id: 0, text: "A web development language", isCorrect: false },
        { id: 1, text: "A scripting language", isCorrect: true },
        { id: 2, text: "An object-oriented programming language", isCorrect: false },
        { id: 3, text: "A markup language", isCorrect: false },
      ],
    },
    {
      text: "What is the primary feature of C++ that distinguishes it from C?",
      options: [
        { id: 0, text: " Object-oriented programming", isCorrect: true },
        { id: 1, text: "Case sensitivity", isCorrect: false },
        { id: 2, text: "Preprocessor directives", isCorrect: false },
        { id: 3, text: "Loops", isCorrect: false },
      ],
    },
    {
      text: "In C++, what is the result of the expression `sizeof(int)`?",
      options: [
        { id: 0, text: "The value of an integer variable", isCorrect: false },
        { id: 1, text: "The number of bytes used to store an integer", isCorrect: true },
        { id: 2, text: "The square of an integer", isCorrect: false },
        { id: 3, text: "The size of the main memory", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of a constructor in a C++ class?",
      options: [
        { id: 0, text: "To create an object of the class", isCorrect: false },
        { id: 1, text: "To destroy an object of the class", isCorrect: true },
        { id: 2, text: "To perform memory management", isCorrect: false },
        { id: 3, text: "To define member functions", isCorrect: false },
      ],
    },
    {
      text: "What is RAII (Resource Acquisition Is Initialization) in C++?",
      options: [
        { id: 0, text: "A type of C++ data structure", isCorrect: false },
        { id: 1, text: "A design pattern for managing resources using objects' lifetimes", isCorrect: false },
        { id: 2, text: "A C++ standard library function", isCorrect: false },
        { id: 3, text: "A way to declare global variables", isCorrect: true },
      ],
    },
    {
      text: "Which C++ feature allows you to define a class that is based on an existing class, inheriting its members and behaviors?",
      options: [
        { id: 0, text: "Inheritance", isCorrect: false },
        { id: 1, text: "Encapsulation", isCorrect: false },
        { id: 2, text: "Polymorphism", isCorrect: true },
        { id: 3, text: "Abstraction", isCorrect: false },
      ],
    },
    {
      text: "What is the standard way to create and manage multithreading in C++?",
      options: [
        { id: 0, text: "Using the <thread> library", isCorrect: true }, 
        { id: 1, text: "Using the multithread keyword", isCorrect: false },
        { id: 2, text: "Using the sync keyword", isCorrect: false },
        { id: 3, text: " Using the mutex keyword", isCorrect: false },
      ],
    },
    {
      text: "What is the purpose of the const qualifier when used in C++ member functions?",
      options: [
        { id: 0, text: "It indicates that the function is a constructor.", isCorrect: false },
        { id: 1, text: " It specifies that the function is a destructor.", isCorrect: false },
        { id: 2, text: "It indicates that the function does not modify the object's state.", isCorrect: true },
        { id: 3, text: " It makes the function accessible from any part of the program.", isCorrect: false },
      ],
    },
    {
      text: " What does the try, catch, and throw constructs do in C++?",
      options: [
        { id: 0, text: "To create exceptions", isCorrect: false },
        { id: 1, text: "To handle exceptions", isCorrect: true },
        { id: 2, text: "To define variables", isCorrect: false },
        { id: 3, text: "To terminate the program", isCorrect: false },
      ],
    },
    {
      text: "What is the result of `5 == 5` in C++?",
      options: [
        { id: 0, text: " 5", isCorrect: false },
        { id: 1, text: "True ", isCorrect: false },
        { id: 2, text: "0", isCorrect: true },
        { id: 3, text: "False", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
      determineUserLevel(score);
    }
  };

  const determineUserLevel = (userScore) => {
    if (userScore <= 3) {
      setUserLevel("Beginner");
    } else if (userScore >= 3 && userScore <= 6) {
      setUserLevel("Intermediate");
    } else {
      setUserLevel("Advanced");
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    setUserLevel("");
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>C++ QUIZ</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart Quiz</button>
          <t/>
          <button onClick={() => window.location.href = "https://cybrom.com/learn-c-and-c-plus-plus-in-bhopal/"}>
  Join Our Course
</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      {userLevel && <p className="user-level">
      <FontAwesomeIcon icon={faCheck} style={{ marginRight: '12px' }} />
      YOUR LEVEL: {userLevel}</p>}
      
    </div>
  );
}

export default App;
