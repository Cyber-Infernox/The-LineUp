import { Link } from "react-router-dom";

const CompletedList = ({ tasks, title }) => {
  return (
    <div className="flex-col mx-96 mt-16">
      <div className="pl-1 pb-4 font-bold text-2xl">
        <h2>{title}</h2>
      </div>
      <div className="ml-8">
        {tasks.map(
          (task) =>
            task.Checked && (
              <div className="p-2 pl-1" key={task.id}>
                <Link to={`/tasks/${task.id}`}>
                  <div className="hover:shadow border-black p-3">
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