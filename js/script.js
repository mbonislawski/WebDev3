        function getScroll() {
            const nav = document.querySelector('.header');
            const hamb_menu = document.querySelector('.mobile');
            const scroll = window.pageYOffset;
            if(scroll > 0) {
                nav.classList.add('sticky');
                hamb_menu.classList.add('mobile_menu_sticky');

            } else {
                nav.classList.remove('sticky');
                hamb_menu.classList.remove('mobile_menu_sticky');
            }
        }
        
        function mobile_menu() {
            const mobile = document.querySelector('.mobile_menu');
            const mobile_button = document.querySelector('.mobile_menu_button');
            mobile.classList.toggle('mobile_menu_active');
            mobile_button.classList.toggle('mobile_menu_button_active');
        }
        
        document.addEventListener('scroll', getScroll);
        document.addEventListener('click', mobile_menu);

        
        $(document).on('click', 'a', function(event){
	    event.preventDefault();
	    $('body').animate({
	        scrollTop: $($.attr(this, 'href')).offset().top
	    }, 700);
	});