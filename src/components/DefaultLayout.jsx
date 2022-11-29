import Header from './Header';
import Footer from './Footer';

const DefaultLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main className='main-content'>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default DefaultLayout