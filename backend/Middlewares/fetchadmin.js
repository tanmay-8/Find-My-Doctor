const admin_key = process.env.ADMIN_KEY;

const fetchadmin = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    res.status(401).send({ error: "Please try using valid token" });
  }
  try {
    if (token === admin_key) {
      next();
    }else{
        res.status(401).send({ error: "Please try using valid token" });
    }
  } catch (error) {
    res.status(401).send({ error: "Please try using valid token" });
  }
};

module.exports = fetchadmin;