import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import TablesAll from './components/pages/TablesAll/TablesAll';
import Table from './components/pages/Table/Table';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';

function App() {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<TablesAll />} />
        <Route path='table/:id' element={<Table />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
