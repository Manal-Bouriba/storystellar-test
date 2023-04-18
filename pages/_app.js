import '../src/about/about.css'
import '../src/card/card.css'
import '../src/categories/categories.css'
import "../src/categoryPage/categoryPage.css"
import '../src/company/company.css'
import '../src/dashboard/dashboard.css'
import '../src/featured/featured.css'
import '../src/filters/filters.css'
import '../src/footer/footer.css'
import  "../src/homePage/homePage.css"
import '../src/navBar/navBar.css'
import '../src/results/results.css'
import '../src/sponsoredCompany/sponsoredCompany.css'
import '../src/app.css'
import { Inter } from 'next/font/google'
import { useEffect } from "react";

const inter = Inter({ subsets: ['latin'] , weight: ['400', '700'],})


// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {
  
  useEffect(()=>{
    require("bootstrap/dist/css/bootstrap.min.css");
    require("bootstrap/dist/js/bootstrap.bundle.min");
 },[])
  return(    <>
    <style jsx global>{`
      .inter {
        font-family: ${inter.style.fontFamily};
      }
    `}</style><Component {...pageProps} /></>)

}
