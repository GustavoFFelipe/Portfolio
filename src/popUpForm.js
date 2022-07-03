

// -------contact button -------------------------

function initialPopUp(popId) {
	const pop =  document.getElementById(popId);
	pop.classList.add('show');
	pop.addEventListener('click', (e) => {
	  if(e.target.id == popId || e.target.id == 'popup-close'){
		pop.classList.remove('show');
	  }
	})
  }
  
  const popBtn = document.getElementById('main-btn');
  popBtn.addEventListener('click', () => initialPopUp('popup-container'));


  //--------------------------------------------------
  function initialPopUpBottom(popId) {
    const pop =  document.getElementById(popId);
    pop.classList.add('show');
    pop.addEventListener('click', (e) => {
      if(e.target.id == popId || e.target.id == 'popup-close'){
      pop.classList.remove('show');
      }
    })
    }
    
    const popBtnBottom= document.getElementById('btn-contact');
    popBtnBottom.addEventListener('click', () => initialPopUp('popup-container'));