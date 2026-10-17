// Aetherfall Quick connect: introduction server.
// It only passes small connection-setup messages between players.
// Game data and voice never go through it.
const { PeerServer } = require('peer');

PeerServer({
  port: Number(process.env.PORT) || 9000,
  path: '/',
  proxied: true,          // needed behind Render / Railway
  allow_discovery: false, // nobody can list the rooms
});

console.log('Aetherfall peer server running');
