import { useState, useEffect } from "react";

const STORAGE_KEY = "contact_submissions";

function lerInscricoes(){
    try{
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    }catch{
        return [];
    }
}

function escreverInscricoes(list){
    try{
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
        return true;
    } catch {
        return false;
    }
}

export default function ContactForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [submissions, setSubmissions] = useState([]);
    const [status, setStatus] = useState(null);

    useEffect(() => {
        setSubmissions(lerInscricoes());
    }, []);

    function validacao(){
        const next = {};
        if (!name.trim()) next.name = "Informe seu nome: ";
        if (!email.trim()) next.email = "Informe seu email: ";
        if (!message.trim()) next.message = "Escreva sua mensagem";
        setErrors(next);
        return Object.keys(next).length === 0;
    }

    function handleSubmit(e) {
    e.preventDefault();
    if (!validacao()) {
      setStatus(null);
      return;
    }
 
    const entry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };
 
    const atualizado = [entry, ...submissions];
    const ok = writeSubmissions(updated);
 
    if (ok) {
      setSubmissions(updated);
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
      setStatus("ok");
    } else {
      setStatus("error");
    }
  }
 
  function handleClearAll() {
    writeSubmissions([]);
    setSubmissions([]);
    setStatus(null);
  }
  function formatDate(iso) {
    try {
      return new Date(iso).toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return iso;
    }
  }
 
  return (
    <div className="min-h-screen bg-stone-50 flex items-start justify-center px-4 py-12">
      <div className="w-full max-w-3xl grid gap-8 md:grid-cols-5">
        {/* Form */}
        <div className="md:col-span-3 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-sm">
          <h1 className="text-2xl font-semibold text-stone-900">Fale com a gente</h1>
          <p className="mt-1 text-sm text-stone-500">
            Os dados ficam salvos apenas no seu navegador (localStorage), como
            simulação de um envio real.
          </p>
 
          <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700">
                Nome
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`mt-1 w-full rounded-md border px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800 focus:border-stone-800 ${
                  errors.name ? "border-red-400" : "border-stone-300"
                }`}
                placeholder="Seu nome completo"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name}</p>
              )}
            </div>
 
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`mt-1 w-full rounded-md border px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800 focus:border-stone-800 ${
                  errors.email ? "border-red-400" : "border-stone-300"
                }`}
                placeholder="voce@exemplo.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>
 
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-stone-700">
                Mensagem
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                className={`mt-1 w-full rounded-md border px-3 py-2 text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-800 focus:border-stone-800 ${
                  errors.message ? "border-red-400" : "border-stone-300"
                }`}
                placeholder="Como podemos ajudar?"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message}</p>
              )}
            </div>
 
            <button
              type="submit"
              className="w-full rounded-md bg-stone-900 text-white font-medium py-2.5 hover:bg-stone-800 transition-colors"
            >
              Enviar mensagem
            </button>
 
            {status === "ok" && (
              <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-md px-3 py-2">
                Mensagem salva com sucesso.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-md px-3 py-2">
                Não foi possível salvar. O armazenamento local pode estar cheio ou bloqueado.
              </p>
            )}
          </form>
        </div>
 
        {/* Submissions list */}
        <div className="md:col-span-2 bg-white border border-stone-200 rounded-lg p-6 sm:p-8 shadow-sm flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-stone-900">
              Recebidos
              <span className="ml-2 text-sm font-normal text-stone-400">
                {submissions.length}
              </span>
            </h2>
            {submissions.length > 0 && (
              <button
                onClick={handleClearAll}
                className="text-sm text-stone-500 hover:text-red-600 transition-colors"
              >
                Limpar tudo
              </button>
            )}
          </div>
 
          <div className="mt-4 space-y-3 overflow-y-auto max-h-112 pr-1">
            {submissions.length === 0 && (
              <p className="text-sm text-stone-400">
                Nenhuma mensagem ainda. Envie o formulário para ver o registro aqui.
              </p>
            )}
 
            {submissions.map((s) => (
              <div
                key={s.id}
                className="border border-stone-200 rounded-md p-3 relative group"
              >
                <button
                  onClick={() => handleDelete(s.id)}
                  className="absolute top-2 right-2 text-xs text-stone-300 hover:text-red-600 transition-colors"
                  aria-label="Remover"
                >
                  remover
                </button>
                <p className="font-medium text-stone-900 pr-14">{s.name}</p>
                <p className="text-sm text-stone-500">{s.email}</p>
                <p className="mt-2 text-sm text-stone-700 whitespace-pre-wrap">
                  {s.message}
                </p>
                <p className="mt-2 text-xs text-stone-400">{formatDate(s.createdAt)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}