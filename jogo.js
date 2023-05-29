const btn_play = document.getElementById('btn_play')
const principal = document.getElementById('principal')
btn_play.addEventListener('click' , ()=>{
    btn_play.style.display='none'

    const txt_player1 = document.createElement('input' , 'text')
    txt_player1.setAttribute('id' , 'player1')
    txt_player1.setAttribute('class' , 'player')
    txt_player1.setAttribute('placeholder' , 'Player1')
    principal.appendChild(txt_player1)

    const btn_enviar = document.createElement('button')
    btn_enviar.setAttribute('id' , 'btn_enviar1')
    btn_enviar.setAttribute('class' , 'button_go')
    btn_enviar.setAttribute('onclick' , 'enviar1()')
    principal.appendChild(btn_enviar)
    btn_enviar.innerHTML= 'go go'
})




function enviar1(){
    const player1 = document.getElementById('player1')
    if(player1.value.length == '0'){
        alert('[ERRO] coloque pelo menos 1 letra no nome')
    }else{
    player1.style.display= 'none'
    btn_enviar1.style.display= 'none'
    console.log(`player1: ${player1.value}`)

    const txt_player2 = document.createElement('input' , 'text')
    txt_player2.setAttribute('id' , 'player2')
    txt_player2.setAttribute('class' , 'player')
    txt_player2.setAttribute('placeholder' , 'Player2')
    principal.appendChild(txt_player2)

    const btn_enviar2 = document.createElement('button')
    btn_enviar2.setAttribute('id' , 'btn_enviar2')
    btn_enviar2.setAttribute('class' , 'button_go')
    btn_enviar2.setAttribute('onclick' , 'enviar2()')
    btn_enviar2.innerHTML= 'go go'
    principal.appendChild(btn_enviar2)
    }
}

function enviar2(){
    const player2 =  document.getElementById('player2')
    const img = document.getElementById('img')
    if(player2.value.length == 0){
        alert('[ERRO] coloque pelo menos 1 letra no nome')
    }else if(player1.value == player2.value){
        alert('[ERRO] o player1 não pode ter o msm nome do player2')
    }
    else{
        const secundaria = document.getElementById('secundaria')
        console.log('player2: ' + player2.value)
        btn_enviar2.style.display= 'none'
        player2.style.display= 'none'
        principal.style.display= 'none'
        img.style.display='none'
        secundaria.style.display= 'block'
    }

}

const tela_poder =  document.getElementById('tela_poder')
const tela_poder2 =  document.getElementById('tela_poder2')
var elemento_select = 0
const elementos = [
()=>{
    tela_poder.classList.add('addfogo')
    tela_poder.classList.remove('addagua')
    tela_poder.classList.remove('addterra')
    tela_poder.classList.remove('addrelampago')
    tela_poder.classList.remove('addvento')
    tela_poder2.innerHTML= `${player1.value} escolheu: fogo 🔥`
    elemento_select = 'fogo'
},
()=>{
    tela_poder.classList.add('addagua')
    tela_poder.classList.remove('addfogo')
    tela_poder.classList.remove('addterra')
    tela_poder.classList.remove('addrelampago')
    tela_poder.classList.remove('addvento')
    tela_poder2.innerHTML= `${player1.value} escolheu: agua 🌊`
    elemento_select = 'agua'
},
()=>{
    tela_poder.classList.add('addterra')
    tela_poder.classList.remove('addagua')
    tela_poder.classList.remove('addfogo')
    tela_poder.classList.remove('addrelampago')
    tela_poder.classList.remove('addvento')
    tela_poder2.innerHTML= `${player1.value} escolheu: terra ⛰️`
    elemento_select = 'terra'
},
()=>{
    tela_poder.classList.add('addvento')
    tela_poder.classList.remove('addagua')
    tela_poder.classList.remove('addterra')
    tela_poder.classList.remove('addrelampago')
    tela_poder.classList.remove('addfogo')
    tela_poder2.innerHTML= `${player1.value} escolheu: vento 💨`
    elemento_select= 'vento'
},
()=>{
    tela_poder.classList.add('addrelampago')
    tela_poder.classList.remove('addagua')
    tela_poder.classList.remove('addterra')
    tela_poder.classList.remove('addfogo')
    tela_poder.classList.remove('addvento')
    tela_poder2.innerHTML= `${player1.value} escolheu: relampago ⚡`
    elemento_select = 'relampago'
}
]

const fogo = document.getElementById('fogo')
const agua = document.getElementById('agua')
const terra = document.getElementById('terra')
const vento = document.getElementById('vento')
const relampago = document.getElementById('relampago')
fogo.addEventListener('click' , ()=>{elementos[0]()})
agua.addEventListener('click' , ()=>{elementos[1]()})
terra.addEventListener('click' , ()=>{elementos[2]()})
vento.addEventListener('click' , ()=>{elementos[3]()})
relampago.addEventListener('click' , ()=>{elementos[4]()})

