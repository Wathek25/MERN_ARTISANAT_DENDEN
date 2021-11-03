import jwt from "jsonwebtoken";

export const generateToken = (client) => {
  return jwt.sign(
    {
      _id: client._id,
      prenom: client.prenom,
      nom: client.nom,
      email: client.email,
      isAdmin: client.isAdmin,
      isArtisan: client.isArtisan,
    },
    process.env.JWT_SECRET || "azerty",
    {
      expiresIn: "3000d",
    }
  );
};

export const isAuth = (req, res, next) => {
  const authorization = req.headers.authorization;
  if (authorization) {
    const token = authorization.split(" ")[1]; // to get the token of the request
    // console.log(token);
    // eslint-disable-next-line no-undef
    jwt.verify(token, process.env.JWT_SECRET || "azerty", (err, decode) => {
      if (err) {
        res.status(401).send({ message: "Invalid Token" });
      } else {
        req.client = decode;
        // console.log(decode);
        next();
      }
    });
  } else {
    res.status(401).send({ message: "No Token" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.client && req.client.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};

export const isArtisan = (req, res, next) => {
  if (req.client && req.client.isArtisan) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Artisan Token" });
  }
};

export const isArtisanOrAdmin = (req, res, next) => {
  if ((req.client && req.client.isArtisan) || req.client.isArtisan) {
    next();
  } else {
    res.status(401).send({ message: "Invalid ArtisanOrAdmin Token" });
  }
};
