const EventEmitter = require("events");
const WebSocket = require("ws");

class WSManager extends EventEmitter {
  constructor() {
    super();
  }

  async destroy() {
    console.log("[WS] ")
    process.exit();
  }

  async connect() {
    const ws = new WebSocket("wss://gateway.discord.gg/?v=8&encoding=json");

    // Listens for the server open event
    ws.on("open", async function open(data) {
      console.log("[WS] Connected to the discord gateway")
    });

    // Listen for websocket messages then reply
    ws.on("message", async function incoming(data) {
      let dataJSON = JSON.parse(data);
      console.log(dataJSON)
       await setInterval(async () => {
         await ws.send(`{"op": ${dataJSON.op}, "d": ${dataJSON.d}}`);
         await console.log("[WS] Heartbeat sent");
       }, dataJSON.d.heartbeat_interval);
    });

    ws.on("close", function incoming(data) {
      console.log("[WS] Connection died")
      console.log(data)
    })
  }
}

module.exports = WSManager;
