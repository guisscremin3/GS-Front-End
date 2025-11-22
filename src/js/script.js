const profissionais = [
    // 1. Ana Clara Silva
    {
        id: 1,
        nome: "Ana Clara Silva",
        foto: "src/assets/images/ana-silva.jpg",
        cargo: "Especialista em Inteligência Artificial",
        empresa: "TechSolutions Inc.",
        skills: ["Machine Learning", "Python", "Processamento de Linguagem Natural", "Ética em IA"]
    },
    // 2. Bruno Mendes
    {
        id: 2,
        nome: "Bruno Mendes",
        foto: "src/assets/images/bruno-mendes.jpg",
        cargo: "UX/UI Designer Sênior",
        empresa: "Digital Builders",
        skills: ["Design Thinking", "Figma", "Pesquisa de Usuário", "Prototipagem"]
    },
    // 3. Carla Oliveira
    {
        id: 3,
        nome: "Carla Oliveira",
        foto: "src/assets/images/carla-oliveira.jpg",
        cargo: "Analista de Sustentabilidade e ESG",
        empresa: "EcoImpact Solutions",
        skills: ["Sustentabilidade Corporativa", "Relatórios ESG", "Gestão de Projetos", "Análise de Risco"]
    },
    // 4. Daniel Rocha
    {
        id: 4,
        nome: "Daniel Rocha",
        foto: "src/assets/images/daniel-rocha.jpg",
        cargo: "Desenvolvedor Full Stack (Node.js/React)",
        empresa: "Startup X",
        skills: ["React", "Node.js", "MongoDB", "JavaScript", "Docker"]
    },
    // 5. Elisa Gomes
    {
        id: 5,
        nome: "Elisa Gomes",
        foto: "src/assets/images/elisa-gomes.jpg",
        cargo: "Especialista em Cibersegurança",
        empresa: "Governo Digital",
        skills: ["Ethical Hacking", "Cloud Security", "ISO 27001", "Pen Test"]
    },
    // 6. Felipe Souza
    {
        id: 6,
        nome: "Felipe Souza",
        foto: "src/assets/images/felipe-souza.jpg",
        cargo: "Consultor de Transformação Digital",
        empresa: "Global Consulting",
        skills: ["Estratégia Empresarial", "Metodologias Ágeis", "Inovação", "Scrum"]
    },
    // 7. Giovana Santos
    {
        id: 7,
        nome: "Giovana Santos",
        foto: "src/assets/images/giovana-santos.jpg",
        cargo: "Especialista em Marketing de Conteúdo (SEO)",
        empresa: "Content Hub",
        skills: ["SEO Avançado", "Inbound Marketing", "Copywriting", "Google Analytics"]
    },
    // 8. Henrique Lima
    {
        id: 8,
        nome: "Henrique Lima",
        foto: "src/assets/images/henrique-lima.jpg",
        cargo: "Desenvolvedor Front-End (Vue.js)",
        empresa: "Web Future",
        skills: ["Vue.js", "Tailwind CSS", "JavaScript", "Performance Web"]
    },
    // 9. Isabela Pereira
    {
        id: 9,
        nome: "Isabela Pereira",
        foto: "src/assets/images/isabela-pereira.jpg",
        cargo: "Gestora de Pessoas e Cultura (Remoto)",
        empresa: "Remote First Co.",
        skills: ["People Analytics", "Cultura Organizacional", "Trabalho Remoto", "Inteligência Emocional"]
    },
    // 10. João Victor Santos
    {
        id: 10,
        nome: "João Victor Santos",
        foto: "src/assets/images/joao-victor.jpg",
        cargo: "Engenheiro de Dados",
        empresa: "DataFlow",
        skills: ["ETL", "Apache Spark", "SQL", "Cloud Computing (Azure)"]
    }
];

/**
 * @param {Array} lista
 */
function renderizarCards(lista) {
    
    const cardsContainer = document.getElementById('cards-container');
    
    if (!cardsContainer) {
        console.error("Contêiner de cards não encontrado. Verifique se o ID 'cards-container' está correto no HTML.");
        return;
    }

    const cardsHTML = lista.map(profissional => {
        
        const skillsString = profissional.skills.slice(0, 4).join(', ');
        
        return `
            <div class="profile-card" data-id="${profissional.id}">
                <div class="avatar-wrapper">
                    <div class="avatar-circle">
                        <img src="${profissional.foto}" alt="foto de perfil de ${profissional.nome}" class="avatar-image">
                    </div>
                </div>
                <div class="card-content">
                    <h3>${profissional.nome.toUpperCase()}</h3>
                    <p>${profissional.empresa}</p>
                    <p>${profissional.cargo}</p>
                    <p>${skillsString}</p>
                    <p>Desenvolvimento Web / Tecnologia</p>
                    
                    <button class="message-button">Envie uma mensagem!</button>
                    <button class="recommend-button">Recomendar profissional</button> 
                </div>
            </div>
        `;
    }).join('');

    cardsContainer.innerHTML = cardsHTML;
}

