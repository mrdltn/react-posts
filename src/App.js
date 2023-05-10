// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header.js';
import { PostContent } from './components/PostContent/PostContent';
import { Footer } from './components/Footer/Footer';

export function App() {
  return (
    <div className="App">
      <Header/>
      <main>
        <PostContent/>
      </main>
      <Footer/>
    </div>
  );
}

// export default App;
