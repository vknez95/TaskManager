(function() {

    var app = angular.module("appMain");

    var repoService = function($http) {

        var getTasksSuccess = function(response) {
            return response.data;
        }

        var getTasksFail = function() {
            return "Failed to retrieve tasks."
        }

        var getTasks = function() {
            return $http
                .get("/Api/GetTasks")
                .then(getTasksSuccess, getTasksFail);
        };

        var addTaskSuccess = function(response) {
            return response.data;
        }

        var addTaskFail = function(error) {
            return error.data;
        }

        var addTask = function(task) {
            return $http
                .post("/Api/AddTask", task)
                .then(addTaskSuccess, addTaskFail);
        };

        var saveTaskSuccess = function(response) {
            return response.data;
        }

        var saveTaskFail = function(error) {
            return error.data;
        }

        var saveTask = function(task) {
            return $http
                .post("/Api/SaveTask", task)
                .then(saveTaskSuccess, saveTaskFail);
        };

        var deleteTaskSuccess = function(response) {
            return response.data;
        }

        var deleteTaskFail = function(error) {
            return error.data;
        }

        var deleteTask = function(taskId) {
            return $http
                .delete("/Api/DeleteTask/" + taskId)
                .then(deleteTaskSuccess, deleteTaskFail);
        };

        return {
            getTasks: getTasks,
            addTask: addTask,
            saveTask: saveTask,
            deleteTask: deleteTask
        };
    };

    app.factory("repoService", repoService);

}());