const
    menu = document.getElementById("menu-nav")
    hamburgerMenu = document.getElementById("hamburger")
    nav = document.getElementById("nav")
    aside = document.getElementById("aside")
    arrowFooter = document.getElementsByClassName("icon-footer")
    menuFooter = document.getElementsByClassName("point-list")

    icon = document.querySelector(".icon-footer")
    list = document.querySelector(".point-list");

// let toggleArrow = (a,styleA,b,styleB) => () => {
//     // a.classList.toggle(styleA);
//     for (i = 0; i < b.length; i++) {
//             console.log('hice clic');
//                 a[i].classList.toggle(styleA);  
//                 b[i].classList.toggle(styleB);
//             }
//         }

let cli = (objetivoA,styleA,objetivoB,objetivoC,styleB) => () => { 
    objetivoA.classList.toggle(styleA); 
    objetivoB.classList.toggle(styleB);
    objetivoC.classList.toggle(styleB);
}

// let clickFooter = (styleA,styleB) => {
//     this.classList.toggle(styleA);
//     this.parentNode.nextElementSibling.classList.toggle(styleB); 
// }

// class clickFooter  {
//     constructor(styleA,styleB){
//         this.classList.toggle(styleA);
//         this.parentNode.nextElementSibling.classList.toggle(styleB); 
//     }  
// }

let 
    styleAnimar = "animate",
    styleShow = "show",
    styleRotate = "rotate";
    
    // hermanoDelPadre = parentNode.nextElementSibling

    // icon.addEventListener("click",
    // function() {
    //         icon.classList.toggle(styleRotate);
    //         list.classList.toggle(styleShow);  
               
    //         } )
 
    for (i = 0; i < arrowFooter.length; i++) {
        // let clickpie = new clickFooter();
         arrowFooter[i].addEventListener("click",
        //  clickPie.click(styleRotate,styleShow))
        // toggleArrow(arrowFooter,styleRotate,menuFooter,styleShow))
        function () {
            this.classList.toggle(styleRotate);
            this.parentNode.nextElementSibling.classList.toggle(styleShow); 
        })
        // function() {
        //     this.classList.toggle(styleRotate);
        //     this.parentNode.nextElementSibling.classList.toggle(styleShow); 
        //     //  for (i = 0; i < menuFooter.length; i++) {
        //     //     console.log('hice clic');
        //     //          menuFooter[i].classList.toggle(styleShow);  
        //     //      }
        //     // } );
        //  }
    }

    menu.addEventListener("click", cli(hamburgerMenu,styleAnimar,nav,aside,styleShow));

//   SLIDER HOME
const 
datos = {
    projects: [
         {
              name: 'Arcade Game',
              image: 'assets/img/banner_unimarc.jpg',
              attribute: 'Frogger with lady-bug.',
              enlace: 'https://efectusmagnus.github.io/html/arcade-game.html',
              code: '#',
              caption: 'Collect gems and water points!'
         },
         {
              name: 'Memory Game',
              image: 'assets/img/banner_unimarc.jpg',
              attribute: 'An icon of a brain.',
              enlace: 'https://efectusmagnus.github.io/html/memory-game.html',
              code: 'https://github.com/efectusmagnus/memory-game',
              caption: 'Have fun trainning your brain!'
         },
         {
              name: 'Neighborhood Map',
              image: 'assets/img/banner_unimarc.jpg',
              attribute: "An icon of a map's marker.",
              enlace: 'https://efectusmagnus-map.surge.sh/',
              code: 'https://github.com/efectusmagnus/neighborhood-map-udacity-p8',
              caption: "Museums in Paderborn!"
         }
    ]
}

const 
    content = document.getElementsByClassName('slideshow-ctn')
    recetaExiste = contentRecetas = document.querySelector('.slideshow-recetas')
    contentRecetas = document.getElementsByClassName('slideshow-recetas')
    slides = document.getElementsByClassName("my-slides")
    dots = document.getElementsByClassName("dot")

   

        //    if (content) {
        //     content.innerHTML += `${datos.projects.map(slideshow => 
        //         `
        //             <div class="my-slides center fade">
        //             <a href="${slideshow.enlace}" style="width: 100%;">
        //                  <img class="image-100" src="${slideshow.image}" alt="${slideshow.attribute}">
        //             </a>
        //             </div>
        //             `).join('')}
        //             <div class="dot-ctn">
        //             ${Array(datos.projects.length).fill().map((item, i) => `
        //                  <span class="dot" onclick="currentSlide(${i+1})" tabindex="0"></span>
        //             `).join('')}
        //             </div>
        //         ` 
        //    }
        //    else if (recetaExiste) {
           
            //************* SOLUCION SIN CONSTRUIR EN BASE A OBJETO LITERAL
            console.log('caca');
            
            for(var i = 0; i < contentRecetas.length; i++){
                let 
                     hijosSeleccion = contentRecetas[i].children
                     console.log(hijosSeleccion);
                     
                     seleccion = [...hijosSeleccion]
                     // console.log(seleccion);
                     contentRecetas[i].innerHTML +=`<ol class="dot-ctn">${seleccion.map((item, i) => 
                                `<li><span class="dot" onclick="currentSlide(${i+1})" tabindex="0"></span></li>`).join('')}</ol>
                                `
               }

            // let 
            //     array = contentRecetas.children
            //     // console.log(typeof(contentRecetas));
            //     recetas = [...array]
            //     contentRecetas.innerHTML +=`<ol class="dot-ctn">${recetas.map((item, i) => 
            //         `<li><span class="dot" onclick="currentSlide(${i+1})" tabindex="0"></span></li>`).join('')}</ol>
            //         `
       
            //************* CIERRE SOLUCION SIN CONSTRUIR EN BASE A OBJETO LITERAL
        //    }
           

         
                
            
           

/*-- Slideshow --*/

let slideIndex = 0;

    function showSlides() { 
        let i;
        
        for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
        slideIndex = 1;
        }
        for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
        
        // Change image every 5 seconds
        setTimeout(showSlides, 5000);
    }
  
    showOnClick(slideIndex);
  
    function currentSlide(n) {
        showOnClick(slideIndex = n);
    }
  
    function showOnClick(n) {
        let i;
        if (n > slides.length) {
        slideIndex = 1;
        }
        if (n < 1) {
        slideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
         // Change image every 5 seconds
        // setTimeout(showSlides, 5000);
    }     
/*-- Cierre Slideshow --*/



$(function () {

    //   SLIDER HOME
    $('#catalogo-home').flexslider({
        animation: "slide",
        start: function (slider) {
            $('body').removeClass('loading');
        }
    });

       //   SLIDER RECETAS
       $('#receta-one').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        start: function (slider) {
            $('body').removeClass('loading');
        }
    });

    $('#receta-two').flexslider({
        animation: "slide",
        directionNav: false,
        controlNav: true,
        start: function (slider) {
            $('body').removeClass('loading');
        }
    });
    // CARRUSEL HOME

    //CAROUSEL
    $('div#carousel').flexslider({
        slideshow: true,
        animation: "slide",
        animationLoop: true,
        itemWidth: 150,
        itemMargin: 10,
        minItems: 2,
        maxItems: 6,
        directionNav: true,
        controlNav: false
    });

    // Scroll
    $('a[href*="#"]:not([href="#"])').click(function (event) {
        event.preventDefault();
        var anchor = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            anchor = $(document).height() - $(window).height();
        } else {
            anchor = $(this.hash).offset().top - 24;
        }
        $('html,body').stop().animate({
            scrollTop: anchor
        }, 700, 'swing');
    });

    //cierre scroll

    //SLIDER

});