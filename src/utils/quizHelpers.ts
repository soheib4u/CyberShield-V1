export interface ShuffledQuiz {
  question: string;
  options: string[];
  correctAnswer: number;
  taunt: string;
  explanation: string;
  originalCorrectAnswer: number;
}

export const shuffleQuizOptions = (quiz: {
  question: string;
  options: string[];
  correctAnswer: number;
  taunt: string;
  explanation: string;
}): ShuffledQuiz => {
  const { question, options, correctAnswer, taunt, explanation } = quiz;
  
  // Create array of indices
  const indices = options.map((_, index) => index);
  
  // Fisher-Yates shuffle
  for (let i = indices.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  
  // Create shuffled options and find new correct answer position
  const shuffledOptions = indices.map(i => options[i]);
  const newCorrectAnswer = indices.indexOf(correctAnswer);
  
  return {
    question,
    options: shuffledOptions,
    correctAnswer: newCorrectAnswer,
    taunt,
    explanation,
    originalCorrectAnswer: correctAnswer,
  };
};

export const shuffleQuizzes = (quizzes: any[]) => {
  return quizzes.map(quiz => shuffleQuizOptions(quiz));
};
