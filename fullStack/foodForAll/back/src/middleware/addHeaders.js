function relaxCORSPolicy(req, res, next) {
  if (req.headers.host.startsWith("localhost")) {
    res.header("Access-Control-Allow-Origin", "*");
  }
  next();
}

module.exports = relaxCORSPolicy;
