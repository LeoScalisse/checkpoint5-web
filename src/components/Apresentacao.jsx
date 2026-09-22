import { FaCreditCard, FaMotorcycle, FaUtensils } from 'react-icons/fa';

const beneficios = [
  {
    id: 1,
    icone: FaMotorcycle,
    titulo: 'Entrega rápida',
    descricao:
      'Entregadores próximos de você garantem que o pedido chegue quentinho, com tempo médio de 30 minutos e rastreamento em tempo real.',
  },
  {
    id: 2,
    icone: FaUtensils,
    titulo: 'Variedade de restaurantes',
    descricao:
      'Da pizza da esquina ao japonês premiado: são mais de 4 mil parceiros em um só lugar, com cardápios completos e fotos de verdade.',
  },
  {
    id: 3,
    icone: FaCreditCard,
    titulo: 'Pagamento fácil',
    descricao:
      'Pix, cartão salvo ou vale-refeição em um toque. Sem taxas escondidas e com cupons aplicados automaticamente no carrinho.',
  },
];

const Apresentacao = () => {
  return (
    <section className="bg-white px-6 py-24 text-gray-900">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold tracking-widest text-orange-500 uppercase">
            Por que o GourmetOn
          </span>
          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Tudo o que você precisa para matar a fome
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            Criamos um app simples de usar, pensado para quem quer comer bem sem
            perder tempo.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {beneficios.map(({ id, icone: Icone, titulo, descricao }) => (
            <article
              key={id}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-400 text-2xl text-gray-900">
                <Icone />
              </div>
              <h3 className="mt-6 text-xl font-bold">{titulo}</h3>
              <p className="mt-3 leading-relaxed text-gray-600">{descricao}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Apresentacao;
