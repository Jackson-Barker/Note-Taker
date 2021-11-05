const api = require("express").Router();

api.get("/", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});

api.post("/", (req, res) => {
  console.log(req.body);

  const { isValid, errors } = req.body;

  const payload = {
    title,
    text,
  };

  if (!isValid) {
    readAndAppend(payload, "./db/db.json");
    res.json(`??? information added 🔧`);
  } else {
    res.json({
      message: "Object is valid, not logging. Check front end implementation",
      error_id: payload.error_id,
    });
  }
});

module.exports = api;
