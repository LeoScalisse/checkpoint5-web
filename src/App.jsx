import Hero from './components/Hero';
import Apresentacao from './components/Apresentacao';
import Footer from './components/Footer';
import ContactForm from './components/Contactform';
import ProcurarComida from './components/ProcurarComidas';

export const App = () => {
  return (
    <>
      <Hero />
      <Apresentacao />
      <ProcurarComida/>
      <ContactForm/>
      <Footer />
    </>
  )
}

export default App;
