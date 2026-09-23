import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const depoimentos = [
  {
    id: 1,
    nome: 'Mariana Souza',
    cidade: 'São Paulo, SP',
    nota: 5,
    texto:
      'Peço quase todo dia no almoço do trabalho. A comida sempre chega quentinha e o rastreamento em tempo real me ajuda a me organizar.',
  },
  {
    id: 2,
    nome: 'Rafael Lima',
    cidade: 'Campinas, SP',
    nota: 5,
    texto:
      'Os cupons fazem muita diferença no fim do mês. Já economizei bastante e a variedade de restaurantes é enorme.',
  },
  {
    id: 3,
    nome: 'Juliana Martins',
    cidade: 'Santos, SP',
    nota: 4,
    texto:
      'Adoro poder repetir um pedido antigo com poucos toques. Pagar com Pix é rápido e sem complicação.',
  },
];

const iniciais = (nome) =>
  nome
    .split(' ')
    .map((parte) => parte[0])
    .slice(0, 2)
    .join('');

const Depoimentos = () => {
  return (
    <section className="bg-white px-6 py-24 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-orange-500 uppercase">
            Depoimentos
          </span>
          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Quem pede, recomenda
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Veja o que nossos clientes estão falando sobre o GourmetOn.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {depoimentos.map(({ id, nome, cidade, nota, texto }) => (
            <article
              key={id}
              className="flex flex-col rounded-2xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
            >
              <FaQuoteLeft className="text-3xl text-orange-400" />

              <div className="mt-4 flex gap-1" aria-label={`Nota ${nota} de 5`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <FaStar
                    key={i}
                    className={i < nota ? 'text-orange-400' : 'text-gray-300'}
                  />
                ))}
              </div>

              <p className="mt-4 flex-1 leading-relaxed text-gray-600">
                “{texto}”
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-400 font-bold text-gray-900">
                  {iniciais(nome)}
                </div>
                <div>
                  <p className="font-bold">{nome}</p>
                  <p className="text-sm text-gray-500">{cidade}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
