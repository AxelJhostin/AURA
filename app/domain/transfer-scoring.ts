export type TransferAnswers = Record<string, string>;
export type TransferFeedbackTier =
  | "strong"
  | "solid"
  | "emerging"
  | "needsPractice";

export type TransferReview = {
  questionId: string;
  optionId: string | null;
  achieved: boolean;
};

type ScorableQuestion = {
  id: string;
  options: Array<{
    id: string;
    score: number;
  }>;
};

export function hasCompleteTransferAnswers(
  questions: ScorableQuestion[],
  answers: TransferAnswers,
) {
  return questions.every((question) =>
    question.options.some((option) => option.id === answers[question.id]),
  );
}

export function scoreTransferAnswers(
  questions: ScorableQuestion[],
  answers: TransferAnswers,
) {
  const reviews: TransferReview[] = questions.map((question) => {
    const selected = question.options.find(
      (option) => option.id === answers[question.id],
    );

    return {
      questionId: question.id,
      optionId: selected?.id ?? null,
      achieved: selected?.score === 1,
    };
  });

  return {
    completed: reviews.every((review) => review.optionId !== null),
    score: reviews.filter((review) => review.achieved).length,
    reviews,
  };
}

export function transferFeedbackTier(
  score: number,
  maximum: number,
): TransferFeedbackTier {
  if (maximum <= 0 || score < 0 || score > maximum) {
    throw new RangeError("invalid_transfer_score");
  }
  if (score === maximum) return "strong";

  const ratio = score / maximum;
  if (ratio >= 2 / 3) return "solid";
  if (ratio >= 1 / 3) return "emerging";
  return "needsPractice";
}
