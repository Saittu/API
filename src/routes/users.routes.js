const { Router } = require ("express")

const UserController = require("../controllers/UserController")
const ensoureAuthenticated = require("../middleware/ensoureAuthenticated");

const usersRoutes = Router()


const userController = new UserController()

usersRoutes.post("/",  userController.create)
usersRoutes.put("/", ensoureAuthenticated, userController.update)

module.exports = usersRoutes