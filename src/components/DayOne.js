import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  dark,
  a11yDark,
  darcula,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

function DayOne() {
  const directionString =
    '// Directions: Given a string, return a new string with the reversed order of characters\n// reverse("apple") === "leppa"; \n// reverse("hello") === "olleh"\nfunction reverse(str){}';
  const answersString =
    'function reverse(str){\n  const arr = str.split("");\n  arr.reverse();\n  return arr.join("")\n}';
  const answersString2 =
    'function reverse(str){\n  return str.split("").reverse().join("")\n}';
  const answersString3 =
    'function reverse(str){\n let reversed="";\n for (let char of str) {\n   reversed = char + reversed;\n }\n return reversed\n}';
  const answersString4 =
    'function reverse(str){\n return str.split("").reduce((reversed, character) => {\n   return character + reversed;\n  }, "")\n}';
  const reduceSyntax =
    'arr.reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])';
  return (
    <div className="code">
      <h4 id="question-1">Question 1: String Reversal</h4>
      <SyntaxHighlighter
        language="javascript"
        style={a11yDark}
        showLineNumbers={true}
        wrapLines={true}
        lineProps={{
          style: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
        }}
      >
        {directionString}
      </SyntaxHighlighter>
      <h4>Answers:</h4>
      <div className="code__answertree">
        <div className="code__answer-section">turn 'str' into an array</div>
        <div className="code__answer-section">
          call 'reverse' method on the array
        </div>
        <div className="code__answer-section">
          join the array back into a string
        </div>
        <div className="code__answer-section">return the array</div>
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={a11yDark}
        showLineNumbers={true}
        wrapLines={true}
        lineProps={{
          style: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
        }}
      >
        {answersString}
      </SyntaxHighlighter>
      <div>or</div>
      <SyntaxHighlighter
        language="javascript"
        style={a11yDark}
        showLineNumbers={true}
        wrapLines={true}
        lineProps={{
          style: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
        }}
      >
        {answersString2}
      </SyntaxHighlighter>
      <h4>Alt Answers:</h4>
      <div className="code__answertree">
        <div className="code__answer-section">create an empty string</div>
        <div className="code__answer-section">
          for each character in the provided string take the character and add
          it to the start of 'reversed'
        </div>
        <div className="code__answer-section">
          return the variable 'reversed'
        </div>
      </div>
      <SyntaxHighlighter
        language="javascript"
        style={a11yDark}
        showLineNumbers={true}
        wrapLines={true}
        lineProps={{
          style: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
        }}
      >
        {answersString3}
      </SyntaxHighlighter>
      <div>solution 3:</div>
      <SyntaxHighlighter
        language="javascript"
        style={a11yDark}
        showLineNumbers={true}
        wrapLines={true}
        lineProps={{
          style: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
        }}
      >
        {answersString4}
      </SyntaxHighlighter>
      <div>Reduce Syntax:</div>
      <SyntaxHighlighter
        language="javascript"
        style={a11yDark}
        showLineNumbers={true}
        wrapLines={true}
        lineProps={{
          style: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
        }}
      >
        {reduceSyntax}
      </SyntaxHighlighter>
    </div>
  );
}

export default DayOne;
