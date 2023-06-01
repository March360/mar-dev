
// submitting info from contact to email


let sendButton = document.getElementById("send-button");
const form = document.getElementById("form");
const scrollline = document.querySelector('.scroll-line');
var sections = document.querySelectorAll("section");
var sections = document.querySelectorAll("section");


form.addEventListener('submit',function(e){
  e.preventDefault();
  
  sendButton.value = 'Sending...';

  const serviceID = 'default_service';
  const templateID = 'template_04kl371';

  emailjs.sendForm(serviceID, templateID, this)
   .then(() => {
    sendButton.value = 'Send';
     alert('Sent!');form.reset();
   }, (err) => {
    sendButton.value = 'Send';
     alert(JSON.stringify(err));
   });
});

// end contact

onscroll = function(){
    var scrollPosition = document.documentElement.scrollTop;
    sections.forEach((section) => {
      if(scrollPosition >= section.offsetTop && 
        scrollPosition < section.offsetTop + section.offsetHeight
        ){
            var currentId = section.attributes.id.value;
            removeAllActiveClasses();
            addActiveClass(currentId);
      }  
    });
};
var removeAllActiveClasses = function(){
    document.querySelectorAll("nav a").forEach(el => {
        el.classList.remove("activeColor")
    });
};
var addActiveClass = function(id){
    console.log(id);
    var selector = `nav a[href="#${id}"]`;
    document.querySelector(selector).classList.add("activeColor");
};

onscroll = function () {
  var scrollPosition = document.documentElement.scrollTop;

  sections.forEach((section) => {
    if (
      scrollPosition >= section.offsetTop - section.offsetHeight * 0.15 &&
      scrollPosition < section.offsetTop + section.offsetHeight - section.offsetHeight * 0.15
    ) {
      var currentId = section.attributes.id.value;
      removeAllActiveClasses();
      addActiveClass(currentId);
    }
  });
};

var removeAllActiveClasses = function () {
  document.querySelectorAll(".list-nav .menu-btn").forEach((el) => {
    el.classList.remove("activeColor");
  });
};



var addActiveClass = function (id) {
  // console.log(id);
  var selector = `.list-nav .menu-btn[href="#${id}"]`;
  document.querySelector(selector).classList.add("activeColor");
};



$(document).ready(function (){
  // add smooth scrolling to all links
  $("a").on("click", function(event){
    if(this.hash !== ""){
      // prevent default anchor click behavior
      event.preventDefault();
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area

      $("html, body").animate({
        scrollTop: $(hash).offset().top,
      }, 800,
      function(){
        window.location.hash = hash;
      }
      );
    }
  });
});

 // sticky navbar on scroll script
  
$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
   
});

ScrollReveal({
  distance: '60px',
  duration: '2500',
  delay: 400
  });
  
  ScrollReveal().reveal('.title', { delay: 500, origin: 'bottom'},{mobile: false});
  ScrollReveal().reveal('.about .about-image', { delay: 500, rotate:{x:40 ,z:40} });
  ScrollReveal().reveal('.textdiv', { delay: 500, origin: 'bottom'});
  ScrollReveal().reveal('.services .column', { delay: 500, origin: 'bottom' });
  ScrollReveal().reveal('.card-reveal-1', { delay: 500, origin: 'bottom' });
  ScrollReveal().reveal('.revealDiv', { delay: 500, origin: 'left'});
  ScrollReveal().reveal('.skills-desc', { delay: 500, origin: 'left' });
  ScrollReveal().reveal('.skills-Info', { delay: 500, origin: 'bottom' });
  ScrollReveal().reveal('.contact-desc', { delay: 500, origin: 'left' });
  ScrollReveal().reveal('.icons', { delay: 500, origin: 'bottom' });
  ScrollReveal().reveal('.message', { delay: 500, origin: 'bottom' });

  jQuery(document).ready(function(){
  
    jQuery('.progress-bar').each(function() {
      jQuery(this).find('.progress-content').animate({
        width:jQuery(this).attr('data-percentage')
      },20000);
      
      jQuery(this).find('.progress-number-mark').animate(
        {left:jQuery(this).attr('data-percentage')},
        {
         duration: 20000,
         step: function(now, fx) {
           var data = Math.round(now);
           jQuery(this).find('.percent').html(data + '%');
         }
      });  
    });
  });

      function fillscrollline(){
        const windowHeight = window.innerHeight;
        const fullHeight = document.body.clientHeight;
        const scrolled = window.scrollY;
        const percentScrolled = (scrolled / (fullHeight - windowHeight)) * 100;

        scrollline.style.width = percentScrolled + '%';
      };
      window.addEventListener('scroll', fillscrollline);
      // show the 3 images
       $(".card-div:lt(3)").show();

      // When the gallery button is clicked
      $("#gallery-btn").on('click', function(event){
        // prevent default behavior
        event.preventDefault();
        // All of the hidden images
        var $hidden = $(".card-div:hidden");
        //show the next three images
        $($hidden).slice(0, 3).fadeIn(800);;
         // If the length of $hidden is 4 then hide the button
        if ($hidden.length == 3){
          $(this).fadeOut();
        }
      });