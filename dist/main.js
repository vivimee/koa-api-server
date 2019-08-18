"use strict";

var _koa = _interopRequireDefault(require("koa"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _koa.default();
app.use(ctx => {
  ctx.body = 'hello';
});
app.listen(8080);