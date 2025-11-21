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