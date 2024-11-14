import Navbar from '../components/navbar/Navbar';

function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <div className="p-6 mx-auto ">{children}</div>
      </main>
    </div>
  );
}

export default MainLayout;
