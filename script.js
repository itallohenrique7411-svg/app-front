const inputUpload = document.getElementById('photo')

inputUpload.addEventListener('change', function (evento) {
    const arquivo = evento.target.files[0]

    if (arquivo) {
        const nomeDaImagem = arquivo.name
        console.log(nomeDaImagem)
    } else {
        console.log("Nenhum arquivo selecionDO.")
    }
})

const nome = getElementById("name")

const btn = getElementById("btn")

btn.addEventListener("click", () => {
    console.log(nome.value)
})

//começar a digitar a funcão de enviar dados para api
async...