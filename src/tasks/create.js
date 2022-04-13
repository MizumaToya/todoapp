// 新規登録処理

const mysql = require("mysql2/promise");
const config = require("../../config.js");

//タスクの新規登録

postCreateTasks = async function(body) {
    let connection = null;
    try {
        connection = await mysql.createConnection(config.dbSetting);
        //sql配置
        const sql =
            "INSERT INTO 'todoapp'.'t_task'('task_name,'category_id') VALUE(?,?,?);";
        let d = [body.taskName,body.deadline,body.category];
        const [rows,fields] = await connection.query(sql,d);

        return rows;
    }   catch(err) {
        console.log(err);
    }   finally {
        connection.end();
    }
};

exports.postCreateTasks = this.postCreateTasks;