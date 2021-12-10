const coursesController = require("../../controllers/coursesController.js");
const router = require("express").Router();

// Matches with "/api/post"
router
  .route("/")
  .get(coursesController.findAll)
  .post(coursesController.create);
  
// Matches with "/api/posts/:id"
  router
  .route("/:id")
  .get(coursesController.findById)
  .put(coursesController.update)
  .delete(coursesController.remove);

module.exports = router;
