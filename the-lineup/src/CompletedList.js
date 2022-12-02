import { Link } from "react-router-dom";

const CompletedList = ({ tasks, title }) => {
  return (
    <div className="flex-col mx-96 mt-3">
      <div className="pb-2 pt-2 font-bold text-2xl bg-black text-white rounded-t-xl pl-4">
        <h2>{title}</h2>
      </div>
      <div className="p-2 pl-8 bg-gray-300 rounded-b-xl">
        {tasks.map(
          (task) =>
            task.Checked && (
              <div className="p-2 pl-1" key={task.id}>
                <Link to={`/tasks/${task.id}`}>
                  <div className="hover:shadow rounded-xl hover:bg-gray-400 p-3">
                    <h2 className="font-bold text-lg pb-1">{task.title}</h2>
                    <p>Deadline: {task.deadline}</p>
                  </div>
                </Link>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default CompletedList;