const btn_proximo = document.getElementById('btn_proximo')
const terceiro = document.getElementById('terceiro')
btn_proximo.addEventListener('click' , ()=>{
    if(elemento_select == ''){
        alert('coloque algum elemento')
    }else{
    console.log(player1.value + ' escolheu o elemento ' + elemento_select )
    secundaria.style.display= 'none'
    terceiro.style.display= 'block'
    }
   
})
    const fogo2 = document.getElementById('fogo2')
    const agua2 = document.getElementById('agua2')
    const terra2 = document.getElementById('terra2')
    const vento2 = document.getElementById('vento2')
    const relampago2 = document.getElementById('relampago2')
    const tela_poder1 = document.getElementById('tela_poder1')
    const tela_31 = document.getElementById('tela_31')
    const tela_poder21 = document.getElementById('tela_poder2-1') 
    var elemento_select2 = 0

const elemento2 = [
()=>{
    tela_poder1.classList.add('addfogo')
    tela_poder1.classList.remove('addagua')
    tela_poder1.classList.remove('addterra')
    tela_poder1.classList.remove('addrelampago')
    tela_poder1.classList.remove('addvento')
    tela_poder21.innerHTML= `${player2.value} escolheu: fogo 🔥`
    elemento_select2 = 'fogo'
},
()=>{
    tela_poder1.classList.add('addagua')
    tela_poder1.classList.remove('addfogo')
    tela_poder1.classList.remove('addterra')
    tela_poder1.classList.remove('addrelampago')
    tela_poder1.classList.remove('addvento')
    tela_poder21.innerHTML= `${player2.value} escolheu: agua 🌊` 
    elemento_select2 = 'agua'
},
()=>{
tela_poder1.classList.add('addterra')
tela_poder1.classList.remove('addfogo')
tela_poder1.classList.remove('addagua')
tela_poder1.classList.remove('addrelampago')
tela_poder1.classList.remove('addvento')
tela_poder21.innerHTML= `${player2.value} escolheu: terra ⛰️` 
elemento_select2 = 'terra'
},
()=>{
tela_poder1.classList.add('addrelampago')
tela_poder1.classList.remove('addfogo')
tela_poder1.classList.remove('addagua')
tela_poder1.classList.remove('addterra')
tela_poder1.classList.remove('addvento')
tela_poder21.innerHTML= `${player2.value} escolheu: relmapago ⚡` 
elemento_select2 = 'relampago'
},
()=>{
tela_poder1.classList.add('addvento')
tela_poder1.classList.remove('addfogo')
tela_poder1.classList.remove('addagua')
tela_poder1.classList.remove('addterra')
tela_poder1.classList.remove('addrelampago')
tela_poder21.innerHTML= `${player2.value} escolheu: vento 💨 ` 
elemento_select2 = 'vento'
}



]
fogo2.addEventListener('click' , ()=>{elemento2[0]()})
agua2.addEventListener('click' , ()=>{elemento2[1]()})
terra2.addEventListener('click' , ()=>{elemento2[2]()})
relampago2.addEventListener('click' , ()=>{elemento2[3]()})
vento2.addEventListener('click' , ()=>{elemento2[4]()})

