module.exports = (io) => {
  let usuarios = {};
  io.on("connection", (socket) => {
    console.log("nuevo");
    socket.on("UsuarioNuevo", (data, cb) => {
      if (data in usuarios) {
        cb(false);
      } else {
        cb(true);
        socket.NuevoUser = data;
        usuarios[socket.NuevoUser] = socket;
        console.log(socket.NuevoUser + " Conectado");
        io.emit("UsuarioNuevo", Object.keys(usuarios));
      }
    });
    socket.on("Registro", (msg) => {
      console.log("registr");
      io.emit("Registrado", "nuevo form");
    });

    socket.on("disconnect", (data) => {
      console.log("disconnect");
      if (!socket.NuevoUser) return;

      delete usuarios[socket.NuevoUser];
      io.emit("UsuarioNuevo", Object.keys(usuarios));
    });
  });
};
