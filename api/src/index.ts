import LunarChatServer from './core/LunarChatServer';

async function main() {
  const port = parseInt(process.env.PORT) || 8080;
  const server = new LunarChatServer(port);
  server.start();
}

main().catch((err) => console.log(err));
