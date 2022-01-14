import styles from './SingleQuestionUI.module.css';
const SingleQuestionUI = (props) => {
    return (
        <div className={styles["singlequestionui_inline__rows"]}>
            <p className={styles["singlequestion_item__number"]}>{props.id}</p>
            <div className={styles["singlequestion_circle"]}>
              <h2 className={styles["singlequestion_heading__number"]}>Pic {props.id}</h2>
            </div>
          </div>
    );
};
export default SingleQuestionUI;