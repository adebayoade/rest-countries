import { Outlet } from 'react-router-dom';
import Footer from '../footer';
import Navbar from '../navbar';

export default function AppLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
