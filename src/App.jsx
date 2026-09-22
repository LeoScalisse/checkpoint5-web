import Hero from './components/Hero';
import Apresentacao from './components/Apresentacao';
import Footer from './components/Footer';
import ContactForm from './components/Contactform';
import ProcurarComida from './components/ProcurarComidas';
import Funcionalidades from './components/Funcionalidades';

export const App = () => {
  return (
    <>
      <Hero />
      <Apresentacao />
      <Funcionalidades />
      <ProcurarComida/>
      <ContactForm/>
      <Footer />
    </>
  )
}

export default App;
