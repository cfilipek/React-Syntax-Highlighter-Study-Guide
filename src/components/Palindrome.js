import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  dark,
  a11yDark,
  darcula,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

function Palindrome() {
  const directionString =
    '// Directions: Given a string, return true if the string is a palindrome and false if not\n// Palindromes are strings that form the same word reversed.\n// *Do* include spaces and panctuation in determining if the string is a palindrome.\n// Examples:\n// palindrome("abba") === true\n// palindrome("abcdefg") === false\nfunction palindrome(str){}';
  const answersString =
    'function reverse(str){\n  const arr = str.split("");\n  arr.reverse();\n  return arr.join("")\n}';
  return (
    <div className="code">
      <h4 id="question-2">Question 2: Palindromes</h4>
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
    </div>
  );
}

export default Palindrome;
