import './App.css';
import { Header } from './components/Header';
import { MainImage } from './components/MainImage';
import { Content } from './components/Content';
import { AuthorInfo } from './components/AuthorInfo';
import { CommentSection } from './components/CommentSection';

function App() {
  return (
    <div className="App">
      <Header />
      <MainImage />
      <Content />
      <AuthorInfo />
      <CommentSection />
    </div>
  );
}

export default App;
