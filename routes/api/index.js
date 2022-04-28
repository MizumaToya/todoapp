var express = require("express");
var router = express.Router();

const create  = require("../../src/tasks/create.js");
const tasks = require("../../src/task.js");

/* 商品一覧を取得するルーティング */
router.post("/tasks",async function (req, res, next) {
  console.log(req.body);
  const postTask = await tasks.postTasks(req,body);
  res.send(postTask);
});

/* タスク一覧を取得するルーティング*/
router.get("/tasks", async function (req, res, next) {
  const getTasks = await tasks.getTasks();
  res.send(getTasks);
});

/* タスク一覧を削除するルーティング */
router.delete("/tasks/:id", async function (req, res, next) {
  const deleteTasksId = await tasks.deleteTasksId(req.params.id);
  res.send(deleteTasksId);
});

/* タスクを1件取するルーティング */
router.get("/tasks/:id", async function (req, res, next) {
  console.log("aaa")
  const getTasksId = await tasks.getTasksId(req.params.id);
  res.send(getTasksId);
});

/* タスクを1件更新するルーティング */
router.patch("/tasks/:id", async function (req, res, next) {
  console.log(req.param.id);
  const patchTasksId = await tasks.patchTasksId(req.params.id, req.body);
  res.send(patchTasksId);
});

//１件の商品情報を取得するルーティング 
router.get("/items/:id", function (req, res, next) {
  const item = items.getItem(req.params.id);
  res.send(item);
});

module.exports = router;
