import bannerImg from "./assets/banner-img.png";

// import { Link } from "react-router-dom";

function Portada() {
  return (
    <>
      {/*  <!-- #region ENCABEZADO --> */}

      <section className="home container-fluid" id="home">
        <div className="swiper home-swiper">
          <div className="swiper-Portadaer">
            <section className="swiper-slide">
              <div className="home__content grid">
                <div className="home__group">
                  <img src={bannerImg} alt="" className="home__img" />
                </div>

                <div className="home__data">
                  <h3 className="home__subtitle">RANKIN DE EPS</h3>
                  <h1 className="home__title">
                    LAS MEJORES <br />
                    EPS DEL PAIS!!
                  </h1>
                  <p className="home__description text-white">
                    Se concibe a la EpS como una serie de intervenciones
                    destinadas a facilitar cambios en la conducta y en los
                    estilos de vida. Su objetivo es con- seguir comportamientos
                    saludables y proporcionar información como parte del proceso
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portada;
