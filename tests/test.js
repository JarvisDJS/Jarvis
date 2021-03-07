const discord = require('../src/index');
const client = new discord.Client({
  presence: 'dnd',
  status: {
    text: 'Status Text',
    type: 0, // Types: 0 = Playing, 1 = Streaming, 2 = Listening
  },
  ws: {
    large_threshold: 250,
    compress: false,
  },
});

client.login('TOKEN');

client.on('ready', async (user) => {
  console.log(user);
});

client.on('message', async (message) => {
  console.log(message.content);
});
