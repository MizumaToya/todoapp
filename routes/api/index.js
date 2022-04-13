var express = require("express");
var router = express.Router();

const create  = require("../../src/tasks/create.js");

/* 商品一覧を取得するルーティング */
router.post("/tasks", function (req, res, next) {
  console.log(req.body);
  const createTask = create.postCreateTasks(req,body);
  res.send(createTask);
});

/*１件の商品情報を取得するルーティング 
router.get("/items/:id", function (req, res, next) {
  const item = items.getItem(req.params.id);
  res.send(item);
});
*/

module.exports = router;
