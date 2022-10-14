let txt = document.querySelector('#retsat')

let generateSession = () => Math.floor((Math.random() * 1000000) + 1)

let consultarSat = () => {
    let args = JSON.stringify({ numSessao : generateSession() })
    let ret = callWebView(Sat.ConsultarSAT(args))
    txt.value += `\n${ret}`
}

let ativarSat = () => {
    let args = JSON.stringify({ numSessao  : generateSession(),
                                subComando : 2,
                                codAtivacao: document.querySelector('#cod-ativacao').value,
                                cnpj       : '14200166000166',
                                cUF        : 15 })
    let ret = callWebView(Sat.AtivarSAT(args))
    txt.value += `\n${ret}`
}

let associarSat = () => {
    let args = JSON.stringify({ numSessao    : generateSession(),
                                codAtivacao  : document.querySelector('#cod-ativacao').value,
                                cnpjSh       : '16716114000172',
                                assinaturaAC : 'SGR-SAT SISTEMA DE GESTAO E RETAGUARDA DO SAT' })
    let ret = callWebView(Sat.AssociarAssinatura(args))
    txt.value += `\n${ret}`
}

let consultarStatusOperacional = () => {
    let args = JSON.stringify({ numSessao  : generateSession(),
                                codAtivacao: document.querySelector('#cod-ativacao').value })
    let ret = callWebView(Sat.consultarStatusOperacional(args))
    txt.value += `\n${ret}`
}