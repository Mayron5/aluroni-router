import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Menu from 'components/Menu';
import PagianPadrao from 'components/PaginaPadrao';
import Inicio from 'pages/Inicio';
import Cardapio from 'pages/Cardapio';

const AppRouter = () => {
  return (
    <Router>
      <main>
        <Menu />
        <Routes>
          <Route path='/' element={<PagianPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
};

export default AppRouter;