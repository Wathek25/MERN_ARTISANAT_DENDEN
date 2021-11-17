import React from "react";
// import image from "../images/DSC_0053.JPG";
// import thm1 from "../images/DSC_0037.JPG";
// import thm2 from "../images/DSC_0038.JPG";
// import thm3 from "../images/DSC_0047.JPG";

export default function Mosaique() {
  return (
    <div className="container">
      <strong
        style={{ fontSize: "large", color: "#e5890a", fontWeight: "bold" }}
      >
        Mosaïque
      </strong>
      <p>
        Le mot mosaïque dérive du latin MUSIUUM OPUS ce qui signifie l’ouvrage
        lié au Musé. Le mot arabe dérive du mot grec PSEPHOS. La mosaïque est
        une technique de revêtement et de décoration des surfaces Les premières
        mosaïques du monde étaient faites par des galets puis ces matériaux sont
        remplacés par des fragments de pierre ou d’autres matières, taillés
        finement à la main, en forme de cubes et assemblés de manière rigoureuse
        pour former une surface homogène
        <br />
        Les mosaïques permettent de décorer merveilleusement bien un intérieur,
        comme un extérieur! On peut aussi y faire figurer des appellations que
        nous pouvons choisir. Ainsi, certaines maisons possèdent des mosaïques
        contenant le nom de leurs familles.
        <br />
        La plupart des mosaïques tunisiennes sont faites de bleu, de blanc, et
        comportent des formes similaires, losanges, carrés, oiseaux, poissons…
        <br />
        Les mosaïques se déclinent à travers divers autres objets, que ce soit
        des tables, des tableaux, des banquettes et des bancs. Elles sont si
        prisées qu’elles s’exportent à merveille à l’international pour des
        clients provenant notamment de la France, du Canada et des Etats-Unis.
        Aujourd'hui, M. Karim Bairem, nous expliquera plus sur le métier de
        mosaïste.
      </p>
      <iframe
        width="100%"
        height="420"
        margin="auto"
        src="https://www.youtube.com/embed/y1VxwPFyrWg"
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
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729570/Nos%20artisans/Mosaique/DSC_0053_mg76nh.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729570/Nos%20artisans/Mosaique/DSC_0053_mg76nh.jpg"
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
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729539/Nos%20artisans/Mosaique/DSC_0047_ihbfnx.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729539/Nos%20artisans/Mosaique/DSC_0047_ihbfnx.jpg"
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
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729432/Nos%20artisans/Mosaique/DSC_0038_eh3xtj.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635729432/Nos%20artisans/Mosaique/DSC_0038_eh3xtj.jpg"
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
              Adr : Maison de l'artisanat DenDen atelier n°48
              <br /> Artisan : Karim Bairem
              <br /> Tél : 21.013.940
            </p> */}
          </div>
        </div>
        <br />
      </section>
    </div>
  );
}
