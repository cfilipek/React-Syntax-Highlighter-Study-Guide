import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import {
  dark,
  a11yDark,
  darcula,
} from 'react-syntax-highlighter/dist/esm/styles/prism';

function ReverseInt() {
  const directionString =
    '// Directions: Given an integer, return an integer that is the reverse ordering of numbers\n// Examples:\n// reverseInt(15) === 51\n// reverseInt(981) === 189\n// reverseInt(500) === 5\n// reverseInt(-15) === -51\n// reverseInt(-90) === 9\nfunction reverseInt(n) {}';
  const answersString =
    'function reverseInt(n){\n const reversed = n.toString().split("").reverse().join("");\n if(n<0) {\n   return parseInt(reversed) * -1;\n }\n return parseInt(reversed);\n}';
  const answersString2 =
    'function reverseInt(n){\n const reversed = n.toString().split("").reverse().join("");\n return parseInt(reversed) * Math.sign(n);\n}';
  const signMethod =
    'The Math.sign() function returns either a positive or negative +/- 1, indicating the sign of a number passed into the argument. If the number passed into Math.sign() is 0, it will return a +/- 0. Note that if the number is positive, an explicit (+) will not be returned.';
  return (
    <div className="code">
      <h4 id="question-3">Question 3: Reverse an Int</h4>
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
      <div>Solution utilizing Math.sign():</div>
      <SyntaxHighlighter
        lineProps={{
          style: { wordBreak: 'break-word', whiteSpace: 'pre-wrap' },
        }}
        language="javascript"
        style={a11yDark}
        showLineNumbers={true}
        wrapLines={true}
      >
        {signMethod}
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
        {answersString2}
      </SyntaxHighlighter>
    </div>
  );
}

export default ReverseInt;
