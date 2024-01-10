const { Router } = require("express");

const SessionController = require("../controllers/SessionsController");
const sessionsControler = new SessionController();

const sessionRoutes = Router();
sessionRoutes.post("/", sessionsControler.creat);

module.exports = sessionRoutes

