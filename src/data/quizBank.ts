export type QuizQuestion = {
  id: string;
  subjectSlug: string;
  bookSlug?: string;
  difficulty: "foundation" | "intermediate" | "advanced";
  type: "single";
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

/** Scholar's Trial: model/practice questions, separate from verified university PYQs. */
export const quizBank: QuizQuestion[] = [
  {
    id: "ww-wollstonecraft-001",
    subjectSlug: "womens-writing",
    bookSlug: "a-vindication-of-the-rights-of-woman",
    difficulty: "foundation",
    type: "single",
    question: "What does Mary Wollstonecraft argue is a major cause of women's apparent inferiority?",
    options: ["Unequal education and social conditioning", "Lack of literary talent", "Biological inability to reason", "Absence of political history"],
    answer: 0,
    explanation: "Wollstonecraft argues that unequal education and social conditions restrict women's development of reason and independence."
  },
  {
    id: "ww-plath-001",
    subjectSlug: "womens-writing",
    bookSlug: "lady-lazarus",
    difficulty: "foundation",
    type: "single",
    question: "Which literary form most closely describes the speaking voice of Sylvia Plath's Lady Lazarus?",
    options: ["Dramatic monologue", "Pastoral elegy", "Epic narrative", "Sonnet sequence"],
    answer: 0,
    explanation: "Lady Lazarus presents a theatrical first-person speaker whose performance and self-presentation drive the poem."
  },
  {
    id: "postcolonial-achebe-001",
    subjectSlug: "postcolonial-literatures",
    bookSlug: "things-fall-apart",
    difficulty: "foundation",
    type: "single",
    question: "Which central conflict shapes Things Fall Apart?",
    options: ["Tradition and colonial change", "Industrialization and technology", "Courtly love and marriage", "Scientific progress and religion"],
    answer: 0,
    explanation: "Achebe examines the disruption of Igbo social life through colonial intervention, missionary influence, and tensions between established traditions and change."
  },
  {
    id: "postcolonial-naipaul-001",
    subjectSlug: "postcolonial-literatures",
    bookSlug: "a-house-for-mr-biswas",
    difficulty: "intermediate",
    type: "single",
    question: "What does the house most strongly represent for Mr Biswas?",
    options: ["Independence and a sense of belonging", "Military authority", "Religious conversion", "Academic achievement"],
    answer: 0,
    explanation: "The struggle to possess an independent home becomes closely tied to Biswas's desire for autonomy, dignity, and belonging."
  },
  {
    id: "ww-mansfield-001",
    subjectSlug: "womens-writing",
    bookSlug: "bliss",
    difficulty: "intermediate",
    type: "single",
    question: "What is central to Bertha Young's experience in Katherine Mansfield's Bliss?",
    options: ["The contrast between perceived happiness and hidden social realities", "A military campaign", "A quest for political office", "A supernatural investigation"],
    answer: 0,
    explanation: "The story gradually unsettles Bertha's apparently perfect happiness by revealing tensions beneath the social surface."
  }
];

export const quizByBook = (bookSlug: string) => quizBank.filter((q) => q.bookSlug === bookSlug);
export const quizBySubject = (subjectSlug: string) => quizBank.filter((q) => q.subjectSlug === subjectSlug);
