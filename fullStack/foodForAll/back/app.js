var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var { migrate } = require("postgres-migrations");
var swaggerUi = require("swagger-ui-express");

const YAML = require("yamljs");
const swaggerDocument = YAML.load("./docs/contract.yaml");

var devicesRouter = require("./src/routes/devices");
const relaxCORSPolicy = require("./src/middleware/addHeaders");

async function config() {
  const dbConfig = {
    database: "postgres",
    user: "postgres",
    password: "example",
    host: "db",
    port: 5432,
    ensureDatabaseExists: true,
    defaultDatabase: "postgres",
  };

  await migrate(dbConfig, "./db/migrations");
}

config();

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(relaxCORSPolicy);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/v1/devices", devicesRouter);

module.exports = app;
