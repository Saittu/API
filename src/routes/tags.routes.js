const { Router } = require ("express")

const TagsController = require("../controllers/TagsController")

const ensoureAuthenticated = require("../middleware/ensoureAuthenticated");

const tagsRoutes = Router()

const tagsController = new TagsController()

tagsRoutes.get("/", ensoureAuthenticated, tagsController.index)


module.exports =tagsRoutes