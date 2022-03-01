import Navbar from "./components/Navbar/Navbar";
import QuoteContainer from './components/QuoteContainer/QuoteContainer';
import NewQuote from './components/NewQuote/NewQuote';
import EditQuote from "./components/EditQuote/EditQuote";

import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <QuoteContainer />
      <NewQuote />
      {/* <EditQuote /> */}
    </div>
  );
}

export default App;
