🌐 SkillSphere: Conectando Talentos e Conhecimento!✨ 

Trabalho ralizado por:

Guilherme de Oliveira Scremin - RM 564788
Igor Gadote -  RM 567747
Gabriel Caramico - RM 568409

Visão Geral do ProjetoO SkillSphere é uma aplicação web simples, desenvolvida para simular uma plataforma de busca e conexão de profissionais com base em suas skills (habilidades) e áreas de atuação. O projeto também inclui um Quiz interativo para engajar o usuário com temas relevantes do "Futuro do Trabalho" e uma funcionalidade de login básico.

🚀 Funcionalidades Principais
    Listagem de Profissionais: Exibe uma grade (grid) de cards com o perfil de diversos profissionais, incluindo nome, cargo, empresa e principais skills.
    Barra de Pesquisa Funcional: Permite que o usuário filtre os cards de profissionais em tempo real.
    Desafio do Conhecimento (Quiz): Uma seção interativa com perguntas sobre o futuro do trabalho (como Machine Learning e ESG), com feedback imediato e pontuação final.
    Login Simples (Modal): Implementação de um modal de login para acesso simulado.🔍 Detalhes TécnicosO projeto é construído puramente com tecnologias front-end, focando em demonstração e prática.

🛠️ Tecnologias Utilizadas
HTML5: Estrutura semântica da página.
CSS3: Estilização, responsividade parcial e design moderno para os cards e a interface.
JavaScript (Puro): Responsável por toda a lógica dinâmica, incluindo:
    Renderização dos cards a partir de um array de dados (profissionais).
    Lógica de filtragem e busca.
    Controle do fluxo e pontuação do Quiz.
    Controle e validação do Modal de Login.

📂 Estrutura de Arquivos/SkillSphere/
|-- index.html              // Estrutura principal da página
|-- src/
|   |-- css/
|   |   |-- style.css       // Estilos globais e componentes (cards, header, quiz, modal)
|   |-- js/
|   |   |-- script.js       // Lógica JavaScript (renderização, busca, quiz, login)
|   |-- assets/             // (Presumido) Pastas para imagens de perfil.

🔑 Acesso e Utilização1. Barra de PesquisaA função de filtro na barra de pesquisa (<input type="search">) foi implementada para realizar a busca com base no Nome do Profissional.Observação Importante: No código JavaScript atual, a busca só funciona se você digitar o nome do profissional listado. Se tentar buscar por skill ou cargo, não haverá resultados.

2. Login de AcessoA funcionalidade de Login utiliza um modal (caixa pop-up) com validação de credenciais fixas no código JavaScript, simulando um acesso administrativo.CampoValorUsuário (User)admSenha (Password)12345Ao inserir as credenciais corretas e clicar em Entrar, o modal fecha e o botão de login no cabeçalho é alterado para "Olá, adm". Se as credenciais estiverem incorretas, uma mensagem de erro é exibida.

💡 Como Executar o ProjetoPara visualizar e interagir com o projeto:Clone (ou Baixe) este repositório.Abra o arquivo index.html em qualquer navegador web moderno (Chrome, Firefox, Edge, etc.).O JavaScript carregará automaticamente a lista de profissionais e as funcionalidades dinâmicas.