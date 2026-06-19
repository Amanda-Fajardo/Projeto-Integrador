const acoes = [
    {icone: "💡", titulo: 'Aproveite a Luz Natural', texto: 'Posicione postos de trabalho perto de janelas e mantenha persianas abertas durante o dia para diminuir o uso de lâmpadas.'},
    {icone: "🔌", titulo: 'Evite o Stand-by', texto: 'Equipamentos eletrônicos consomem energia mesmo sem uso direto. Tire carregadores e aparelhos da tomada ao final do expediente.'},
    {icone: "☀️", titulo: 'Apoie o Sistema Solar', texto: 'Estimule o debate sobre o aproveitamento das grandes áreas de telhado da indústria para instalação de placas solares.'},
    {icone: "🍃", titulo: 'Climatização Inteligente', texto: 'Mantenha portas e janelas bem fechadas enquanto o ar-condicionado estiver ligado para não forçar o motor.'},
    {icone: "💬", titulo: 'Discuta com a Equipe', texto: 'Troque ideias de eficiência energética em reuniões. Pequenas mudanças de rotina geram grandes economias de escala.'},
    {icone: "📈", titulo: 'Multiplique o Hábito', texto: 'Compartilhe os resultados de economia com seu setor. Ver a curva de consumo cair motiva a todos a continuar colaborando.'}
]

//Renderização dinâmica
const container = document.querySelector('#container-acoes')

for(let i = 0; i < acoes.length; i++) {
    const item = acoes[i]
    const div = document.createElement ('div')
    div.className = "acao-item"
    div.innerHTML = `
        <div class="acao-icone">${item.icone}</div>
        <h3 class="acao-titulo">${item.titulo}</h3>
        <p class="acao-texto">${item.texto}</div>
    `
    container.appendChild(div)
}

const form = document.getElementById("formulario-adesao");
const msg = document.getElementById("mensagem-retorno");

form.addEventListener("submit", () => {
    event.preventDefault()


    if(form.checkValidity()) {
        const nome = document.getElementById("nome").value
        msg .textContent = `✅ Sucesso, ${nome}! Adesão registrada.`
        msg.className = 'mensagem-retorno sucesso'
        form.reset()
    } else{
        msg.textContent = '❌ Preencha os campos corretamente.';
        msg.className = 'mensagem-retorno erro';
        msg.style.display = 'block'
    }
})