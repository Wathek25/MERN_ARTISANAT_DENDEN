import React from "react";
// import image from '../images/DSC_0255.JPG'
// import thm1 from '../images/DSC_0268_1.JPG'
// import thm2 from '../images/DSC_0267.JPG'
// import thm3 from '../images/DSC_0274.JPG'

export default function Peinture() {
  return (
    <div className="container">
      <strong>
        <span style={{ fontWeight: "bold", color: "#e5890a" }}>
          Peinture <span style={{ fontWeight: "bold" }}>sur le bois</span>
        </span>
      </strong>
      <p>
        Le travail du bois est fortement enraciné dans l’artisanat L’artisan
        tunisien n’a pas seulement excellé dans la sculpture du bois. D’autres
        techniques, telles que la peinture acrylique et les ciseaux à bois
        reprenant de magnifiques formes et de sublimes couleurs provenant de sa
        culture visuelle qu'il alimente d'inspirations de la céramique
        qallaline, des carreaux de faïence andalous, de la broderie du sud des
        bakhnoug ou encore de la mosaïque romaine.
      </p>
      <iframe
        width="100%"
        height="420"
        margin="auto"
        src="https://www.youtube.com/embed/UnI2W7oNU2E"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>

      <section className="gallery no-padding">
        <div className="row">
          <div className="mix col-lg-3 col-md-3 col-sm-6">
            <div className="item">
              <a
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728076/Nos%20artisans/Peinture%20sur%20le%20bois/DSC_0267_lvcqle.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728076/Nos%20artisans/Peinture%20sur%20le%20bois/DSC_0267_lvcqle.jpg"
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
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728099/Nos%20artisans/Peinture%20sur%20le%20bois/DSC_0268_1_xmaar9.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728099/Nos%20artisans/Peinture%20sur%20le%20bois/DSC_0268_1_xmaar9.jpg"
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
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728125/Nos%20artisans/Peinture%20sur%20le%20bois/DSC_0274_mjknsf.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728125/Nos%20artisans/Peinture%20sur%20le%20bois/DSC_0274_mjknsf.jpg"
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
              <br />
              Contact : <br />
              Adr : Maison de l'artisanat DenDen atelier n°7 <br />
              Artisan : Mohamed riadh <br />
              Tél : +216 98 269 249 <br />
            </p> */}
          </div>
        </div>
      </section>
    </div>
  );
}
