

function eventListener(){
  window.addEventListener('scroll', fadeEffectOut)
  window.addEventListener('scroll', fadeEffectIn)
}eventListener()

// Fade effect 
//Banner fadeOut
function fadeEffectOut(){

  let distance = document.getElementById('perfil-img').getBoundingClientRect().top 
  let img =  document.getElementById('phrase')
  if(distance < 100){
    img.style.opacity = 1; 
    img.style.transition = '.1s easeOut'
  } if(distance < 50 && distance > 10){
    img.style.opacity = .8;
    img.style.transition = '.1s easeOut'
  } 
if(distance < 10 && distance > -40){
  img.style.opacity = .7;
  img.style.transition = '.1s easeOut'
}if(distance < -40 && distance > -60){
    img.style.opacity = .6
    img.style.transition = '.1s easeOut'
  }
  if(distance < -70 && distance > -100){
    img.style.opacity = .5
    img.style.transition = '.1s easeOut'
  }
  if(distance < -100 && distance > -150){
    img.style.opacity = .4
    img.style.transition = '.1s easeOut'
  }
  if(distance < -150 && distance > -200){
    img.style.opacity = .3
    img.style.transition = '.1s easeOut'
  }
  if(distance < -200 && distance > -250){
    img.style.opacity = .2
    img.style.transition = '.1s easeOut'
  }
  if(distance < -250 && distance > -300){
    img.style.opacity = .1
    img.style.transition = '.1s easeOut'
  }  if(distance < -300 && distance > -350){
    img.style.opacity = .0
    img.style.transition = '.1s easeOut'
  }
  if(distance < -350 && distance > -400000){
    img.style.opacity = .0
    img.style.transition = '.1s easeOut'
  }
}

//Study Cases fadeIn
function fadeEffectIn(){

  let distance = document.getElementById('study-case').getBoundingClientRect().top 
  let fade = document.getElementById('grid-section')
  if(distance < 500){
    fade.style.opacity = 0; 
  } if(distance < 350 && distance > 250){
    fade.style.opacity = .1;
  } if(distance < 250 && distance > 200){
  fade.style.opacity = .2
  }
  if(distance < 200 && distance > 150){
    fade.style.opacity = .5
  }
  if(distance < 150 && distance > 100){
    fade.style.opacity = 1
  }
  if(distance < 100 && distance > -150000){
    fade.style.opacity = 1
  }
}


