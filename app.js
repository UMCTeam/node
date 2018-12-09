const Koa2   = require("koa2");
const { port } = require("./config/default"); 
const MySql  = require("./lib/mysql");

const app = new Koa2();

app.use(async (ctx) => {
    const result = await MySql.findUser("xxxxxx");
    ctx.body = result;
});

app.listen(port)