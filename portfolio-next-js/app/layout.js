import { Inter } from 'next/font/google'
import './assets/css/globals.css'



import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import 'boxicons/css/boxicons.min.css'
import 'glightbox/dist/css/glightbox.min.css'
import 'swiper'
import './assets/css/style.css'

import Favicon from './assets/imgs/favicon.ico'
import Header from './components/header'
import Hero from './components/hero'
import Footer from './components/footer'
import ImportJS from './components/importJS'


const inter = Inter({ subsets: ['latin'] })





export const metadata = {
  title: 'Jackie Tan',
  description: 'Jackie Tan\'s Portfolio'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href={Favicon.src} />
      </head>
      <body>
        {/* ======= Mobile nav toggle button =======  */}
        <i class="bi bi-list mobile-nav-toggle d-lg-none"></i>

        {/* ======= Header ======= */}
        <Header />

        {/* ======= Hero Section ======= */}
        <Hero />

        {children}

        {/* ======= Footer ======= */}
        <Footer />

        {/* <div id="preloader"></div> */}
        <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

        {/* Vendor JS Files */}
        <ImportJS />
      </body>
    </html>
  )
}