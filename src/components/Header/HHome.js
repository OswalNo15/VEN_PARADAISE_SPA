import React from "react";
import styles from "../../styles/HomeHeader.module.css";
import ImageOptimize from "../tools/ImageOptimize"
import Link from "next/link";

function HHome() {
  return (
    <>
      {/*<!-- ***** Header Area Start ***** -->*/}
      <header className={`${styles.header_area} ${styles.header_sticky}`}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.col_12}>
              <nav className={styles.main_nav}>
                {/*<!-- ***** Logo Start ***** -->*/}
                <a href="#" className={styles.logo}>
                  <ImageOptimize
                    Values={{
                      src: "/img/logo.png",
                      alt: "VenParadise-SPA",
                      classValue: "",
                      width: 160,
                      height: 30,
                    }}
                  />
                </a>
                {/* <!-- ***** Logo End ***** -->*/}
                {/*<!-- ***** Menu Start ***** -->*/}
                <ul className={styles.nav}>
                  <li>
                    <a href="#welcome" className={styles.active}>
                      Inicio
                    </a>
                  </li>
                  <li>
                    <a href="#features">Modelos</a>
                  </li>
                  <li>
                    <a href="#work-process">Servicios</a>
                  </li>
                  <li>
                    <a href="#testimonials">Contactenos</a>
                  </li>
                  <li>
                    <a href="#About">Sobre nosotros</a>
                  </li>
                  <li>
                    <Link href="/Account/Login">Inicio de sesión</Link>
                  </li>
                </ul>
                <a className={styles.menu_trigger}>
                  <span className={styles.span}>Menu</span>
                </a>
                {/* <!-- ***** Menu End ***** -->*/}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/*<!-- ***** Header Area End ***** -->*/}
    </>
  );
}

export default HHome;
