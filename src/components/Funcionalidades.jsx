import { useState } from "react";

const Funcionalidades = () => {
  const cardsFuncionalidades = [
    {
      id: 1,
      titulo: "Cupons e promoções",
      descricao:
        "Aproveite ofertas personalizadas para economizar nos seus pedidos.",
    },
    {
      id: 2,
      titulo: "Lista de pedidos anteriores",
      descricao:
        "O usuario consegue consultar pedidos antigos e pedir novamente com poucos toques.",
    },
    {
      id: 3,
      titulo: "Endereços favoritos",
      descricao:
        "Pode salvar casa, trabalho ou outros endereços para agilizar novos pedidos.",
    },
  ];

  const [indice, setIndice] = useState(0);
  const cardAtual = cardsFuncionalidades[indice];

  const proximoCard = () =>
    setIndice((i) => (i + 1) % cardsFuncionalidades.length);

  const cardAnterior = () =>
    setIndice(
      (i) => (i - 1 + cardsFuncionalidades.length) % cardsFuncionalidades.length,
    );

  return (
    <section className="bg-orange-50 px-6 py-20 text-gray-900">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-orange-500">
          Funcionalidades
        </span>

        <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">
          Tudo para facilitar seus pedidos
        </h2>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-xl ring-1 ring-orange-100 md:p-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-400 text-2xl font-black text-white">
            {cardAtual.id}
          </div>

          <h3 className="mt-6 text-2xl font-bold md:text-3xl">
            {cardAtual.titulo}
          </h3>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-gray-600 md:text-lg">
            {cardAtual.descricao}
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button
              type="button"
              onClick={cardAnterior}
              className="rounded-full border border-orange-300 px-5 py-2 font-semibold text-orange-600 hover:bg-orange-50">
              Anterior
            </button>

            <button
              type="button"
              onClick={proximoCard}
              className="rounded-full bg-orange-500 px-5 py-2 font-semibold text-white hover:bg-orange-600">
              Proximo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funcionalidades;