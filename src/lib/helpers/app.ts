export const cutLongSentence = (sentence: string, charsCount: number) => {
  if (sentence.length > charsCount) {
    const result = sentence.slice(0, charsCount) + "...";
    return result;
  } else {
    return sentence;
  }
};
