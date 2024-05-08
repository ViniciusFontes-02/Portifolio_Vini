import imgPizzaria from "../img/PizzaVini.png";
import imgEcommerce from "../img/ViniStore.png";
import GeradorDeSenhas from "../img/GeradorDeSenhas.png";
import ContadorRegressivoReact from "../img/ContadorRegressivoReact.png";
import ListaTarefas from "../img/ListaTarefasJSeTS.png";
import GeradordeBoxShadow from "../img/GeradorDeBoxShadow.png";
import QuizInterativo from "../img/QuizInterativo.png";
import GeradordeQRCode from "../img/GeradordeQRCode.png";
import MiniBlog from "../img/MiniBlog.png";
import BibliotecaFilmes from "../img/BibliotecaFilmes.png";
import UserGitHub from "../img/UserGitHub.png";

export const projects = [
  {
    img: imgPizzaria,
    title: "PizzaVini",
    description:
      "Um site de uma pizzaria onde o cliente pode fazer seu pedido, consultar valores no carrinho, conhecer mais sobre a pizzaria, como historia, localização e contato, e finalizar seu pedido.",
    repository: "https://github.com/ViniciusFontes-02/Pizzaria_Vini_deploy",
    deploy: "https://pizza-vini.vercel.app/",
    skill: "React.Js, Vite.Js, CSS3",
    id: 1,
  },
  {
    img: imgEcommerce,
    title: "ViniStore",
    description:
      "Um site de um ecommerce de produtos eletronicos, no momento inacabado. Com funçoes de navegar pela home e produtos e colocar seus produtos no carrinho,alterando o valor total da compra",
    repository:
      "https://github.com/ViniciusFontes-02/Ecommerce_Responsivo_React.Js",
    deploy: "https://ecommerce-responsivo-react-js.vercel.app/",
    skill: "React.Js, Vite.Js, CSS3",
    id: 2,
  },

  {
    img: MiniBlog,
    title: "MiniBlog",
    description:
      "Miniblog empolgante usando React Router e Firebase, criando uma plataforma dinâmica e interativa para compartilhar ideias e conectar pessoas. Com o Firebase como núcleo, os usuários desfrutam de autenticação segura e um banco de dados em tempo real, enquanto o React Router garante uma navegação suave. Os recursos incluem criação, edição e exclusão de postagens, com a capacidade de explorar conteúdo por tags para facilitar a descoberta e promover a colaboração na comunidade.",
    repository:
      "https://github.com/ViniciusFontes-02/MiniBlog-ReactRouter-Firebase",
    deploy: "https://minblog-react-router-firebase-hooks.vercel.app/",
    skill: "React, Firebase, Vite.Js, CSSModules",
    id: 3,
  },

  {
    img: BibliotecaFilmes,
    title: "Biblioteca de Filmes",
    description:
      "Utilizando React.js como base sólida, integrei uma API de filmes para acessar uma vasta gama de informações sobre cada título. Implementei o React Router para uma navegação suave e Hooks do React para uma experiência de usuário fluida. Os usuários podem explorar os filmes mais bem avaliados e detalhes abrangentes, incluindo orçamento, receita e duração, além de uma função de pesquisa intuitiva para encontrar seus filmes favoritos.",
    repository: "https://github.com/ViniciusFontes-02/Biblioteca-de-filmes",
    deploy: "https://biblioteca-filmes.vercel.app/",
    skill: "React.Js, Vite.Js, CSS",
    id: 4,
  },

  {
    img: UserGitHub,
    title: "GitHub Finder",
    description:
      "uma ferramenta que simplifica a busca de perfis do GitHub. Com uma simples pesquisa por nome de usuário, o aplicativo utiliza o fetch para acessar a API do GitHub, exibindo informações detalhadas como imagem de perfil, nome, localização e estatísticas de seguidores. Além disso, integrei o React Router DOM para permitir aos usuários acessar os projetos mais populares de um perfil com facilidade, destacando detalhes como linguagem principal, estrelas e um link direto para o código-fonte do projeto.",
    repository: "https://github.com/ViniciusFontes-02/User-GitHub",
    deploy: "https://github-finder-zeta-roan.vercel.app/",
    skill: "React.Js, TypeScript, Vite.Js, CSSModules",
    id: 5,
  },

  {
    img: ContadorRegressivoReact,
    title: "Contador Regressivo React",
    description:
      "Os usuários têm a liberdade de personalizar o título, a data, o fundo da tela e a cor do tema. Após submeter as preferências, o sistema redireciona para uma nova página, exibindo o tempo restante até a data escolhida.",
    repository: "https://github.com/ViniciusFontes-02/ContadorRegressivoReact",
    deploy: "https://contador-regressivo-react-nine.vercel.app/",
    skill: "React.Js, Vite.Js, CSS3",
    id: 6,
  },

  {
    img: ListaTarefas,
    title: "Lista de Tarefas",
    description:
      "Os usuários podem criar, editar e excluir tarefas, enquanto a implementação do TypeScript garante maior confiabilidade e segurança aos dados.",
    repository: "https://github.com/ViniciusFontes-02/ListaTarefas-REACT-TS",
    deploy: "https://lista-de-tarefas-react-type-script.vercel.app/",
    skill: "React.Js, TypeScript, Vite.Js, CSSModules",
    id: 7,
  },

  {
    img: GeradordeBoxShadow,
    title: "Gerador de Box Shadow",
    description:
      "Com controles intuitivos, os usuários podem ajustar o deslocamento, o blur, o espalhamento, a cor, a opacidade e a natureza da sombra, seja interna ou externa. Ao finalizar as configurações desejadas, o código gerado é exibido para fácil implementação, permitindo aos usuários copiá-lo com um clique.",
    repository: "https://github.com/ViniciusFontes-02/gerador-de-Box-Shadow",
    deploy: "https://viniciusfontes-02.github.io/gerador-de-Box-Shadow/",
    skill: "JavaScript, HTML5, CSS3",
    id: 8,
  },

  {
    img: QuizInterativo,
    title: "Quiz Interativo",
    description:
      "Funciona com base nas respostas do usuário, destacando-as em verde se corretas e em vermelho se incorretas, tanto na resposta quanto no fundo da tela. Ao final, exibe o desempenho do usuário e o número de questões corretas. Esse projeto flexível permite a inclusão de várias perguntas, sendo útil para treinar conhecimentos em diversas áreas.",
    repository: "https://github.com/ViniciusFontes-02/Quiz-Interativo",
    deploy: "https://viniciusfontes-02.github.io/Quiz-Interativo/",
    skill: "JavaScript, HTML5, CSS3",
    id: 9,
  },

  {
    img: GeradordeQRCode,
    title: "Gerador de QR Code",
    description:
      "Permite aos usuários gerar QR Codes facilmente para palavras, frases e URLs. Com um alerta integrado para garantir que o conteúdo seja inserido antes da geração do código, o projeto oferece uma solução simples, porém funcional, que certamente será útil para uma ampla gama de usuários..",
    repository: "https://github.com/ViniciusFontes-02/Gerador-de-QR-Code",
    deploy: "https://viniciusfontes-02.github.io/Gerador-de-QR-Code/",
    skill: "JavaScript, HTML5, CSS3",
    id: 10,
  },

  {
    img: GeradorDeSenhas,
    title: "Gerador de Senhas",
    description:
      "Permite ao usuário personalizar a quantidade de caracteres desejada e incluir letras, números e caracteres especiais. Além disso, oferece a funcionalidade de copiar a senha gerada com apenas um clique.",
    repository: "https://github.com/ViniciusFontes-02/Gerador-de-senhas-",
    deploy: "https://viniciusfontes-02.github.io/Gerador-de-senhas-/",
    skill: "JavaScript, HTML5, CSS3",
    id: 11,
  },
];
