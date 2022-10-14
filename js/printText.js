let message = document.querySelector('#message')
let rdbs = document.querySelectorAll('[name="rdb-align"]')
let selectFont = document.querySelector('#font-fam')
let selectSize = document.querySelector('#font-siz')
let printBtn = document.querySelector('#print-send')
let chkBold = document.querySelector('#bold')
let chkItalic = document.querySelector('#italic')
let chkCutPaper = document.querySelector('#cut')

printBtn.addEventListener('click', () => {

    let args = JSON.stringify({ tipo: 5, modelo: '', conexao: '', parametro: 0 })
    callWebView(Termica.AbreConexaoImpressora(args))

    args = JSON.stringify({ dados: message.value, 
                            posicao: [...rdbs].findIndex((e) => e.checked), 
                            stilo: getStiloValue(), 
                            tamanho: selectSize.value })
    callWebView(Termica.ImpressaoTexto(args))
    
    if (chkCutPaper.checked) {
        callWebView(Termica.Corte(10))
    }

    callWebView(Termica.FechaConexaoImpressora())
})

let getStiloValue = () => {
    let stilo = selectFont.value
    if (chkBold.checked) stilo += chkBold.value
    if (chkItalic.checked) stilo += chkItalic.value
    return stilo
}