import { useNavigation, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const TaskDetails = () => {
  const { id } = useParams();
  const {
    data: task,
    error,
    isPending,
  } = useFetch("http://localhost:8000/tasks/" + id);
  const Navigate = useNavigation();

  const handleClick = () => {
    fetch("http://localhost:8000/tasks/" + task.id, {
      method: "DELETE",
    }).then(() => {
      Navigate("/");
    });
  };

  return (
    <div>
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {task && (
        <article>
          <h2>{task.title}</h2>
          <p>Submit by {task.deadline}</p>
          <div>{task.body}</div>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}
    </div>
  );
};

// const TaskDetails = () => {
//   return (
//     <div>
//       <h1>Hello</h1>
//       <p>How r u?</p>
//     </div>
//   );
// };

// export default TaskDetails;

export default TaskDetails;
