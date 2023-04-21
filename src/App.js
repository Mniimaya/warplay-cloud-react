import Advantages from './components/Advantages/Advantages';
import Feedback from './components/Feedback/Feedback';
import Header from './components/Header/Header';
import Intro from './components/Intro/Intro';
import Manual from './components/Manual/Manual';
import Rate from './components/Rate/Rate';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Intro/>
        <div className="section-wrapper">
          <Manual />
          <Rate />
        </div>
        <Advantages/>
        <Feedback/>
      </main>
    </div>
  );
}

export default App;
