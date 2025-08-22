export function findKFrequentWordsInTree(tree, limit) {
  if (!tree || !k) return [];
  const queue = [tree];
  const wordCount = {};
  let front = 0;
  while (front < queue.length) {
    const node = queue[front++];
    const currentTextContent = node.textContent || '';
    const words = currentTextContent.split(/\s+/);
    words.forEach((word) => {
      if (word.length && word != '↵' && typeof word === 'string') {
        wordCount[word] = (wordCount[word] || 0) + 1;
      }
    });
    if (node.children) {
      for (const child of node.children) {
        queue.push(child);
      }
    }
  }
  const sortedWords = Object.keys(wordCount).sort(
    (a, b) => wordCount[b] - wordCount[a]
  );
  return sortedWords.slice(0, limit);
}
