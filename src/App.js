import './App.scss';
import DayOne from './components/DayOne';
import Palindrome from './components/Palindrome';
import ReverseInt from './components/ReverseInt';

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Claire's Frontend Study Guide</h1>
        <div className="app__nav">
          <a href="#question-1">
            <h4>1: String Reversal</h4>
          </a>
          <a href="#question-2">
            <h4>2: Palindromes</h4>
          </a>
          <a href="#question-3">
            <h4>3: Reverse an Int</h4>
          </a>
        </div>
      </header>
      <div>
        <DayOne />
        <Palindrome />
        <ReverseInt />
      </div>
    </div>
  );
}

export default App;
