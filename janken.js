function pilihanKomputer() { 
const k = Math.random()

if (k <= 0.33) return 'kertas'
if ( k > 0.33 && k <= 0,67) return 'gunting'
return 'batu'
}

function getHasil (k,p) {

if (p === k) return 'SERI!!'
if (p === 'kertas') return ( k == 'batu') ? 'MENANG!' : 'KALAH!'
if (p === 'gunting') return (k == 'kertas') ? 'MENANG!' : 'KALAH!'
if (p === 'batu') return (k == 'gunting') ? 'MENANG!' : 'KALAH!'

}

function putarGambar() {
    const imgKomputer = document.querySelector('.img-komputer')
    const gambar = ['batu','gunting','kertas']
    let i = 0
    const waktuMulai = new Date().getTime()
    setInterval(function() {
        if( new Date().getTime() - waktuMulai > 1000) {
            clearInterval
            return
        }
        imgKomputer.setAttribute('src', 'img/' + gambar[i++] + '.png')
        if( i == gambar.length) i = 0
    }, 100)
}

const pilihan = document.querySelectorAll('li img')
pilihan.forEach (function(pil) {
    pil.addEventListener('click', function() {
            const komputer = pilihanKomputer()
    const player = pil.className
    const hasil = getHasil(komputer, player)

    putarGambar()

    setTimeout (function() {
        const imgKomputer = document.querySelector('.img-komputer')
        imgKomputer.setAttribute('src', 'img/'+ komputer +'.png')
    
        const info = document.querySelector('.info')
        info.innerHTML = hasil
    }, 1000)

    })
}) 

// const tambahScore = document.createElement('p')
// const noScore = document.createTextNode(for i = 1; i <= 10; i++)

// const scoreP = document.querySelector('.mc')
// if (getHasil == 'MENANG!') {
//     noScore[i]
// } else if(getHasil == 'KALAH!') {
//     noScore[i]
// }


// const batu = document.querySelector('.batu')
// batu.addEventListener('click', function() {
//     const komputer = pilihanKomputer()
//     const player = batu.className
//     const hasil = getHasil(komputer, player)

//     const imgKomputer = document.querySelector('.img-komputer')
//     imgKomputer.setAttribute('src', 'img/'+ komputer +'.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil
// })
// const gunting = document.querySelector('.gunting')
// gunting.addEventListener('click', function() {
//     const komputer = pilihanKomputer()
//     const player = gunting.className
//     const hasil = getHasil(komputer, player)

//     const imgKomputer = document.querySelector('.img-komputer')
//     imgKomputer.setAttribute('src', 'img/'+ komputer +'.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil
// })
// const kertas = document.querySelector('.kertas')
// kertas.addEventListener('click', function() {
//     const komputer = pilihanKomputer()
//     const player = kertas.className
//     const hasil = getHasil(komputer, player)

//     const imgKomputer = document.querySelector('.img-komputer')
//     imgKomputer.setAttribute('src', 'img/'+ komputer +'.png')

//     const info = document.querySelector('.info')
//     info.innerHTML = hasil
// })