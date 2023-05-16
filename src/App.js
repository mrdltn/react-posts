// import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header.js';
import { PostContent } from './components/PostContent/PostContent';
import { Footer } from './components/Footer/Footer';
import SearchPost from './components/Search/SearchPost';///


function App() {

  return (
      <div className="App">
      <Header/>
      <main>
        <SearchPost /> 
        <PostContent/>
      </main>
      <Footer year = {new Date().getFullYear()}/>
    </div>
  )
}

export default App;