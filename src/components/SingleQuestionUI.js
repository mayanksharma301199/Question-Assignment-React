import styles from './SingleQuestionUI.module.css';
const SingleQuestionUI = (props) => {
    return (
        <div className={styles["singlequestionui_inline__rows"]}>
            <p className={styles["singlequestion_item__number"]}>{props.id}</p>
            <img src= {props.imageUrl} alt= {`Pic ${props.id}`} className={styles["singlequestion_circle"]} />
        </div>
    );
};
export default SingleQuestionUI;