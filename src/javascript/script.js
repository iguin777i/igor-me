$(document).ready(function () {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-xmark');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.0');
        }

        sections.each(function (i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#banner', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish-1', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    ScrollReveal().reveal('.dish-2', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });
    ScrollReveal().reveal('.dish-3', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })
});


const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const content = accordion.nextElementSibling;
        const icon = accordion.querySelector('.icon');
        const title = accordion.querySelector('.titulo-ac'); // Seleciona o título dentro do acordeão

        if (content.style.maxHeight) {
            // Fechar o conteúdo
            content.style.maxHeight = null;
            content.style.opacity = 0;
            icon.textContent = '+';
            title.style.color = ''; // Restaura a cor padrão
        } else {
            // Fechar todos os outros conteúdos
            document.querySelectorAll('.accordion-content').forEach(c => {
                c.style.maxHeight = null;
                c.style.opacity = 0;
            });

            document.querySelectorAll('.icon').forEach(i => i.textContent = '+');
            // Restaurar a cor dos outros títulos
            document.querySelectorAll('.accordion .title').forEach(t => t.style.color = '');

            // Abrir o conteúdo clicado
            content.style.maxHeight = content.scrollHeight + 'px';
            content.style.opacity = 1;
            icon.textContent = '-';
            title.style.color = 'white';
        }
    });
});