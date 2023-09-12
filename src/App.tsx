import { Component, createEffect, JSX } from 'solid-js';

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

const Answer: Component<{ answer: string, code?: string | undefined | null }> = ({ answer, code }) => {
  return <div class={styles.Answer}>
    {answer}
    {code != null
      ? <pre><code>{code}</code></pre>
      : null
    }
  </div>;
}

const questions: QuestionCategoryModel[] = [
  {
    "name": "Programming Languages",
    "questions": [
      {
        "points": 200,
        "question": "This language, invented by Guido van Rossum, is often used for web development and data analysis.",
        "answer": "What is Python?"
      },
      {
        "points": 400,
        "question": "This language, created by James Gosling at Sun Microsystems, is object-oriented and platform-independent.",
        "answer": "What is Java?"
      },
      {
        "points": 600,
        "question": "This language, designed by Brendan Eich, is most commonly used for client-side web development.",
        "answer": "What is JavaScript?"
      },
      {
        "points": 800,
        "question": "This programming language, first appearing in 1972, is known for its efficiency and is often used for system programming.",
        "answer": "What is C?"
      },
      {
        "points": 1000,
        "question": "This functional language, which has roots in academia, is used in sectors like finance and has a mascot named Conrad.",
        "answer": "What is Haskell?"
      }
    ]
  },
  {
    "name": "Data Structures",
    "questions": [
      {
        "points": 200,
        "question": "This data structure operates on a Last-In, First-Out (LIFO) principle.",
        "answer": "What is a Stack?"
      },
      {
        "points": 400,
        "question": "This tree-based data structure maintains a sorted order of its elements.",
        "answer": "What is a Binary Search Tree (BST)?"
      },
      {
        "points": 600,
        "question": "In this data structure, each element points to both a 'next' and 'previous' element.",
        "answer": "What is a Doubly Linked List?"
      },
      {
        "points": 800,
        "question": "This data structure can have a worst case search, insert, and delete time complexity of O(1).",
        "answer": "What is a Hash Table (or Hash Map)?"
      },
      {
        "points": 1000,
        "question": "This non-linear data structure represents hierarchical data and is used in applications such as network routing and abstract syntax trees.",
        "answer": "What is a Tree?"
      }
    ]
  },
  {
    "name": "Algorithms",
    "questions": [
      {
        "points": 200,
        "question": "This sorting algorithm works by repeatedly swapping adjacent elements if they are in the wrong order.",
        "answer": "What is Bubble Sort?"
      },
      {
        "points": 400,
        "question": "This divide-and-conquer algorithm works by partitioning an array into smaller sub-arrays.",
        "answer": "What is QuickSort?"
      },
      {
        "points": 600,
        "question": "This algorithm is used to find the shortest path between nodes in a graph.",
        "answer": "What is Dijkstra's Algorithm?"
      },
      {
        "points": 800,
        "question": "This technique stores solutions of overlapping subproblems to improve computational efficiency.",
        "answer": "What is Dynamic Programming?"
      },
      {
        "points": 1000,
        "question": "This algorithm is used to determine the single-source shortest paths in a graph with negative weight edges but no negative weight cycles.",
        "answer": "What is Bellman-Ford Algorithm?"
      }
    ]
  },
  {
    "name": "Operating Systems",
    "questions": [
      {
        "points": 200,
        "question": "This family of operating systems is derived from the Unix operating system.",
        "answer": "What is Linux?"
      },
      {
        "points": 400,
        "question": "This scheduling algorithm assigns CPU to the process with the smallest next CPU burst.",
        "answer": "What is Shortest Job First (SJF)?"
      },
      {
        "points": 600,
        "question": "This mechanism allows operating systems to run multiple processes concurrently, sharing a single CPU.",
        "answer": "What is Multitasking?"
      },
      {
        "points": 800,
        "question": "This is a technique that allows a computer to run a program that requires more memory space than is physically available.",
        "answer": "What is Virtual Memory?"
      },
      {
        "points": 1000,
        "question": "This policy replaces the page that will not be used for the longest time in the future.",
        "answer": "What is Optimal Page Replacement?"
      }
    ]
  },
  {
    "name": "Computer Architecture",
    "questions": [
      {
        "points": 200,
        "question": "This is the primary storage area for instructions to be executed by the CPU.",
        "answer": "What is the main memory or RAM?"
      },
      {
        "points": 400,
        "question": "In a CPU, this component performs arithmetic and logical operations.",
        "answer": "What is the Arithmetic Logic Unit (ALU)?"
      },
      {
        "points": 600,
        "question": "This type of CPU architecture uses a pipeline to allow more than one instruction to be executed at any given time.",
        "answer": "What is Superscalar architecture?"
      },
      {
        "points": 800,
        "question": "This is a collection of wires through which data is transmitted from one part of a computer to another.",
        "answer": "What is a Bus?"
      },
      {
        "points": 1000,
        "question": "This component of the CPU provides timing and control signals for the operations of all other units.",
        "answer": "What is the Control Unit?"
      }
    ]
  }
]
/*[
  {
    name: "Edge Cases",
    questions: [
      {
        points: 200,
        question: "A null pointer exception will occur on this line of the following code:",
        questionCode:
`1  // iterate through linked list
2  Node current = head;
3  while (current != null) {
4      current = current.next;
5      System.out.print(current.value);
6  }`,
        answer: "What is line 5?",
      },
      {
        points: 400,
        question: "This is the flaw in the following code:",
        questionCode:
`boolean isDone = false;

while (isDone = false)
  if (new Scanner(System.in).nextLine().equals("hi"))
    isDone = true;`,
        answer: "What is single equals instead of double equals?",
      },
      {
        points: 600,
        question: "This is a one-word change to the following code to make it not throw an error:",
        questionCode:
`int a = 25;
System.out.println(a.toString().substring(1));`,
        answer: "What is changing 'int' to 'Integer'?",
      },
      {
        points: 800,
        question: "This is the number printed by the following code:",
        questionCode:
`int i = 0;
++i;
System.out.println(++i + i++ - 8 * i--);`,
        answer: "What is -20?",
      },
      {
        points: 1000,
        question: "The following code has this major flaw:",
        questionCode:
`// guessing game
String answer = "turtle";
String guess;
do {
    System.out.print("Enter a guess: ");
    guess = new Scanner(System.in).nextLine();
} while (guess != answer);
System.out.println("Correct!");
`,
        answer: "What is != instead of .equals?",
      },
    ],
  },
  {
    name: "Algorithms",
    questions: [
      {
        points: 200,
        question: "This is the name of the data structure or algorithm implemented by the following code:",
        questionCode:
`for (int i = 0; i < arr.length; i++) {
  System.out.println(arr[i]);
}`,
        answer: "What is iteration?",
      },
      {
        points: 400,
        question: "This is the name of the data structure or algorithm implemented by the following code:",
        questionCode:
`for (int i = 0; i < arr.length; i++) {
    for (int j = 0; j < arr[i].length; j++) {
        System.out.println(arr[i][j]);
    }
}`,
        answer: "What is 2D array iteration?",
      },
      {
        points: 600,
        question: "This is the name of the data structure or algorithm implemented by the following code:",
        questionCode:
`Node current = head;
while (current != null) {
    if (current.value == target) {
       return true;
    }
}
return false;`,
        answer: "What is a linked list? What is linear search?",
      },
      {
        points: 800,
        question: `This is the name of the data structure or algorithm implemented by the following code:`,
        questionCode:
`int f(int[] arr, int x) {
  int l = 0;
  int r = arr.length - 1;
  while (l <= r) {
    int m = l + (r - l) / 2;
    if (arr[m] == x)
      return m;
    else if (arr[m] > x)
      r = m - 1;
    else
      l = m + 1;
  }
  return -1;
}
`,
        answer: "What is binary search?",
      },
      {
        points: 1000,
        question: "This is the name of the data structure or algorithm implemented by the following code:",
        questionCode:
`void f(int[] arr) {
  for (int i = 0; i < arr.length - 1; i++) {
    for (int j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            int t = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = t;
        }
    }
  }
}`,
        answer: "What is bubble sort?",
      },
    ],
  },
  {
    name: "History",
    questions: [
      {
        points: 200,
        question: "This English mathematician who died from cyanide poisoning is widely considered to have been the father of theoretical computer science.",
        answer: "Who was Alan Turing?",
      },
      {
        points: 400,
        question: "This person was the first computer programmer.",
        answer: "Who was Ada Lovelace?",
      },
      {
        points: 600,
        question: "This is the programming language that was invented by Dennis Ritchie and used to create the Unix operating system at Bell Laboratories.",
        answer: "What is C?",
      },
      {
        points: 800,
        question: "This is an early operating system that ran from a disk drive and formed the basis for Microsoft Windows.",
        answer: "What is DOS?",
      },
      {
        points: 1000,
        question: "This was the first wide-area packet-switching network with distributed control and one of the first networks to implement the TCP/IP protocol suite.",
        answer: "What was the ARPANET?",
      },
    ],
  },
  {
    name: "Trivia",
    questions: [
      {
        points: 200,
        question: "This politician supposedly credited himself with inventing the Internet.",
        answer: "Who is Al Gore?",
      },
      {
        points: 400,
        question: "A hoax ad campaign resulted in many users ruining their iPhones after using this appliance to charge their phones.",
        answer: "What is a microwave?",
      },
      {
        points: 600,
        question: "In an urban legend, Samsung paid Apple in this U.S. currency denomination.",
        answer: "What is the nickel?",
      },
      {
        points: 800,
        question: "This is a protocol on layer 2 of the OSI Stack, commonly used in wired networks.",
        answer: "What is Ethernet?",
      },
      {
        points: 1000,
        question: "This person proved in one of his incompleteness theorems that for any ω-consistent recursive axiomatic system powerful enough to describe the arithmetic of the natural numbers (for example Peano arithmetic), there are true propositions about the natural numbers that can be neither proved nor disproved from the axiom. This person also showed that neither the axiom of choice nor the continuum hypothesis can be disproved from the accepted Zermelo–Fraenkel set theory, assuming that its axioms are consistent.",
        answer: "Who was Kurt Gödel?",
      },
    ],
  },
  {
    name: "Low-Level",
    questions: [
      {
        points: 200,
        question: "This is the basic unit of binary data.",
        answer: "What is a byte?",
      },
      {
        points: 400,
        question: "This is the basic compenent of modern digital computers.",
        answer: "What is the transistor?",
      },
      {
        points: 600,
        question: "This is a common add-in card for desktop computers that is especially useful for playing video games.",
        answer: "What is a GPU?",
      },
      {
        points: 800,
        question: "This is high-speed memory in which CPUs store data for immediate use (with no clock cycles lost).",
        answer: "What is a register?",
      },
      {
        points: 1000,
        question: "This is a feature of desktop and server-class CPUs that resulted in the Spectre and Meltdown vulnerabilities.",
        answer: "What is out-of-order execution?",
      },
    ],
  },
];*/

