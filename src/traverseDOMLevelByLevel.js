// 1. Option 1
export function traverseDOMLevelByLevel(root) {
  // Check if the root node is null, return an empty array if true
  if (!root) return [];

  // Initialize the queue with the root node to start the traversal from the top
  // Initialize the results array to store the visited nodes
  const results = [];
  const queue = [root];

  // Continue the loop until all nodes are visited (i.e., the queue is empty)
  while (queue.length) {
    // Remove the first node from the queue to process it
    const current = queue.shift();
    // Add the current node to the results array
    results.push(current);
    // Add all children of the current node to the queue for future visits
    queue.push(...current.children);
  }

  // Return the array of visited nodes after completing the traversal
  return results;
}

/* 2. Option 2
- track the front of the queue instead of shifting
- use explict loop for slightly better performance
*/

export function traverseDOMLevelByLevelImproved(root) {
  if (!root) return [];
  const results = [];
  const queue = [root];
  let front = 0;
  while (front < queue.length) {
    const current = queue[front++];
    results.push(current);
    for (const child of current.children) {
      queue.push(child);
    }
  }
  return results;
}
