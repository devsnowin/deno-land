// import * as oak from "https://deno.land/x/oak@v11.1.0/mod.ts";
import { Application, Router } from "./deps.ts";
import renderHtml from "./template.ts";

const app = new Application();
const router = new Router();

// indexRouter.use("/", router);

console.log(`${Deno.cwd()}\\views\\index.ejs'`);

app.use(router.routes());
app.use(router.allowedMethods());

app.use(async (ctx) => {
  const data = await fetch(
    "https://www.boredapi.com/api/activity?participants=1"
  );
  const jsonResponse = await data.json();
  console.log();

  ctx.response.body = renderHtml(jsonResponse.activity);
});

app.listen({ port: 3000 });
