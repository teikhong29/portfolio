'use client'
import { useEffect } from "react";

// import PureCounter from "@srexi/purecounterjs";
import AOS from 'aos';
// import GLightbox from 'glightbox'
// import Isotope from 'isotope-layout/dist/isotope.pkgd.js'
// import Swiper from 'swiper'
// import Waypoint from 'waypoints/lib/noframework.waypoints.js'

export default function ImportJS() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
    import('../assets/js/main.js');

    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return [...document.querySelectorAll(el)]
      } else {
        return document.querySelector(el)
      }
    }

    // const portfolioLightbox = GLightbox({
    //   selector: '.portfolio-lightbox'
    // });

    // const portfolioDetailsLightbox = GLightbox({
    //   selector: '.portfolio-details-lightbox',
    //   width: '90%',
    //   height: '90vh'
    // });

    // new Swiper('.portfolio-details-slider', {
    //   speed: 400,
    //   loop: true,
    //   autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false
    //   },
    //   pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true
    //   }
    // });

    // new Swiper('.testimonials-slider', {
    //   speed: 600,
    //   loop: true,
    //   autoplay: {
    //     delay: 5000,
    //     disableOnInteraction: false
    //   },
    //   slidesPerView: 'auto',
    //   pagination: {
    //     el: '.swiper-pagination',
    //     type: 'bullets',
    //     clickable: true
    //   }
    // });

    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });

    /**
     * Preloader
     */
    // let preloader = select('#preloader');
    // if (preloader) {
    //   window.addEventListener('load', () => {
    //     preloader.remove()
    //   });
    // }

    // window.addEventListener('load', () => {
    //   let portfolioContainer = select('.portfolio-container');
    //   if (portfolioContainer) {
    //     let portfolioIsotope = new Isotope(portfolioContainer, {
    //       itemSelector: '.portfolio-item'
    //     });

    //     let portfolioFilters = select('#portfolio-flters li', true);

    //     on('click', '#portfolio-flters li', function(e) {
    //       e.preventDefault();
    //       portfolioFilters.forEach(function(el) {
    //         el.classList.remove('filter-active');
    //       });
    //       this.classList.add('filter-active');

    //       portfolioIsotope.arrange({
    //         filter: this.getAttribute('data-filter')
    //       });
    //       portfolioIsotope.on('arrangeComplete', function() {
    //         AOS.refresh()
    //       });
    //     }, true);
    //   }
    // });

    // let skilsContent = select('.skills-content');
    // if (skilsContent) {
    //   new Waypoint({
    //     element: skilsContent,
    //     offset: '80%',
    //     handler: function(direction) {
    //       let progress = select('.progress .progress-bar', true);
    //       progress.forEach((el) => {
    //         el.style.width = el.getAttribute('aria-valuenow') + '%'
    //       });
    //     }
    //   })
    // }
   
    // const pure = new PureCounter();

  }, []);

  return null;
}
