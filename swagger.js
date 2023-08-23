const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = [
  "./routes/rest_usuario.js",
  "./routes/rest_colaborador.js",
  "./routes/rest_colaborador_lista.js",
  "./routes/rest_lista.js",
  "./routes/rest_producto.js",
  "./routes/rest_usuario_colaborador",
];

swaggerAutogen(outputFile, endpointsFiles);
