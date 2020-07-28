const modeCheck = document.querySelectorAll('button')
const dayMode = document.querySelector('.check-day')
const headerColor = document.querySelector('header')
const bodyColor = document.querySelector('body')
const nightMode = document.querySelector('#night')
const paraColor = document.getElementsByTagName('p')




const yellowHeading = document.querySelector('h1')
const codePara = document.getElementsByTagName('h2')
function switchColorDark() {
    dayMode.style.display = 'block'
    nightMode.style.display = 'none'
    bodyColor.style.backgroundColor = 'black'
    headerColor.style.backgroundColor = 'black'
    
    for (let i = 0; i < paraColor.length; i++) {
        paraColor[i].style.color = 'white'
        console.log(paraColor[i])
    }
    for (let j = 0; j < codePara.length; j++) {
        codePara[j].style.color = 'yellow'
    }

}

function switchColorLight() {
    dayMode.style.display = 'none'
    nightMode.style.display = 'block'
    bodyColor.style.backgroundColor = 'white'
    headerColor.style.backgroundColor = 'white'
    
    for (let i = 0; i < paraColor.length; i++) {
        paraColor[i].style.color = 'black'
        console.log(paraColor[i])
    }
    for (let j = 0; j < codePara.length; j++) {
        codePara[j].style.color = 'red'
    }
}