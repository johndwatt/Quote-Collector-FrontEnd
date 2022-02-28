import Navbar from "./components/Navbar/Navbar";
import QuoteContainer from './components/QuoteContainer/QuoteContainer';
import NewQuote from './components/NewQuote/NewQuote';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteContainer />
      <NewQuote />
    </div>
  );
}

export default App;
