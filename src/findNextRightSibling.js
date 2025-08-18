export function findNextRightSibling(root, targetNode) {
  if (!root || !targetNode) {
    return null;
  }
  const queue = [root];
  let front = 0;
  while (front < queue.length) {
    const currentNode = queue[front++];
    if (currentNode === targetNode) {
      return queue[front++] || null;
    }
    if (currentNode.children) {
      for (const child of currentNode.children) {
        queue.push(child);
      }
    }
  }
  return null;
}
