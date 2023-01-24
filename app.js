import express from "express";
const app = express();
const port = 3000;

import routes from './routes'
app.use(routes)

app.listen(port, function () {
  console.log(`App is listening on port ${port}`);
});