const searchInput = document.getElementById('search-input');

if (searchInput) {
    searchInput.addEventListener('input', filtrarProfissionais);
}

function filtrarProfissionais() {
    const termo = searchInput.value.toLowerCase().trim();
    
    const profissionaisFiltrados = profissionais.filter(profissional => {
        const nomeDoProfissional = profissional.nome.toLowerCase();
        return nomeDoProfissional.includes(termo);
    });
    renderizarCards(profissionaisFiltrados);
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarCards(profissionais);
});


const quizData = [
    {
        question: "Qual tecnologia é essencial para a criação de sistemas de recomendação em redes profissionais?",
        options: ["Blockchain", "Machine Learning", "Computação Quântica", "Realidade Virtual"],
        answer: "Machine Learning"
    },
    {
        question: "Qual termo se refere à prática de integrar fatores ambientais, sociais e de governança na estratégia corporativa?",
        options: ["Scrum", "DevOps", "UX", "ESG"],
        answer: "ESG"
    },
    {
        question: "Em metodologias ágeis, quem é o responsável por garantir que o time siga as práticas do Scrum?",
        options: ["Product Owner", "Stakeholder", "Scrum Master", "UX Designer"],
        answer: "Scrum Master"
    },
    {
        question: "Qual das Soft Skills é mais valorizada para o trabalho remoto e resolução de novos problemas?",
        options: ["Datilografia", "Resiliência", "Foco em Hardware", "Conhecimento em COBOL"],
        answer: "Resiliência"
    }
];

let currentQuestionIndex = 0;
let score = 0;
const quizBox = document.getElementById('quiz-box');
const resultsBox = document.getElementById('quiz-results');
const startButton = document.getElementById('start-quiz-button');

if (startButton) {
    startButton.addEventListener('click', startQuiz);
}

function startQuiz() {
    startButton.style.display = 'none';
    currentQuestionIndex = 0;
    score = 0;
    resultsBox.style.display = 'none';
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        showResults();
        return;
    }

    const currentQuiz = quizData[currentQuestionIndex];
    
    quizBox.innerHTML = `
        <div class="quiz-question">
            <p><strong>Questão ${currentQuestionIndex + 1} de ${quizData.length}:</strong> ${currentQuiz.question}</p>
        </div>
        <div class="quiz-options">
            ${currentQuiz.options.map(option => `
                <button class="quiz-option-btn" onclick="checkAnswer('${option}')">${option}</button>
            `).join('')}
        </div>
    `;
}

function checkAnswer(selectedOption) {
    const currentQuiz = quizData[currentQuestionIndex];
    
    if (selectedOption === currentQuiz.answer) {
        score++;
        alert("Correto!");
    } else {
        alert(`Errado. A resposta correta era: ${currentQuiz.answer}`);
    }

    currentQuestionIndex++;
    displayQuestion();
}

function showResults() {
    quizBox.innerHTML = '';
    resultsBox.style.display = 'block';

    resultsBox.innerHTML = `
        <h3>Fim do Quiz!</h3>
        <p>Você acertou ${score} de ${quizData.length} perguntas.</p>
        <button onclick="startQuiz()">Tentar Novamente</button>
    `;
}

const loginButton = document.getElementById('login-button');
const loginModal = document.getElementById('login-modal');
const closeButton = document.querySelector('.close-button');
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');


const USER_CORRETO = 'adm';
const SENHA_CORRETA = '12345';


if (loginButton) {
    loginButton.addEventListener('click', () => {
        loginModal.style.display = 'block';
        loginForm.reset();
        loginMessage.textContent = ''; 
    });
}


if (closeButton) {
    closeButton.addEventListener('click', () => {
        loginModal.style.display = 'none';
    });
}


window.addEventListener('click', (event) => {
    if (event.target === loginModal) {
        loginModal.style.display = 'none';
    }
});


if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); 

        const usernameInput = document.getElementById('username').value.trim();
        const passwordInput = document.getElementById('password').value.trim();

        if (usernameInput === USER_CORRETO && passwordInput === SENHA_CORRETA) {
            
            alert(`Bem-vindo, ${usernameInput}! Login realizado com sucesso.`);
            loginModal.style.display = 'none'; // Fecha o modal
            
            loginButton.textContent = 'Olá, adm'; 
            loginButton.classList.add('logged-in');
            loginButton.disabled = true; 

        } else {
            loginMessage.textContent = 'Usuário ou senha incorretos.';
        }
    });
}