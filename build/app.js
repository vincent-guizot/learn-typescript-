"use strict";

var _express = _interopRequireDefault(require("express"));
var _routes = _interopRequireDefault(require("./routes"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
const port = 3000;
app.use(_routes.default);
app.listen(port, function () {
  console.log(`App is listening on port ${port}`);
});