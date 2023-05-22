import { Container } from 'react-bootstrap';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import TablesAll from './components/pages/TablesAll/TablesAll';
import Table from './components/pages/Table/Table';
import NotFound from './components/pages/NotFound/NotFound';

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TablesAll />} />
          <Route path='table/:id' element={<Table />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;
