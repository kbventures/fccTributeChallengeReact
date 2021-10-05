import './styles/main.scss';
import Header from './Components/Header';
import Chronology from './Components/Chronology';
import Footer from './Components/Footer';
import Row from './Components/Row';
import Book from './Components/Book';

function App() {
  return (
    <div className="App">
      <div className="row">
        <Header />
        <Chronology />
        <Row />
        <Book />
        <Row />
        <Footer />
      </div>
    </div>
  );
}

export default App;
