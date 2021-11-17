import React from "react";
// import image from "../images/DSC_0253.jpg";
// import thm1 from "../images/DSC_0228.JPG";
// import thm2 from "../images/mar.jpg";
// import thm3 from "../images/DSC_0248.JPG";

export default function Tapisserie() {
  return (
    <div className="container">
      <strong
        style={{ fontSize: "large", color: "#e5890a", fontWeight: "bold" }}
      >
        Tapisserie
      </strong>
      <p>
        La Tunisie est réputée pour ses tapis, mergoums, klims et autres
        tapisseries et tissages. De tous temps et aujourd’hui encore, du nord au
        sud, dans les villes et les campagnes, les activités de tissage
        foisonnent.
        <br />
        Mais en réalité, le tissage du tapis existait bien auparavant; et
        aujourd’hui, le tapis à point noués est produit dans toutes les régions
        de la Tunisie. Le tapis, dit de Kairouan, comporte un champ, central
        généralement hexagonal, des écoinçons semés de motifs stylisés et des
        bandes d’encadrement où s’alternent des motifs géométriques et floraux.
        <br />
        La production de tapis en Tunisie s’est développée avec l’amélioration
        et la diversification du produit qui a connu une véritable mutation au
        niveau des textures , des technologies de traitement et de production
        des composants (laine, lin, soie…), et de l’esthétique (composition,
        motifs,gamme…).
        <br />
        La finesse du point des tapis tunisiens estompe le contour des motifs et
        leur donne l’aspect fondu qui les caractérise et qui est du meilleur
        effet lorsqu’il est soutenu par une harmonie de couleurs dont les
        artisanes tunisiennes ont le secret.
      </p>
      <iframe
        width="100%"
        height="420"
        margin="auto"
        src="https://www.youtube.com/embed/d52jhMoisrk"
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
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728345/Nos%20artisans/Tapisserie/mar_zzk99x.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728345/Nos%20artisans/Tapisserie/mar_zzk99x.jpg"
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
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728564/Nos%20artisans/Tapisserie/DSC_0228_izj8fu.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728564/Nos%20artisans/Tapisserie/DSC_0228_izj8fu.jpg"
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
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728744/Nos%20artisans/Tapisserie/DSC_0234_ngohpf.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635728744/Nos%20artisans/Tapisserie/DSC_0234_ngohpf.jpg"
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
        <br />
      </section>
    </div>
  );
}
