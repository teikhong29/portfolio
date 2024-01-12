'use client'
import { useEffect } from "react";

export default function ImportBsJS() {
  useEffect(() => {
    require('@srexi/purecounterjs/js/purecounter_vanilla.js');
    require('aos/dist/aos.js');
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
    require('glightbox/dist/js/glightbox.min.js');
    // require('isotope-layout/dist/isotope.pkgd.min.js');
    // require('swiper/swiper-bundle.min.js');
    // require('typed.js/dist/typed.umd.js');
    require('waypoints/lib/noframework.waypoints.min.js');
  }, []);
  return null;
}
