(function() {
    "use strict";

    angular.module("appMain")
        .controller("toDoListController", toDoListController);

    function toDoListController(repoService) {
        var vm = this;

        vm.tasks = [];

        vm.newTask = {};

        var getTasksSuccess = function(tasks) {
            angular.copy(tasks, vm.tasks);
        }

        var getTasksFail = function(error) {}

        var getTasksFinally = function() {};

        repoService
            .getTasks()
            .then(getTasksSuccess, getTasksFail)
            .finally(getTasksFinally);

        var addTaskSuccess = function(task) {
            vm.tasks.push(task);
        }

        var addTaskFail = function(error) {}

        var addTaskFinally = function() {};

        vm.addTask = function() {
            repoService
                .addTask(vm.newTask)
                .then(addTaskSuccess, addTaskFail)
                .finally(addTaskFinally);
        };

        var saveTaskSuccess = function(message) {}

        var saveTaskFail = function(error) {}

        var saveTaskFinally = function() {};

        vm.completeTask = function(task) {
            repoService
                .saveTask(task)
                .then(saveTaskSuccess, saveTaskFail)
                .finally(saveTaskFinally);
        };

        var deleteTaskSuccess = function(taskId) {
            var index = 0;

            angular.forEach(vm.tasks, function(value, key) {
                if (value.taskId === taskId) {
                    index = key;
                }
            });

            vm.tasks.splice(index, 1);
        }

        var deleteTaskFail = function(error) {}

        var deleteTaskFinally = function() {};

        vm.deleteTask = function(taskId) {
            repoService
                .deleteTask(taskId)
                .then(deleteTaskSuccess(taskId), deleteTaskFail)
                .finally(deleteTaskFinally);
        };

        vm.descriptionAdded = function(task) {
            repoService
                .saveTask(task)
                .then(saveTaskSuccess, saveTaskFail)
                .finally(saveTaskFinally);
        };
    }
})();