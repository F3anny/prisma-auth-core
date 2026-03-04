
import Fastify from "fastify";

const app=Fastify({
    logger:true
});
app.get("/", async (request, reply) => {
  return { message: "Elite backend started 🚀" };
});
const start = async () => {
  try {
    await app.listen({ port: 3000 });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};
start();
