export const askQuestionsAction = (
  question: Questions
): {
  type: 'CREATE_QUESTION';
  payload: {
    question: Questions;
  };
} => ({
  type: 'CREATE_QUESTION',
  payload: {
    question,
  },
});

export type Action = ReturnType<typeof askQuestionsAction>;