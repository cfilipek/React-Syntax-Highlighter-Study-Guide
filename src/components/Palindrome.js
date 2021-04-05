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
    'function palindrome(str){\n return str === str.split("").reverse().join("") ? true : false;\n}';
  const answersString2 =
    'function palindrome(str){\n return str === str.split("").reverse().join("");\n}';
  const answersString3 =
    'function palindrome(str){\n  return str.split("").every((char, i) => {\n    return char === str[str.length - i - 1]\n });\n}';
  const everyMethod =
    'arr.every(callback(element[, index[, array]])[, thisArg])';
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
      <div>
        In my first attempt the use of the ternary statement (? :) is not
        necessary as this is either a truthy or falsy statement:
      </div>
      <SyntaxHighlighter
        lineProps={{
          style: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
        }}
        language="javascript"
        style={a11yDark}
        showLineNumbers={true}
        wrapLines={true}
      >
        {answersString2}
      </SyntaxHighlighter>
      <div>Solution 2 (not ideal):</div>
      <SyntaxHighlighter
        lineProps={{
          style: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
        }}
        language="javascript"
        style={a11yDark}
        showLineNumbers={true}
        wrapLines={true}
      >
        {answersString3}
      </SyntaxHighlighter>
      <div>
        The every() method tests whether all elements in the array pass the test
        implemented by the provided function. It returns a Boolean value.
      </div>
      <SyntaxHighlighter
        lineProps={{
          style: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
        }}
        language="javascript"
        style={a11yDark}
        showLineNumbers={true}
        wrapLines={true}
      >
        {everyMethod}
      </SyntaxHighlighter>
    </div>
  );
}

export default Palindrome;
