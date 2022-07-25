import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

const PagianPadrao = () => {
  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default PagianPadrao;