# GourmetOn — Landing Page

Landing page de um aplicativo fictício de delivery de comida, desenvolvida em **React + Vite** e estilizada com **Tailwind CSS**, como parte do Checkpoint 5 de Web.

## Seções

| Componente | Descrição |
| --- | --- |
| `Hero` | Chamada principal com botões de download (Android/iOS) e números do app. |
| `Apresentacao` | Benefícios do GourmetOn: entrega rápida, variedade de restaurantes e pagamento fácil. |
| `Funcionalidades` | Slideshow com as funcionalidades do app (cupons, pedidos anteriores, endereços favoritos). |
| `ProcurarComidas` | Busca de pratos consumindo a API pública [TheMealDB](https://www.themealdb.com/api.php). |
| `Depoimentos` | Depoimentos de clientes satisfeitos, com nota em estrelas. |
| `Contactform` | Formulário de contato com validação dos campos. |
| `Footer` | Rodapé da página. |

## Tecnologias

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React Icons](https://react-icons.github.io/react-icons/) e [Lucide React](https://lucide.dev/)
- ESLint

## Como executar

```bash
# instalar as dependências
npm install

# rodar em modo de desenvolvimento
npm run dev
```

## Estrutura

```
src/
├── App.jsx              # monta as seções da página
├── main.jsx             # ponto de entrada do React
├── index.css            # importação do Tailwind
└── components/
    ├── Hero.jsx
    ├── Apresentacao.jsx
    ├── Funcionalidades.jsx
    ├── ProcurarComidas.jsx
    ├── Depoimentos.jsx
    ├── Contactform.jsx
    └── Footer.jsx
```

## Integrantes

| Nome | GitHub |
| --- | --- |
| Allan Freire | [@AllanFreire](https://github.com/AllanFreire) |
| Danillo Roque | [@danilloroque](https://github.com/danilloroque) |
| Leonardo Scalisse | [@LeoScalisse](https://github.com/LeoScalisse) |
| Pietro Ruotolo | [@PietroRuotolo](https://github.com/PietroRuotolo) |
