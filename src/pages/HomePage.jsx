import ProductList from '../components/Main/ProductList';
import Sidebar from '../components/Sidebar/Sidebar';
import MainLayout from '../layouts/MainLayout';

function HomePage() {
  return (
    <MainLayout>
      <div className="home-page">
        <Sidebar />
        <ProductList />
      </div>
    </MainLayout>
  );
}

export default HomePage;
