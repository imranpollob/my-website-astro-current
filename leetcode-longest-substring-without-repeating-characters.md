https://leetcode.com/problems/longest-substring-without-repeating-characters

📝 The Problem
Given a string s, find the length of the longest substring without repeating characters.
Example:
Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Note: "pwke" is a subsequence, not a substring. Substrings must be contiguous!
💡 The Intuition: The "Expanding Telescope"
The "Brute Force" approach would be to check every possible substring. However, that takes 
 or 
 time—way too slow for large inputs.
Instead, imagine a telescope (our window) pointing at the string:
Expand: We slide the right side (r) of the telescope to include a new character.
The Conflict: If the new character is already inside our telescope, we have a duplicate.
Shrink: We slide the left side (l) of the telescope forward, dropping characters until the duplicate is gone.
Record: At every step where the window is "clean" (no duplicates), we check if this is the widest the telescope has ever been.
🛠️ The Solution
We use a Set to keep track of the characters currently inside our window. This allows us to check for duplicates in 
 time.
python
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        char_set = set() # Tracks unique characters in the current window
        l = 0            # Left pointer
        max_length = 0   # Result

        # Iterate through the string with the right pointer 'r'
        for r in range(len(s)):
            # If we find a duplicate, shrink the window from the left
            while s[r] in char_set:
                char_set.remove(s[l])
                l += 1
            
            # Add the current character and update the maximum length
            char_set.add(s[r])
            
            # Window size formula: (right_index - left_index + 1)
            current_window_size = r - l + 1
            max_length = max(max_length, current_window_size)
        
        return max_length
Use code with caution.

🔍 Step-by-Step Execution
Let’s trace s = "abcabcbb":
Right Pointer (r)	Char	Action	char_set	Window Size	max_length
0	a	Add	{a}	1	1
1	b	Add	{a, b}	2	2
2	c	Add	{a, b, c}	3	3
3	a	Duplicate! Move l	{b, c, a}	3	3
4	b	Duplicate! Move l	{c, a, b}	3	3
🧬 Complexity Analysis
Time Complexity: 
Although there is a while loop inside a for loop, each character is actually only visited twice: once by the right pointer to add it, and at most once by the left pointer to remove it. This is known as "amortized analysis."
Space Complexity: 
We need space for the set. The size depends on the number of unique characters in the string (
) or the total length of the string (
).
🚀 Key Takeaways for the Interview
Indices vs. Values: A common mistake is trying to track the index r in the set. Always remember: we are checking for duplicate characters (s[r]), not positions.
The Window Formula: The width of any sliding window is always right - left + 1.
Efficiency: Moving from 
 to 
 is the difference between an internship rejection and a job offer.