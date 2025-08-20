/*
Example:
const endorsements = [
  { skill: 'css', user: 'Bill' },
  { skill: 'javascript', user: 'Chad' },
  { skill: 'javascript', user: 'Bill' },
  { skill: 'css', user: 'Sue' },
  { skill: 'javascript', user: 'Sue' },
  { skill: 'html', user: 'Sue' }
];
const skillSummaries = aggregateSkillEndorsements(endorsements);
Output:
[
  { skill: 'javascript', users: ['Chad', 'Bill', 'Sue'], count: 3 },
  { skill: 'css', users: ['Bill', 'Sue'], count: 2 },
  { skill: 'html', users: ['Sue'], count: 1 }
]
*/

export function aggregateSkillEndorsements(endorsements) {
  // Handle empty input
  if (!endorsements || endorsements.length === 0) {
    return [];
  }

  // Use a Map to efficiently group endorsements by skill
  const skillMap = new Map();

  // Process each endorsement
  for (const { skill, user } of endorsements) {
    if (!skillMap.has(skill)) {
      skillMap.set(skill, new Set());
    }
    skillMap.get(skill).add(user);
  }

  return Array.from(skillMap.entries()).map(([skill, users]) => ({
    skill,
    users: Array.from(users),
    count: users.size,
  }));
}

export function aggregateSkillEndorsements2(endorsements) {
  if (!endorsements || endorsements.length === 0) {
    return [];
  }

  const skillGroups = {};

  for (const { skill, user } of endorsements) {
    if (!skillGroups[skill]) {
      skillGroups[skill] = new Set();
    }
    skillGroups[skill].add(user);
  }

  return Object.entries(skillGroups).map(([skill, users]) => ({
    skill,
    users: Array.from(users),
    count: users.size,
  }));
}
