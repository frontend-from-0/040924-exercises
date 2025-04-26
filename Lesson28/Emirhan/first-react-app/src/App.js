import './App.css';
import { Header } from './components/Header';
import { MainImage } from './components/MainImage';
import { Content } from './components/Content';
import { AuthorInfo } from './components/AuthorInfo';
import { CommentSection } from './components/CommentSection';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="container"></div>
      <MainImage />
      <Content />
      <AuthorInfo />
      <CommentSection />
    </div>
  );
}

export default App;
