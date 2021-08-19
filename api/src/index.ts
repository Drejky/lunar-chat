import LunarChatServer from './core/LunarChatServer';
import * as dotenv from 'dotenv';

async function main() {
  const port = parseInt(process.env.PORT) || 8080;
  const server = new LunarChatServer(port);
  server.start();
}

dotenv.config();
main().catch((err) => console.log(err));
