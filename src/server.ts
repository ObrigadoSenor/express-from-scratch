import { App } from './app';
const { server, SERVER_PORT } = App();
server.listen(SERVER_PORT, () => {
  console.log(`Listening on port: ${SERVER_PORT}`);
});
