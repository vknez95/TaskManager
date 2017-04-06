namespace WebUi.Models
{
    public class TaskModel
    {
        static private int taskId = 0;

        public TaskModel()
        {
            TaskId = taskId++;
        }

        public int TaskId { get; private set; }

        public string Description { get; set; }

        public bool IsComplete { get; set; }
    }
}
