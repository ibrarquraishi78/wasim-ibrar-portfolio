$(document).ready(function(){
    // Existing scroll and navbar scripts...
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // Typing animation scripts...
    var typed = new Typed(".typing", {
        strings: [ "Developer", "Designer", "Content Creator", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: [ "Developer", "Designer", "Content Creator", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // Owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{items: 1,nav: false},
            600:{items: 2,nav: false},
            1000:{items: 3,nav: false}
        }
    });

    // --------- Download Resume Button Script ---------
    $('#downloadBtn').click(function(event){
        event.preventDefault(); // default link action roko

        const pdfUrl = "Wasim_Ibrar_Resume.pdf";

        // PDF naya tab me open karo
        window.open(pdfUrl, '_blank');

        // Invisible link se download trigger karo
        const link = document.createElement('a');
        link.href = pdfUrl;
        link.download = 'Wasim_Ibrar_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});

// --------- Contact form js ---------

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // Replace this with your actual form endpoint URL (Formspree, Getform, etc.)
    const endpoint = "https://formspree.io/f/xzzrlzql";

    fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you for contacting me! I will get back to you soon.');
            form.reset();
        } else {
            alert('Error sending message. Please try again.');
        }
    })
    .catch(() => {
        alert('Error sending message. Please check your connection and try again.');
    });
});
