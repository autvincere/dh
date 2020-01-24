const
    content = document.getElementById('app')
let 
    intro = `
    <figure class="logo">
        <img class="logo_header--size" src="assets/img/logo-cartografia.svg" alt="cartografia-de-una-crisis-social">
    </figure>
    <section id="intro" class="fullBkg fullHeight">
      <div class="intro">
         <article class="font-special-elite uppercase color-font-white">
            <h2 class="text-align-right">el olvido es la</h2 class="text-align-right">
            <h2 class="text-align-right">unica muerte</h2>
            <p class="font-open-sans-condensed color-font-white">Cartografía de una crisis social nace desde la necesidad de visualizar a las personas fallecidas durante el estallido social, esta informacion se ha puesto al lacanze de todas las personas.</p>
            <a id="intro" class="color-font-white" href="#">
                <h4>Explorar </h4><span class="icon-icons_hand icon"></span>
            </a>
            </div>
         </article>
       </div>
    </section>`

    init = () => content.innerHTML = intro
    introBtn = document.getElementById('intro')
 window.onload = init;