import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {
  const { id } = useParams();
  const {
    data: task,
    error,
    isPending,
  } = useFetch("http://localhost:8000/tasks/" + id);
  const navigate = useNavigate();

  const handleClick = () => {
    fetch("http://localhost:8000/tasks/" + task.id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="pl-1 mx-96 mt-16">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {task && (
        <article>
          <div className="font-bold">
            <h2 className="text-2xl mb-2">{task.title}</h2>
            <p className="mb-4">Submit by {task.deadline}</p>
          </div>
          <div className="pl-12 pt-2 pb-6">{task.body}</div>
          <button
            className="bg-blue-500 ml-1 hover:text-gray-500 text-white py-1 px-2 rounded-lg"
            onClick={handleClick}
          >
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default TaskDetails;
