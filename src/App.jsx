import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SinglePage from './pages/SinglePage/SinglePage';
import Blog from './pages/Blog/Blog';
import Cart from './pages/Cart/Cart';
import Catalog from './pages/Catalog/Catalog';
import Comparison from './pages/Comparison/Comparison';
import Contact from './pages/Contact/Contact';
import Cureer from './pages/Cureer/Cureer';
import Guarantees from './pages/Guarantees/Guarantees';
import Manufactures from './pages/Manufacturers/Manufactures';
import Office from './pages/OfficePage/Office';
import Payment from './pages/Payment/Payment';
import Personal from './pages/Personal/Personal';
import Services from './pages/Services/Services';
import Stock from './pages/Stock/Stock';
import Wishlist from './pages/Wishlist/Wishlist';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Loading from './components/Loading/Loading';
import useRouteChange from './hooks/useRouteChange';

const App = () => {
  const loading = useRouteChange();

  return (
    <>
      <div className="bg-[#F8F7F3]">
        {loading ? (
          <Loading />
        ) : (
          <>
            <Header />
            <div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/single-product/:id" element={<SinglePage />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/comparison" element={<Comparison />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/cureer" element={<Cureer />} />
                <Route path="/guarantees" element={<Guarantees />} />
                <Route path="/manufactures" element={<Manufactures />} />
                <Route path="/office" element={<Office />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/personal" element={<Personal />} />
                <Route path="/services" element={<Services />} />
                <Route path="/stock" element={<Stock />} />
                <Route path="/wishlist" element={<Wishlist />} />
              </Routes>
            </div>
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default App;