const finalCategory: QuestionCategoryModel = {
  name: "Final Jeopardy",
  questions: [
    {
      points: 1000,
      question: "Derived from Latin for 'few' and often used in optimization problems, this algorithmic technique builds a solution piece by piece, making choices that offer the most immediate benefit. It's known to provide local optima but not necessarily a global optimum.",
      answer: "What is a Greedy Algorithm?",
    },
  ],
};

const App: Component = () => {
  const teamsJson = window.localStorage.getItem("teams");
  const doneQuestionsJson = window.localStorage.getItem("doneQuestions");
  let teamsInit: TeamModel[] = [];
  if (teamsJson != null) {
    teamsInit = JSON.parse(teamsJson) as TeamModel[];
  }
  let doneQuestionsInit: string[] = [];
  if (doneQuestionsJson != null) {
    doneQuestionsInit = JSON.parse(doneQuestionsJson) as string[];
  }

  const teamsSignal = createSignal(teamsInit);
  const [teams, setTeams] = teamsSignal;
  const [doneQuestions, setDoneQuestions] = createSignal(doneQuestionsInit);
  const [currentCQ, setCurrentCQ] = createSignal<{category: QuestionCategoryModel, question: QuestionModel} | undefined>();
  const [answerShown, setAnswerShown] = createSignal(false);
  const [done, setDone] = createSignal(false);

  createEffect(() => {
    window.localStorage.setItem("teams", JSON.stringify(teams()));
    window.localStorage.setItem("doneQuestions", JSON.stringify(doneQuestions()));
  });

  return <div class={styles.Wrapper}>
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
                    done={() => doneQuestions().indexOf(category.name + index()) != -1}
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
            {<Answer answer={currentCQ()!.question.answer} code={currentCQ()!.question.answerCode} />}
            <button class={styles.DoneButton} onClick={() => {
              const item = currentCQ()!.category.name + currentCQ()?.category.questions.findIndex(q => q == currentCQ()!.question);
              if (doneQuestions().indexOf(item) == -1)
                setDoneQuestions([...doneQuestions(), currentCQ()!.category.name + currentCQ()?.category.questions.findIndex(q => q == currentCQ()!.question)]);
              setCurrentCQ(undefined);
              setAnswerShown(false);

              if (doneQuestions().length == questions.map(cat => cat.questions.map(q => 1).reduce((a, b) => a + b)).reduce((a, b) => a + b) && !done()) {
                alert("Final Jeopardy!")
                // final jeopardy!!
                setCurrentCQ({
                  category: finalCategory,
                  question: finalCategory.questions[0],
                });
                setDone(true);
              }
            }}>Done</button>
          </>
            : <button class={styles.ShowAnswer} onClick={() => setAnswerShown(true)}>Show Answer</button>}
        </div>
      }
    </main>
    <button class={styles.ResetButton} onClick={() => {
      if (!confirm("Are you sure you want to reset the board?"))
        return;

      if (!confirm("Resetting the board."))
        return;

      setTeams([]);
      setDoneQuestions([]);
      setCurrentCQ(undefined);
      setAnswerShown(false);
    }}>
      RESET
    </button>
    <Teams
      teamsSignal={teamsSignal}
      currentCQ={currentCQ}
      answerShown={answerShown}
    />
  </div>;
};

export default App;
