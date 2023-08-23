var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

/* MÓDULO CORS */
var cors = require("cors");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

/* REFERENCIA AL MANEJADOR DE RUTAS */
var usuarioRouter = require("./routes/rest_usuario");
var productoRouter = require("./routes/rest_producto");
var listaRouter = require("./routes/rest_lista");
var colaboradorRouter = require("./routes/rest_colaborador");
var usuario_colaboradorRouter = require("./routes/rest_usuario_colaborador");
var colaborador_listaRouter = require("./routes/rest_colaborador_lista");

var app = express();

/* AGREGUE EL MIDDLEWARE CORS */
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
/* RELACIÓN ENTRE LA RUTA DEL URL CON LA REFERENCIA CON EL MANEJADOR DE RUTAS */
app.use("/rest/usuario", usuarioRouter);
app.use("/rest/producto", productoRouter);
app.use("/rest/lista", listaRouter);
app.use("/rest/colaborador", colaboradorRouter);
app.use("/rest/usuario_colaborador", usuario_colaboradorRouter);
app.use("/rest/colaborador_lista", colaborador_listaRouter);

app.use("/users", usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");

});
/* REFERENCIA AL MÓDULO */
const swaggerUi = require('swagger-ui-express');

/* REFERENCIA AL ARCHIVO GENERADO */
const swaggerFile = require('./swagger_output.json');

/* CONFIGURACIÓN DE LA RUTA A LA DOCUMENTACIÓN */
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));
module.exports = app;
