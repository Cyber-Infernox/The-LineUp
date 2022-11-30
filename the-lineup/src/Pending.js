import TaskList from "./TaskList";
import useFetch from "./useFetch";

const Pending = () => {
  const {
    data: tasks,
    isPending,
    error,
  } = useFetch("http://localhost:8000/tasks");

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {tasks && <TaskList tasks={tasks} title="All Pending Tasks" />}
    </div>
  );
};

export default Pending;