btn_proximo2 = document.getElementById('btn_proximo2')
btn_proximo2.addEventListener('click' , ()=>{
    if(elemento_select2 == ''){
        alert('coloque algum elemento pfvr')
    }else{
    console.log(`${player2.value} escolheu o elemeto: ${elemento_select2}`)
    terceiro.style.display= 'none'
    const resu = document.getElementById('resultado')
    resu.style.display= 'block'
    const txt_final = document.getElementById('txt_final')
    const txt_final2 = document.getElementById('txt_final2')
    }
// 🔥 🌊 ⛰️ ⚡ 💨

    if(elemento_select == 'agua' && elemento_select2 == 'fogo'){
    txt_final.innerHTML= `${player1.value} ganhou`
    txt_final2.innerHTML= `agua 🌊 ganha do fogo 🔥`
    }
    if(elemento_select == 'relampago' && elemento_select2 == 'terra'){
        txt_final.innerHTML= `${player1.value} ganhou`
        txt_final2.innerHTML= `relampago ⚡ ganha da terra ⛰️`
        }
    if(elemento_select == 'vento' && elemento_select2 == 'relampago'){
        txt_final.innerHTML= `${player1.value} ganhou`
        txt_final2.innerHTML= `vento 💨 ganha do relampago ⚡`
        }
    if(elemento_select == 'terra' && elemento_select2 == 'agua'){
        txt_final.innerHTML= `${player1.value} ganhou`
        txt_final2.innerHTML= `terra ⛰️ ganha agua 🌊`
        }
    if(elemento_select == 'fogo' && elemento_select2 == 'vento'){
        txt_final.innerHTML= `${player1.value} ganhou`
        txt_final2.innerHTML= `fogo 🔥 ganha do vento 💨` 
    }
    if(elemento_select2 == 'fogo' && elemento_select == 'fogo'){
        txt_final.innerHTML= `empate`
        txt_final2.innerHTML= `fogo 🔥 empata com fogo 🔥 `
    }
    if(elemento_select2 == 'fogo' && elemento_select == 'terra'){
        txt_final.innerHTML= `empate`
        txt_final2.innerHTML= `fogo 🔥 empata com terra ⛰️`
    }
   if(elemento_select2 == 'fogo' && elemento_select == 'relampago'){
        txt_final.innerHTML= `empate`
        txt_final2.innerHTML= `fogo 🔥 empata com relampago ⚡`
    }
    if(elemento_select2 == 'fogo' && elemento_select == 'vento'){
        txt_final.innerHTML= `${player2.value} ganhou`
        txt_final2.innerHTML= `fogo 🔥 ganha do vento 💨`
    }
    if(elemento_select2 == 'fogo' && elemento_select2 == 'agua'){
        txt_final.innerHTML= `${player1.value} ganhou`
        txt_final2.innerHTML= `agua 🌊 ganha do fogo 🔥`
    }
    if(elemento_select2 == 'agua' && elemento_select == 'fogo'){
        txt_final.innerHTML= `${player2.value} ganhou`
        txt_final2.innerHTML= `agua 🌊 ganha do fogo 🔥`
    }
    if(elemento_select2 == 'agua' && elemento_select == 'vento'){
        txt_final.innerHTML= `empate`
        txt_final2.innerHTML= `agua 🌊 empata com vento 💨`
    }
    if(elemento_select2 == 'agua' && elemento_select == 'relampago'){
        txt_final.innerHTML= `empate`
        txt_final2.innerHTML= `agua 🌊 empata com relampago ⚡`
    }
    if(elemento_select2 == 'agua' && elemento_select == 'agua'){
        txt_final.innerHTML= `empate`
        txt_final2.innerHTML= `agua 🌊 empata com agua 🌊`
    }
    if(elemento_select2 == 'terra' && elemento_select == 'agua'){
        txt_final.innerHTML= `${player2.value} ganhou`
        txt_final2.innerHTML= `terra ⛰️ ganha da agua 🌊`
    }
    if(elemento_select2 == 'terra' && elemento_select == 'fogo'){
        txt_final.innerHTML= `empate`
        txt_final2.innerHTML= `terra ⛰️ empata com fogo 🔥`
    }
    if(elemento_select2 == 'terra' && elemento_select == 'vento'){
        txt_final.innerHTML= `empate`
        txt_final2.innerHTML= `terra ⛰️ empata com vento 💨`
    }
    if(elemento_select2 == 'terra' && elemento_select == 'terra'){
        txt_final.innerHTML= `empate`
        txt_final2.innerHTML= `terra ⛰️  empata com terra ⛰️`
    }
    if(elemento_select2 == 'relampago' && elemento_select == 'terra'){
        txt_final.innerHTML= `${player2.value} venceu`
        txt_final2.innerHTML= `relampago ⚡ vence da terra ⛰️`
    }
    if(elemento_select2 == 'relampago' && elemento_select == 'relampago'){
        txt_final.innerHTML= `empate`
        txt_final2.innerHTML= `relampago ⚡ empata com o relampago ⚡`
    }
    if(elemento_select2 == 'relampago' && elemento_select == 'fogo'){
        txt_final.innerHTML= `empate`
        txt_final2.innerHTML= `relampago ⚡ empata com o fogo 🔥`
    }
    if(elemento_select2 == 'relampago' && elemento_select == 'agua'){
        txt_final.innerHTML= `empate`
        txt_final2.innerHTML= `relampago ⚡ empata com o agua 🌊`
    }
    if(elemento_select2 == 'vento' && elemento_select == 'relampago'){
        txt_final.innerHTML= `${player2.value} venceu`
        txt_final2.innerHTML= `vento 💨 vence do relampago ⚡`
    }
    if(elemento_select2 == 'vento' && elemento_select == 'agua'){
        txt_final.innerHTML= `empate`
        txt_final2.innerHTML= `vento 💨 empata com a agua 🌊`
    }
    if(elemento_select2 == 'vento' && elemento_select == 'terra'){
        txt_final.innerHTML= `empate`
        txt_final2.innerHTML= `vento 💨 empata com terra ⛰️`
    }
    if(elemento_select2 == 'vento' && elemento_select == 'vento'){
        txt_final.innerHTML= `empate`
        txt_final2.innerHTML= `vento 💨 empata com vento 💨`
    }
})
