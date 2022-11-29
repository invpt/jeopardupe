import type { Component, JSX } from 'solid-js';

export type QuestionCategoryModel = {
  name: string,
  questions: QuestionModel[],
};
  
export type QuestionModel = {
  points: number,
  question: string,
  questionCode?: string | undefined | null,
  answer: string,
  answerCode?: string | undefined  | null,
};

export type TeamModel = {
  name: string,
  points: number,
};

export type CQ = {
  category: QuestionCategoryModel,
  question: QuestionModel,
};