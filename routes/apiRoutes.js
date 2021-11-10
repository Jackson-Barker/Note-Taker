const fs = require("fs");
var data  = JSON.parse(fs.readFileSync('./db/db.json', 'utf8'));

module.exports = (app) => {
app.get("/api/notes", (req, res) => {
  res.json(data);
});

app.get('/api/notes.:id', (req, res) => {
  res.json(data[Number(req.params.id)]);
});

api.post("/api/notes", (req, res) => {
  let newNote = req.body;
  let uniqueID = (data.length).toString();
  newNote.id = uniqueID;
  data.push(newNote);

  fs.writeFile("./db/db.json", JSON.stringify(data), function(err) {
    if (err) throw (err);
  })

  res.json(data);

});
}
  // console.log(req.body);

  // const { isValid, errors } = req.body;

  // const payload = {
  //   title,
  //   text,
  // };

//   if (!isValid) {
//     readAndAppend(payload, "./db/db.json");
//     res.json(`??? information added 🔧`);
//   } else {
//     res.json({
//       message: "Object is valid, not logging. Check front end implementation",
//       error_id: payload.error_id,
//     });
//   }
// });

// module.exports = api;
