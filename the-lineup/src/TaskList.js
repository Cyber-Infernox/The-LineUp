import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const TaskList = ({ tasks, title }) => {
  const navigate = useNavigate();

  return (
    <div className="flex-col mx-96 mt-16">
      <div className="pl-1 pb-4 font-bold text-2xl">
        <h2>{title}</h2>
      </div>
      <div className="ml-8">
        {tasks.map(
          (task) =>
            !task.Checked && (
              <div
                className="p-2 hover:shadow pl-1 flex justify-between items-center mb-1"
                key={task.id}
              >
                <Link to={`/tasks/${task.id}`}>
                  <div className="p-3">
                    <h2 className="font-bold text-lg pb-1">{task.title}</h2>
                    <p>Deadline: {task.deadline}</p>
                  </div>
                </Link>
                <div>
                  <button
                    onClick={() => {
                      task.Checked = true;
                      navigate("/");
                    }}
                    className="bg-blue-500 hover:text-gray-500 text-white px-2 py-2 mr-3 rounded-xl"
                  >
                    Completed
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default TaskList;
