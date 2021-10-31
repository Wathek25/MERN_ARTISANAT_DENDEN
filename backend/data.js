import bcrypt from "bcryptjs";

const data = {
  clients: [
    {
      nom: "Ghenimi",
      prenom: "Wathek",
      email: "wathek@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      phone: "54427262",
      isAdmin: true,
    },
    {
      nom: "Arfaoui",
      prenom: "hamza",
      email: "hamza@gmail.com",
      password: bcrypt.hashSync("1234", 8),
      phone: "99999999",
      isAdmin: false,
    },
  ],
  produits: [
    {
      nom: "Bois 1",
      categorie: "Bois",
      stock: 10,
      image:
        "https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635732179/Acceuil_Produits/Les%20produits/BOIS1_vcr7uk.jpg",
      prix: 20,
      rating: 4.5,
      description: "produit de qualite",
      numReviews: 15,
    },
    {
      nom: "Tapis 1",
      categorie: "Tapisserie",
      stock: 20,
      image:
        "https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635732204/Acceuil_Produits/Les%20produits/TAPI1_xuegg1.jpg",
      prix: 35,
      rating: 4.5,
      description: "produit de qualite",
      numReviews: 19,
    },
    {
      nom: "Bois 2",
      categorie: "Bois",
      stock: 12,
      image:
        "https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635732150/Acceuil_Produits/Les%20produits/BOIS2_ttc7vp.jpg",
      prix: 29,
      rating: 4.5,
      description: "produit de qualite",
      numReviews: 22,
    },
    {
      nom: "Tapis 2",
      categorie: "Tapisserie",
      stock: 13,
      image:
        "https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635732204/Acceuil_Produits/Les%20produits/TAPI1_xuegg1.jpg",
      prix: 70,
      rating: 4.5,
      description: "produit de qualite",
      numReviews: 25,
    },
    {
      nom: "Verre 1",
      categorie: "Verre",
      stock: 10,
      image:
        "https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635732193/Acceuil_Produits/Les%20produits/VERRE1_povbtf.jpg",
      prix: 50,
      rating: 2,
      description: "produit de qualite",
      numReviews: 16,
    },
    {
      nom: "Verre 2",
      categorie: "Verre",
      stock: 36,
      image:
        "https://res.cloudinary.com/dbc5f1w2q/image/upload/v1635732160/Acceuil_Produits/Les%20produits/VERRE2_tbd3ro.jpg",
      prix: 20,
      rating: 5,
      description: "produit de qualite",
      numReviews: 14,
    },
  ],
};

export default data;
