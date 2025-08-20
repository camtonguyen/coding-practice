export function topWords(log, k) {
  if (!log || !k) return [];

  // split log into array of words
  const words = log.split(' ');

  // count the frequency of each word
  const wordCount = words.reduce((acc, word) => {
    // acc[word] tries to get the current count for this word
    // (acc[word] || 0) means: if the word already exists, use its count; otherwise use 0
    // + 1 increments the count by 1
    // The result is stored back in acc[word]
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  // sort the words by frequency in descending order
  const sortedWords = Object.keys(wordCount).sort(
    (a, b) => wordCount[b] - wordCount[a]
  );

  // return the top k words
  return sortedWords.slice(0, k);
}
