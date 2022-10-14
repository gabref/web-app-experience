let cards = document.querySelectorAll('.card');
let tabscontent = document.querySelectorAll('.tabcontent')

cards.forEach(card => {
    card.addEventListener('click', function() {
        // set all tabs equal
        cards.forEach(card => card.classList.add('card-subtle'))
        // fadesout content
        tabscontent.forEach(tabcontent => tabcontent.style.display = 'none')
        // set as active the tab
        this.classList.remove('card-subtle')
        // set as visible the content
        document.querySelector(`.${this.id}`).style.display = 'flex'
    })
});

document.querySelector('.default-tab').click()

let callWebView = (fn) => {
    result = fn
    resultJson = JSON.parse(result)
    if (resultJson.callResult === 'success') {
        if (resultJson.callReturn !== 0) {
            alert(`Retorno: ${resultJson.callReturn}`)
        } else return resultJson.callReturn
    } else {
        alert(`Failed\nCall Result Code: ${resultJson.callResultCode}\nCall Return: ${resultJson.callReturn}`)
    }
}