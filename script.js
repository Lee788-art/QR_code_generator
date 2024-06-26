let apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example"

let container = document.querySelector('.main-box')
let button = document.querySelector('.btn')
let input = document.querySelector('.inputs')
let qr = document.querySelector('.qr-img')

button.addEventListener('click', async () => {


    if (input.value.length>3) {
        let response = await fetch(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`)
        qr.style.background = `url(${response.url})`
        qr.style.height = '200px'
        qr.style.width = "200px"
    } else {
        input.classList.add('error')
        setTimeout(() => {
            input.classList.remove('error')
        }, 1000);
    }
})