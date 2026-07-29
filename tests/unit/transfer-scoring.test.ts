import assert from "node:assert/strict";
import test from "node:test";
import { transferChallenge } from "../../app/data/transfer";
import {
  hasCompleteTransferAnswers,
  scoreTransferAnswers,
  transferFeedbackTier,
} from "../../app/domain/transfer-scoring";

function correctAnswers() {
  return Object.fromEntries(
    transferChallenge.questions.map((question) => [
      question.id,
      question.options.find((option) => option.score === 1)?.id ?? "",
    ]),
  );
}

test("scores all six observable transfer behaviors", () => {
  const answers = correctAnswers();
  const result = scoreTransferAnswers(transferChallenge.questions, answers);

  assert.equal(hasCompleteTransferAnswers(transferChallenge.questions, answers), true);
  assert.equal(result.completed, true);
  assert.equal(result.score, transferChallenge.maxScore);
  assert.equal(result.reviews.every((review) => review.achieved), true);
});

test("treats unknown and missing options as incomplete rather than points", () => {
  const answers = {
    ...correctAnswers(),
    claim: "unknown-option",
  };
  const result = scoreTransferAnswers(transferChallenge.questions, answers);

  assert.equal(hasCompleteTransferAnswers(transferChallenge.questions, answers), false);
  assert.equal(result.completed, false);
  assert.equal(result.score, transferChallenge.maxScore - 1);
  assert.equal(result.reviews[0]?.optionId, null);
});

test("maps normalized scores to stable feedback tiers", () => {
  assert.equal(transferFeedbackTier(6, 6), "strong");
  assert.equal(transferFeedbackTier(4, 6), "solid");
  assert.equal(transferFeedbackTier(2, 6), "emerging");
  assert.equal(transferFeedbackTier(1, 6), "needsPractice");
  assert.throws(() => transferFeedbackTier(7, 6), /invalid_transfer_score/);
});
