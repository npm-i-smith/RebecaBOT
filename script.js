$(document).ready(function() {
  $(window).scroll(function() {
    if(this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if(this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  })

  $('.scroll-up-btn').click(function() {
    $('html').animate({scrollTop: 0});
  })
  
  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  })

  var typed = new Typed('.typing', {
    strings: [
      "simples",
      "poderosa",
      "facil de usar",
      "moderavel",
      "bem desenvolvida",
	  "opção ideal",
	  "multilinguagens",
    ],
    typeSpeed: 100,
    backSpeed: 10,
    loop: true,
  })


  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items: 1,
        nav: false
      },
      600:{
        items: 2,
        nav: false
      },
      1000:{
        items: 3,
        nav: false
      }
    }
  });

})



document.addEventListener('click', (e) => {
    const click_on = e.target; 
    let commands_diversao = document.querySelector('.container_diversao');
	let comandos_moderacao = document.querySelector('.container_moderacao');
	let comandos_informacao = document.querySelector('.container_informacao');
	let comandos_vip = document.querySelector('.container_vip');
    let comandos_editaveis = document.querySelector('.container_editaveis');
	let comandos_prefixo = document.querySelector('.container_prefixo');
	let commands_card_diverao = document.querySelector('.diversao')
	let commands_card_moderacao = document.querySelector('.moderacao')
	let commands_card_informacao = document.querySelector('.informacao')
	let commands_card_vip = document.querySelector('.vip')
	let commands_card_editaveis = document.querySelector('.editaveis')
	let commands_card_prefixo = document.querySelector('.prefixo')
    
    if(click_on.classList.contains('diversao')) {
		commands_diversao.classList.toggle("on")
		commands_card_diverao.style.display = 'none'
		commands_card_moderacao.style.display = 'none'
		commands_card_informacao.style.display = 'none'
		commands_card_vip.style.display = 'none'
		commands_card_editaveis.style.display = 'none'
		commands_card_prefixo.style.display = 'none'
    }
	
	if(click_on.classList.contains('close_commands')) {
		commands_diversao.classList.remove("on")
		comandos_moderacao.classList.remove("on")
		comandos_informacao.classList.remove("on")
		comandos_vip.classList.remove("on")
		comandos_editaveis.classList.remove("on")
		comandos_prefixo.classList.remove("on")
		commands_card_diverao.style.display = 'block'
		commands_card_moderacao.style.display = 'block'
		commands_card_informacao.style.display = 'block'
		commands_card_vip.style.display = 'block'
		commands_card_editaveis.style.display = 'block'
		commands_card_prefixo.style.display = 'block'
    }
	
	if(click_on.classList.contains('moderacao')) {
		comandos_moderacao.classList.toggle("on")
		commands_card_diverao.style.display = 'none'
		commands_card_moderacao.style.display = 'none'
		commands_card_informacao.style.display = 'none'
		commands_card_vip.style.display = 'none'
		commands_card_editaveis.style.display = 'none'
		commands_card_prefixo.style.display = 'none'
	}
	
	if(click_on.classList.contains('informacao')) {
		comandos_informacao.classList.toggle("on")
		commands_card_diverao.style.display = 'none'
		commands_card_moderacao.style.display = 'none'
		commands_card_informacao.style.display = 'none'
		commands_card_vip.style.display = 'none'
		commands_card_editaveis.style.display = 'none'
		commands_card_prefixo.style.display = 'none'
	}
	
	if(click_on.classList.contains('vip')) {
		comandos_vip.classList.toggle("on")
		commands_card_diverao.style.display = 'none'
		commands_card_moderacao.style.display = 'none'
		commands_card_informacao.style.display = 'none'
		commands_card_vip.style.display = 'none'
		commands_card_editaveis.style.display = 'none'
		commands_card_prefixo.style.display = 'none'
	}
	
	if(click_on.classList.contains('editaveis')) {
		comandos_editaveis.classList.toggle("on")
		commands_card_diverao.style.display = 'none'
		commands_card_moderacao.style.display = 'none'
		commands_card_informacao.style.display = 'none'
		commands_card_vip.style.display = 'none'
		commands_card_editaveis.style.display = 'none'
		commands_card_prefixo.style.display = 'none'
	}
	
	if(click_on.classList.contains('prefixo')) {
		comandos_prefixo.classList.toggle("on")
		commands_card_diverao.style.display = 'none'
		commands_card_moderacao.style.display = 'none'
		commands_card_informacao.style.display = 'none'
		commands_card_vip.style.display = 'none'
		commands_card_editaveis.style.display = 'none'
		commands_card_prefixo.style.display = 'none'
	}
 
})