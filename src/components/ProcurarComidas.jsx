import { useState, useEffect } from "react";

const API_BASE = "https://www.themealdb.com/api/json/v1/1";

export default function ProcurarComida(){
    const [query, setQuery] = useState("");
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [selected, setSelected] = useState(null);

    async function ProcurarComidas(term) {
        setLoading(true);
        setError(null);
         try {
            const res = await fetch(`${API_BASE}/search.php?s=${encodeURIComponent(term)}`);
            if (!res.ok) throw new Error(`Erro na API: ${res.status}`);
            const informacao = await res.json();
            setMeals(informacao.meals || []);
         }catch {
            setError("Não foi possível buscar os pratos agora...")
         }finally {
            setLoading(false)
         }
    }

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect -- busca inicial ao montar, padrão intencional
        ProcurarComidas("a");
    }, []);

    function handleSubmit(e) {
    e.preventDefault();
    ProcurarComidas(query.trim() || "a");
  }
 
  function ingredientes(meal) {
    const list = [];
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const quantidade = meal[`strMeasure${i}`];
      if (ing && ing.trim()) {
        list.push(`${quantidade ? quantidade.trim() : ""} ${ing.trim()}`.trim());
      }
    }
    return list;
  }
 
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-semibold text-stone-900">
          Buscar pratos
        </h1>
        <p className="mt-1 text-sm text-stone-500">
          Dados via TheMealDB — busque por nome do prato (em inglês).
        </p>
 
        <form onSubmit={handleSubmit} className="mt-6 flex gap-2">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="ex: chicken, pasta, cake"
            className="flex-1 rounded-md border border-stone-300 px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800 focus:border-stone-800"
          />
          <button
            type="submit"
            className="rounded-md bg-stone-900 text-white font-medium px-5 hover:bg-stone-800 transition-colors"
          >
            Buscar
          </button>
        </form>
 
        {loading && (
          <p className="mt-8 text-sm text-stone-500">Carregando...</p>
        )}
 
        {error && (
          <p className="mt-8 text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
            {error}
          </p>
        )}
 
        {!loading && !error && meals.length === 0 && (
          <p className="mt-8 text-sm text-stone-400">
            Nenhum prato encontrado para essa busca.
          </p>
        )}
 
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {!loading &&
            meals.map((meal) => (
              <button
                key={meal.idMeal}
                onClick={() => setSelected(meal)}
                className="text-left bg-white border border-stone-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <p className="font-medium text-stone-900">{meal.strMeal}</p>
                  <p className="text-sm text-stone-500 mt-1">
                    {meal.strCategory} · {meal.strArea}
                  </p>
                </div>
              </button>
            ))}
        </div>
      </div>
 
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-lg max-w-xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.strMealThumb}
              alt={selected.strMeal}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl font-semibold text-stone-900">
                  {selected.strMeal}
                </h2>
                <button
                  onClick={() => setSelected(null)}
                  className="text-stone-400 hover:text-stone-700"
                  aria-label="Fechar"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-stone-500 mt-1">
                {selected.strCategory} · {selected.strArea}
              </p>
 
              <h3 className="mt-5 font-medium text-stone-900">
                Ingredientes
              </h3>
              <ul className="mt-2 text-sm text-stone-700 space-y-1 list-disc list-inside">
                {ingredientes(selected).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
 
              <h3 className="mt-5 font-medium text-stone-900">
                Modo de preparo
              </h3>
              <p className="mt-2 text-sm text-stone-700 whitespace-pre-line">
                {selected.strInstructions}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
   
}