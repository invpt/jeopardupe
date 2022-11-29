import type { Component, JSX } from 'solid-js';

import { createSignal, For } from 'solid-js';
import styles from './App.module.css';
import { QuestionCategoryModel, QuestionModel, TeamModel } from './data';
import JeopardyCard from './JeopardyCard';
import Teams from './Teams';

const CodeQuestion: Component<{ prompt: string, code: string | undefined | null }> = ({ prompt, code }) => {
  return <div class={styles.CodeQuestion}>
    <header>{prompt}</header>
    {code != null
      ? <pre><code>{code}</code></pre>
      : null
    }
  </div>;
}

const Answer: Component<{ answer: string }> = ({ answer }) => {
  return <div class={styles.Answer}>
    {answer}
  </div>;
}

const questions: QuestionCategoryModel[] = [
  {
    name: "Math",
    questions: [
      {
        points: 100,
        question: "This algorithm is implemented by the following code:",
        questionCode: `for (int i = 0; i < arr.length; i++) {
  System.out.println(arr[i]);
}`,
        answer: "What is... iteration?",
      },
      {
        points: 200,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 300,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 400,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 500,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
    ],
  },
  {
    name: "History",
    questions: [
      {
        points: 100,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 200,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 300,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 400,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 500,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
    ],
  },
  {
    name: "Algorithms",
    questions: [
      {
        points: 100,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 200,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 300,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 400,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 500,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
    ],
  },
  {
    name: "Edge cases",
    questions: [
      {
        points: 100,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 200,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 300,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 400,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 500,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
    ],
  },
  {
    name: "Else",
    questions: [
      {
        points: 100,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 200,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 300,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 400,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
      {
        points: 500,
        question: `for (int i = 0; i < arr.length; i++) {
    System.out.println(arr[i]);
}`,
        answer: "Iteration",
      },
    ],
  },
];

const App: Component = () => {
  const teamsSignal = createSignal<TeamModel[]>([]);
  const [doneQuestions, setDoneQuestions] = createSignal<string[]>([]);
  const [currentCQ, setCurrentCQ] = createSignal<{category: QuestionCategoryModel, question: QuestionModel} | undefined>();
  const [answerShown, setAnswerShown] = createSignal(false);

  return (
    <main>
      {currentCQ() == null
        ? <div>
          <div class={styles.JeopardyColumnHeaders}>
          <For each={questions}>{category =>
            <header>{category.name}</header>
          }</For>
          </div>
          <div class={styles.JeopardyColumns}>
            <For each={questions}>{category => <>
              <div class={styles.JeopardyColumn}>
                <For each={category.questions}>{(question, index) =>
                  <JeopardyCard
                    question={question}
                    done={doneQuestions().indexOf(category.name + index()) != -1}
                    onClick={() => setCurrentCQ({category: category, question: question})}
                  />
                }</For>
              </div>
            </>}</For>
          </div>
        </div>
        : <div class={styles.QA}>
          {<CodeQuestion prompt={currentCQ()!.question.question} code={currentCQ()!.question.questionCode} />}
          {answerShown()
            ? <>
            {<Answer answer={currentCQ()!.question.answer} />}
            <button class={styles.DoneButton} onClick={() => {
              setDoneQuestions([...doneQuestions(), currentCQ()!.category.name + currentCQ()?.category.questions.findIndex(q => q == currentCQ()!.question)]);
              setCurrentCQ(undefined);
              setAnswerShown(false);
            }}>Done</button>
          </>
            : <button class={styles.ShowAnswer} onClick={() => setAnswerShown(true)}>Show Answer</button>}
        </div>
      }
      <Teams
        teamsSignal={teamsSignal}
        currentCQ={currentCQ}
        answerShown={answerShown}
      />
    </main>
  );
};

export default App;
