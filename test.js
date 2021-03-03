const discord = require('./src/index');
const client = new discord.Client({
    presence: "online",
    status: {
        text: "Status Text",
        type: 0 // Types: 0 = Playing, 1 = Streaming, 2 = Listening
    },
    cache: {
        fetchAllMembers: false,
        fetchAllGuilds: false,
        fetchAllRoles: false,
        fetchAllChannels: false
    }
});

client.on("ready", async() => {
    console.log("Ready!")
})

client.login("NzcxNDgzNzQxOTc3NzA2NTI2.X5syOQ.11660LVYNkPF3n_IPAGEPos1Qvo")