import React, { useState } from "react";
import SingleQuestion from "./SingleQuestion";
import styles from "./QuestionBank.module.css";
import questionSet from '../data.json';

const questionPageData = questionSet[1];
const QuestionBank = () => {
  const [questions, setQuestions] = useState(questionSet[0]);
  const [currentPage, setCurrentPage] = useState(0);
  const [nextButtonTitle, setNextButtonTitle] = useState("Next");

  const changePageHandler = () => {
    if (currentPage !== ((questionSet[0]).length - 1)) {
      if (currentPage === 1) {
        setNextButtonTitle("Submit");
        setCurrentPage(currentPage + 1);
      } else {
        setNextButtonTitle("Next");
        setCurrentPage(currentPage + 1);
      }
    }
  };
  const pageBackHandler = () => {
    if (currentPage === ((questionSet[0]).length - 1)) {
      setNextButtonTitle("Next");
      setCurrentPage(currentPage - 1);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeOption = (currentPageIndex, questionIndex) => (selectedOption) => {
    let clonedquestions = JSON.parse(JSON.stringify(questions));
    clonedquestions[currentPageIndex][questionIndex].selectedOption = selectedOption;
    setQuestions(clonedquestions);
  }

  return (
    <>
      <div className={styles["questionbank_container"]}>
        <h2 className={styles["questionbank_title__heading"]}>
          Step {questionPageData[currentPage].id} :{" "}
          {questionPageData[currentPage].title}
        </h2>
        {questions[currentPage].map(
          (question, questionNumber) => {
            return (
              <SingleQuestion
                key={questionNumber + 1}
                questionValue={question}
                changeOption={changeOption(currentPage, questionNumber)}
                id={questionNumber + 1}
              />
            );
          }
        )}

        {currentPage !== 0 && (
          <button className={styles["questionbank_back__button"]} onClick={pageBackHandler}>
            Back
          </button>
        )}
        <button className={styles["questionbank_next__button"]} onClick={changePageHandler}>
          {nextButtonTitle}
        </button>
      </div>
    </>
  );
};
export default QuestionBank;