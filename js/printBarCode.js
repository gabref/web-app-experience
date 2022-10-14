let messageb = document.querySelector('#messageb')
// let rdbs = document.querySelectorAll('[name="rdb-align"]')
let printBtnBarCode = document.querySelector('#printb-send')
let chkCutPaperBarCode = document.querySelector('#cut')
let barSize = document.querySelector('#bar-size')

printBtnBarCode.addEventListener('click', () => {

    let args = JSON.stringify({ tipo: 5, modelo: '', conexao: '', parametro: 0 })
    callWebView(Termica.AbreConexaoImpressora(args))

    args = JSON.stringify({ dados: messageb.value, 
                            tamanho: barSize.value, 
                            nivelCorrecao: 2 })
    callWebView(Termica.ImpressaoQRCode(args))
    
    if (chkCutPaperBarCode.checked) {
        callWebView(Termica.Corte(10))
    }

    callWebView(Termica.FechaConexaoImpressora())
})