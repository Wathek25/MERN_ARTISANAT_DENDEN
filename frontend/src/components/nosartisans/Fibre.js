import React from "react";
// import image from '../images/DSC_0092.JPG'
// import thm1 from '../images/DSC_0089.JPG'
// import thm2 from '../images/DSC_0095.JPG'
// import thm3 from '../images/DSC_0093.JPG'

export default function Fibre() {
  return (
    <div className="container">
      <strong
        style={{ fontSize: "large", color: "#e5890a", fontWeight: "bold" }}
      >
        Fibres Végétales
      </strong>
      <p>
        Le travail des fibres végétales -une matière naturelle très abondante en
        Tunisie- est de retour. Le fameux couffin, célèbre dans le monde entier,
        est un objet utilitaire qui accompagne aussi la majorité des tunisiens
        dans leur marché. La natte, un tapis d’alfa, de jonc ou de palme coloré,
        a toujours fait partie de l’ameublement rural et citadin Les meubles en
        vannerie (cannage) sont une production récente qui gagne les faveurs
        d’une clientèle de plus en plus moderne.
      </p>
      <p>
        <iframe
          width="100%"
          height="420"
          margin="auto"
          src="https://www.youtube.com/embed/sopao_sJFhw"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </p>

      <section className="gallery no-padding">
        <div className="row">
          <div className="mix col-lg-3 col-md-3 col-sm-6">
            <div className="item">
              <a
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729056/Nos%20artisans/Fibre%20v%C3%A9g%C3%A9tale/DSC_0097_vddhhm.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729056/Nos%20artisans/Fibre%20v%C3%A9g%C3%A9tale/DSC_0097_vddhhm.jpg"
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
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729170/Nos%20artisans/Fibre%20v%C3%A9g%C3%A9tale/DSC_0102_1_iy5cli.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729170/Nos%20artisans/Fibre%20v%C3%A9g%C3%A9tale/DSC_0102_1_iy5cli.jpg"
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
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729176/Nos%20artisans/Fibre%20v%C3%A9g%C3%A9tale/DSC_0093_gjkfpl.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729176/Nos%20artisans/Fibre%20v%C3%A9g%C3%A9tale/DSC_0093_gjkfpl.jpg"
                  alt="..."
                  className="img-fluid"
                />
                <div className="overlay d-flex align-items-center justify-content-center">
                  <i className="icon-search"></i>
                </div>
              </a>
            </div>
          </div>
          {/* <p>
            Contact : <br />
            Adr : Maison de l'artisanat DenDen atelier n°30
            <br />
            Artisan : Fatma Mzoughi hammai
            <br />
            Tél : +216 98 376 459
            <br />
            Facebook : l.ART du Rotin
          </p> */}
        </div>
        <br />
      </section>
    </div>
  );
}
