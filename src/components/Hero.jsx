import { FaApple, FaGooglePlay, FaStar } from 'react-icons/fa';

const IMAGEM_FUNDO =
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1920&q=80';

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gray-950">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${IMAGEM_FUNDO})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/40" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-400/15 px-4 py-1.5 text-sm font-semibold text-orange-300 ring-1 ring-orange-400/30">
            <FaStar className="text-xs" />
            Mais de 4 mil restaurantes parceiros
          </span>

          <h1 className="mt-6 text-5xl leading-tight font-extrabold text-white md:text-6xl">
            Sua comida favorita,{' '}
            <span className="text-orange-400">em minutos</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 md:text-xl">
            O GourmetOn conecta você aos melhores restaurantes da cidade. Peça em
            poucos toques, acompanhe a entrega em tempo real e pague do jeito que
            preferir.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-orange-400 px-7 py-4 font-bold text-gray-900 transition hover:bg-orange-300"
            >
              <FaGooglePlay className="text-xl" />
              Baixar para Android
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 font-bold text-white ring-2 ring-white/40 transition hover:bg-white hover:text-gray-900"
            >
              <FaApple className="text-xl" />
              Baixar para iOS
            </a>
          </div>

          <dl className="mt-12 flex gap-10 text-white">
            <div>
              <dt className="text-3xl font-extrabold text-orange-400">30min</dt>
              <dd className="text-sm text-gray-400">Entrega média</dd>
            </div>
            <div>
              <dt className="text-3xl font-extrabold text-orange-400">4.9</dt>
              <dd className="text-sm text-gray-400">Nota na loja</dd>
            </div>
            <div>
              <dt className="text-3xl font-extrabold text-orange-400">500k</dt>
              <dd className="text-sm text-gray-400">Pedidos por mês</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
