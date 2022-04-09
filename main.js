console.log('Hello World!');
let num = document.getElementById('num')
let img = document.getElementById('img')
let nope;

function image(){
  if (nope>666666) {
    img.src='./img/one.png'
  }else if(nope>333333){
    img.src='./img/two.png'
  }else if (nope >0) {
    img.src = './img/three.png'
  }else if (nope ==0) {
    img.src = './img/four.png'
  }
}

function chake(){
  if (localStorage.getItem('nunu')) {
    nope=localStorage.getItem('nunu')
    num.innerText=nope
  } else{
    nope=1000000
    num.innerText=nope
  }
}
chake()
image()


img.addEventListener('click',()=>{
  if (nope>1) {
   nope = nope - 1
   localStorage.setItem('nunu', nope)
   num.innerText = nope; 
   img.style.animation='sake 0.14s 1';
   setTimeout(()=>{
    img.style.animation=''
   },140)
   image()

  } else {
    alert('Congratulations you are completely done your game!')
    image()
    nope =0
    localStorage.setItem('nunu', nope)
    num.innerText = nope;
  }
})
num.addEventListener('dblclick',()=>{
  localStorage.setItem('nunu',1000000)
  nope=localStorage.getItem('nunu')
  num.innerText = nope
  image()
})
