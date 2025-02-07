/*=============== MOSTRAR MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MOSTRAR MENU =====*/
/* Verifica se a constante existe */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu') // Adiciona a classe que exibe o menu
    })
}

/*===== ESCONDER MENU =====*/
/* Verifica se a constante existe */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu') // Remove a classe que exibe o menu
    })
}

/*=============== REMOVER MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos em cada item do menu, removemos a classe 'show-menu'
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ALTERAR O FUNDO DO CABEÇALHO ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // Quando o scroll for maior que 50 pixels na altura da tela, adiciona a classe 'scroll-header' ao cabeçalho
    if(this.scrollY >= 50) header.classList.add('scroll-header'); 
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== MOSTRAR O BOTÃO DE VOLTAR AO TOPO ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // Quando o scroll for maior que 200 pixels na altura da tela, adiciona a classe 'show-scroll' ao botão de voltar ao topo
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); 
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SEÇÃO ATIVA NO MENU AO ROLAR A PÁGINA ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight // Obtém a altura da seção
        const sectionTop = current.offsetTop - 50; // Obtém a posição da seção em relação ao topo da página
        sectionId = current.getAttribute('id') // Obtém o ID da seção

        // Se o scroll estiver dentro da seção, adiciona a classe 'active-link' ao link correspondente do menu
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== ANIMAÇÃO DE APARECIMENTO AO ROLAR A PÁGINA ===============*/
const sr = ScrollReveal({
    distance: '60px',  // Distância do efeito de animação
    duration: 2500,    // Duração da animação em milissegundos
    delay: 400,        // Tempo de espera antes da animação começar
    // reset: true     // Se ativado, a animação se repetirá ao rolar a página para cima
})

// Aplica a animação de revelação a elementos específicos da página
sr.reveal(`.home__header, .section__title`,{delay: 600})
sr.reveal(`.home__footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__data`)
