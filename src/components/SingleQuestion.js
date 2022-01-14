import React from "react";
import Question from "./Question";
import styles from "./SingleQuestion.module.css";
import SingleQuestionUI from "./SingleQuestionUI";
const SingleQuestion = (props) => {
  return (
      <div className= {styles["singlequestion_container"]}>
        <div className= {styles["singlequestion_display"]}>
          <SingleQuestionUI imageUrl = {props.questionValue.imageUrl} id={props.id} />
          <Question questionValue = {props.questionValue} changeOption = {props.changeOption} />
        </div>
      </div>
  );
};

export default SingleQuestion;
