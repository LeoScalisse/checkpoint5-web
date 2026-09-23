import Hero from './components/Hero';
import Apresentacao from './components/Apresentacao';
import Footer from './components/Footer';
import ContactForm from './components/Contactform';
import ProcurarComida from './components/ProcurarComidas';
import Funcionalidades from './components/Funcionalidades';
import Depoimentos from './components/Depoimentos';

export const App = () => {
  return (
    <>
      <Hero />
      <Apresentacao />
      <Funcionalidades />
      <ProcurarComida/>
      <Depoimentos />
      <ContactForm/>
      <Footer />
    </>
  )
}

export default App;
