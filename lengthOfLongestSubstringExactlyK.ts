// 1. Longest Substring with Exactly K Distinct Characters
// Description:
// Given a string s and an integer k, return the length of the longest substring that contains exactly k distinct characters.

const testCases1 = [
  {
    input: { s: "eceba", k: 2 },
    expected: 3,
    description: `"ece" has 2 distinct characters`,
  },
  {
    input: { s: "aa", k: 1 },
    expected: 2,
    description: `"aa" has 1 distinct character`,
  },
  {
    input: { s: "aabbcc", k: 3 },
    expected: 6,
    description: `"aabbcc" has 3 distinct characters`,
  },
  {
    input: { s: "abcadcacacaca", k: 3 },
    expected: 11,
    description: `"cadcacacaca" has 3 distinct characters`,
  },
  { input: { s: "", k: 2 }, expected: 0, description: "Empty string" },
  {
    input: { s: "aabbcc", k: 2 },
    expected: 4,
    description: `Longest substring with exactly 2 distinct characters is "aabb" or "bbcc" (length 4)`,
  },
  {
    input: { s: "abcadcacacaca", k: 3 },
    expected: 11,
    description: `Longest substring with exactly 3 distinct characters is "cadcacacaca" (length 11)`,
  },
  {
    input: { s: "aabacbebebe", k: 3 },
    expected: 7,
    description: `Longest substring with exactly 3 distinct characters is "cbebebe" (length 7)`,
  },
  {
    input: { s: "abc", k: 4 },
    expected: 0,
    description: `No substring has exactly 4 distinct characters in "abc", expect 0`,
  },
  {
    input: { s: "aaabbbcccdddeee", k: 3 },
    expected: 9,
    description: `Longest substring with exactly 3 distinct characters is "aaabbbccc" or similar (length 9)`,
  },
  {
    input: { s: "abaccc", k: 2 },
    expected: 4,
    description: `Longest substring with exactly 2 distinct characters is "accc" (length 4)`,
  },
];

function lengthOfLongestSubstringExactlyK(s: string, k: number): number {
  let longest = 0;
  let start = 0;
  const lastSeen: Record<string, number> = {};

  for (let end = 0; end < s.length; end++) {
    lastSeen[s[end]] = end;

    if (Object.keys(lastSeen).length > k) {
      let leftmostIndex = Math.min(...Object.values(lastSeen));
      let charToRemove = s[leftmostIndex];
      delete lastSeen[charToRemove];
      start = leftmostIndex + 1;
    }

    if (Object.keys(lastSeen).length === k) {
      longest = Math.max(longest, end - start + 1);
    }
  }

  return longest;
}

testCases1.forEach((value) => {
  console.log(
    lengthOfLongestSubstringExactlyK(value.input.s, value.input.k),
    value.expected,
    value.input.s,
    value.input.k,

    lengthOfLongestSubstringExactlyK(value.input.s, value.input.k) ===
      value.expected
  );
});
