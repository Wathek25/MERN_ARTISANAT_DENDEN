import React from "react";
// import image from "../images/DSC_0314.JPG";
// import thm1 from "../images/DSC_0332.JPG";
// import thm2 from "../images/DSC_0320.JPG";
// import thm3 from "../images/DSC_0326.JPG";

export default function Cuivre() {
  return (
    <div className="container">
      <strong style={{ color: "#e5890a", fontWeight: "bold" }}>
        Cuivre martelé
      </strong>
      <p>
        l’artisan tunisien perpétuant ce métier d’art conçoit un design, un
        modèle et une forme et il tentait de le reproduire. C’est avec une
        grande technicité consolidant un savoir faire ancestral que ce produit
        noble est de retour dans nos intérieurs ! <br />
        Mais en réalité, le tissage du tapis existait bien auparavant; et
        aujourd’hui, le tapis à point noués est produit dans toutes les régions
        de la Tunisie. Le tapis, dit de Kairouan, comporte un champ, central
        généralement hexagonal, des écoinçons semés de motifs stylisés et des
        bandes d’encadrement où s’alternent des motifs géométriques et floraux.
        <br />
        Les articles en cuivre martelé sont le résultat d’un mariage entre la
        tradition et le design contemporain. Ils sont souvent inspirés des
        ustensiles traditionnels tunisiennes de la cuisine et de la salle de
        bain…Aujourd’hui ces articles sont à la pointe de tendance et deviennent
        des objets déco séduisants. Sur le marché tunisien, une large gamme est
        conçue, une grande compétitivité et une demande qui renaît. Les produits
        fabriqués en cuivre martelé sont de pures créations artistiques soit ont
        une utilité dans l’art de table et la bijouterie. <br />
        La finesse du point des tapis tunisiens estompe le contour des motifs et
        leur donne l’aspect fondu qui les caractérise et qui est du meilleur
        effet lorsqu’il est soutenu par une harmonie de couleurs dont les
        artisanes tunisiennes ont le secret.
        <br />
        Le cuivre rouge se retrouve dans les produits faits pour décorer votre
        table et votre intérieur tels que les corbeilles à pain ou pour fruits.
        Le martelage rendant le produit plus solide et donc moins malléable,
        l’artisan est quelques fois obligé de repasser l’objet au feu pour lui
        faire retrouver de son élasticité. Pour les objets en cuivre rouge,
        quand ils sont utilisés dans l’alimentaire, ils sont recouverts d’une
        couche d’étain pour éviter le contact des aliments avec le cuivre qui
        s’oxyde.
      </p>

      <section className="gallery no-padding">
        <div className="row">
          <div className="mix col-lg-3 col-md-3 col-sm-6">
            <div className="item">
              <a
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635727563/Nos%20artisans/Cuivre/DSC_0314_rr4mvn.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635727563/Nos%20artisans/Cuivre/DSC_0314_rr4mvn.jpg"
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
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635727594/Nos%20artisans/Cuivre/DSC_0332_awltno.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635727594/Nos%20artisans/Cuivre/DSC_0332_awltno.jpg"
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
                href="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635727600/Nos%20artisans/Cuivre/DSC_0326_ohy56h.jpg"
                data-fancybox="gallery"
                className="image"
              >
                <img
                  src="https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635727600/Nos%20artisans/Cuivre/DSC_0326_ohy56h.jpg"
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
