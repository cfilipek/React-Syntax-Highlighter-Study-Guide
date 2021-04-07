import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  dark,
  a11yDark,
  darcula,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

function MaxChar() {
  const directionString =
    '// Directions: Given a string, return the character that is most commonly used in the string\n// Examples:\n// maxChar("abcccccccd") === "c"\n// maxChar("apple 12311111") === "1"\nfunction maxChar(str){}';
  const answersString =
    'function maxChar(str){\n const charMap = {};\n let max = 0;\n let maxChar = "";\n\n for(let char of str) {\n  if(charMap[char]) {\n   charMap[char]++\n  else {\n   charMap[char] = 1\n  }\n }\n\n for (let char in charMap) {\n  if(charMap[char] > max) {\n    max = charMap[char];\n    maxChar = char;\n  }\n }\n\n return maxChar\n}';
  return (
    <div className="code">
      <h4 id="question-4">Question 4: Max Chars</h4>
      <SyntaxHighlighter
        lineProps={{
          style: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
        }}
        language="javascript"
        style={a11yDark}
        showLineNumbers={true}
        wrapLines={true}
      >
        {directionString}
      </SyntaxHighlighter>
      <h4>Common String Questions:</h4>
      <div className="code__answertree">
        <div className="code__answer-section">
          What is the most common character in the string?
        </div>
        <div className="code__answer-section">
          Does string A have the same characters as string B (is it an anagram)?
        </div>
        <div className="code__answer-section">
          Does the given string have any repeated characters in it?
        </div>
      </div>
      <div>Solution:</div>
      <SyntaxHighlighter
        lineProps={{
          style: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
        }}
        language="javascript"
        style={a11yDark}
        showLineNumbers={true}
        wrapLines={true}
      >
        {answersString}
      </SyntaxHighlighter>
    </div>
  );
}

export default MaxChar;
