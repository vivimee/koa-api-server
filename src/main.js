import Koa from "koa";
import KoaBodyparser from "koa-bodyparser";
import KoaLogger from "koa-logger";

import indexRouter from "./routes/index";
import config from "./config";

const app = new Koa();

app
  .use(KoaLogger())
  .use(KoaBodyparser())
  .use(indexRouter.routes())
  .use(indexRouter.allowedMethods());

app.listen(config.port);
