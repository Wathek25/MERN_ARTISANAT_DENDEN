import jwt from "jsonwebtoken";

export const generateToken = (client) => {
  return jwt.sign(
    {
      _id: client._id,
      prenom: client.prenom,
      nom: client.nom,
      email: client.email,
      isAdmin: client.isAdmin,
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
        req.user = decode;
        // console.log(decode);
        next();
      }
    });
  } else {
    res.status(401).send({ message: "No Token" });
  }
};

export const isAdmin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send({ message: "Invalid Admin Token" });
  }
};
