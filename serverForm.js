const express = require("express");
const app = express();

app.use(express.static(`${__dirname}/`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(3013, () => {
  console.log(`Server Form Validator on 3013`);
});
