import styles from './Question.module.css';
const Question = (props) => {
    return (
        <div className={styles["question_container"]}>
            <h4 className={styles["question_heading"]}>{props.questionValue.questions}</h4>
            <p className={styles["question_content__paragraph"]}>Select one option</p>
            <div className={styles["question_display"]}>
              {props.questionValue.options.map((value) => {
                return (
                  <li key={value} onClick={() => props.changeOption(value)} className={styles["question_content__link"]}
                  style={{color:props.questionValue.selectedOption === value ? "red" : "black"}}>
                    {value}
                  </li>
                );
              })}
            </div>
          </div>
    );
};
export default Question;