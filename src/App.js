import './App.css';
import { NewsContextProvider } from './NewsContext';
import News from './components/News';

function App() {
  return (
    <NewsContextProvider>
      <News></News>
    </NewsContextProvider>
  );
}

export default App;
