import type { Component } from 'solid-js';
import { QuestionModel } from './data';

import styles from './JeopardyCard.module.css';

const JeopardyCard : Component<{
    question: QuestionModel,
    done: boolean,
    onClick: () => void
}> = ({ question, done, onClick }) => {
    return <button class={styles.JeopardyCard} classList={{ [styles.Done]: done }} onClick={onClick}>
        {question.points}
    </button>;
}

export default JeopardyCard;