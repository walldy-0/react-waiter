import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import TablesAll from './components/pages/TablesAll/TablesAll';
import TableSingle from './components/pages/TableSingle/TableSingle';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { fetchTables } from './redux/tablesRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path='/' element={<TablesAll />} />
        <Route path='table/:id' element={<TableSingle />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
