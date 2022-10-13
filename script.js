let message = document.querySelector('#message')
let rdbLeft = document.querySelector('#rdb-left')
let rdbRight = document.querySelector('#rdb-right')
let rdbCenter = document.querySelector('#rdb-center')
let rdbs = document.querySelectorAll('[name="rdb-align"]')
let selectFont = document.querySelector('#font-fam')
let selectSize = document.querySelector('#font-siz')
let printBtn = document.querySelector('#print-send')
let chkBold = document.querySelector('#bold')
let chkItalic = document.querySelector('#italic')
let chkCutPaper = document.querySelector('#cut')

printBtn.addEventListener('click', () => {
    console.log(chkBold.value)
    console.log(chkBold.checked)

    let args = JSON.stringify({ tipo: 5, modelo: '', conexao: '', parametro: 0 })
    impressoraTermica(Termica.AbreConexaoImpressora(args))

    args = JSON.stringify({ dados: message.value, 
                            posicao: [...rdbs].findIndex((e) => e.checked), 
                            stilo: getStiloValue(), 
                            tamanho: selectSize.value })
    impressoraTermica(Termica.ImpressaoTexto(args))
    
    if (chkCutPaper.checked) {
        impressoraTermica(Termica.Corte(10))
    }

    impressoraTermica(Termica.FechaConexaoImpressora())
})

let impressoraTermica = (fn) => {
    result = fn
    resultJson = JSON.parse(result)
    if (resultJson.callResult === 'success') {
        if (resultJson.callReturn !== 0) {
            alert(`Retorno: ${resultJson.callReturn}`)
        } else return
    } else {
        alert(`Failed\nCall Result Code: ${resultJson.callResultCode}\nCall Return: ${resultJson.callReturn}`)
    }
}

let getStiloValue = () => {
    let stilo = selectFont.value
    if (chkBold.checked) stilo += chkBold.value
    if (chkItalic.checked) stilo += chkItalic.value
    return stilo
}