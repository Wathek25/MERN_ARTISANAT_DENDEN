import React from "react";
// import image from '../images/cover.PNG'
// import thm1 from '../images/DSC_0134_-_Copy.JPG'
// import thm2 from '../images/DSC_0135.JPG'
// import thm3 from '../images/DSC_0145.JPG'

export default function Mosaique() {
  return (
    <div className="container">
      <strong style={{ color: "#e5890a", fontWeight: "bold" }}>
        Verre Soufflé
      </strong>
      <p>
        Depuis fort longtemps, les artisans tunisiens sont reconnus pour leur
        maîtrise de l’art du verre soufflé. Tellement longtemps que certains ont
        retrouvé des objets du quotidien en verre soufflé datant des périodes
        puniques et romaines. Le style de cet art s’est modulé aux tendances du
        temps, mais la dextérité demandée pour la manier demeure toujours la
        même. Les souffleurs de verre chauffent, étirent, tournent, retournent,
        gonflent et sculptent pour créer de petites et grandes oeuvres!
        <br />
        La technique du verre soufflé est bien présente en Tunisie et l’on peut
        mesurer à quel point cette pratique s’est affinée au fil des siècles :
        on trouve des objets du quotidien en verre soufflé dans les différents
        musées historiques de Tunisie datant des périodes puniques puis
        romaines. Après une éclipse de quelques siècles, le verre revient en
        Tunisie par l’effort de l’Office National de l’Artisanat qui a
        réintroduit les techniques traditionnelles. Les artisans créateurs ont
        pris la relève et s’expriment désormais dans plusieurs registres qui
        allient traditions ancestrales et pratiques modernes. <br />
        <br />
        Makrem Zitoun est souffleur de verre près de Tunis. Vases, chandeliers,
        services à thé… Ses créations associent formes et matières entre
        tradition et design moderne. Visitez son atelier à Den-Den près de
        Tunis, au sein de village de denden
      </p>
      <iframe
        width="100%"
        height="420"
        margin="auto"
        src="https://www.youtube.com/embed/YA41VdIk1Oo"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <p></p>
      <section className="gallery no-padding">
        <div className="row">
          <div className="mix col-lg-3 col-md-3 col-sm-6">
            <div className="item">
              <a
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729828/Nos%20artisans/Verre%20Souffl%C3%A9/DSC_0135_whwxwf.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729828/Nos%20artisans/Verre%20Souffl%C3%A9/DSC_0135_whwxwf.jpg"
                  alt="..."
                  className="img-fluid"
                />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <i className="icon-search"></i>
                </div>
              </a>
            </div>
          </div>

          <div className="mix col-lg-3 col-md-3 col-sm-6">
            <div className="item">
              <a
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729837/Nos%20artisans/Verre%20Souffl%C3%A9/DSC_0134_-_Copy_cx6twr.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729837/Nos%20artisans/Verre%20Souffl%C3%A9/DSC_0134_-_Copy_cx6twr.jpg"
                  alt="..."
                  className="img-fluid"
                />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <i className="icon-search"></i>
                </div>
              </a>
            </div>
          </div>

          <div>
            {/* <p>
              Contact : <br />
              Adr : Maison de l'artisanat DenDen atelier n°11
              <br /> Artisan : Makrim Zitoun
              <br /> Tél : +216 23 268 026
              <br /> Facebook : @zitoun.artisanal
            </p> */}
          </div>
        </div>
        <br />
      </section>
    </div>
  );
}
