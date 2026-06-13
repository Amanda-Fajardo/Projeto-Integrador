const acoes = [
    {icone: "🚰", texto: 'Feche bem a torneira quando não estiver usando'},
    {icone: "🔔", texto: 'Avise logo se perceber um vazamento'},
    {icone: "♻️", texto: 'Reutilize água de limpeza quando possível'},
    {icone: "🥤", texto: 'Use copo ou garrafa reutilizável'},
    {icone: "💬", texto: 'Conte para seus colegas sobre essas dicas'},
    {icone: "🌍", texto: 'Multiplique - cada pessoa influencia outras 5'}
]

//Renderização dinâmica
const container = document.querySelector('#container-acoes')

for(let i = 0; i < acoes.length; i++) {
    const item = acoes[i]
    const div = document.createElement ('div')
    div.className = "acao-item"
    div.innerHTML = `
        <div class="acao-icone">${item.icone}</div>
        <p class="acao-texto">${item.texto}</div>
    `
    container.appendChild(div)
}

const nav = document.querySelector('.menu-navegacao')

window.addEventListener('scroll', () => {
    if(window.scrollY > 10){
        nav.style.opacity = 0.5
    } else{
        nav.style.opacity = 1
    }
})