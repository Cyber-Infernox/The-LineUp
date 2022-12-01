import CompletedList from "./CompletedList";
import useFetch from "./useFetch";

const Completed = () => {
  const {
    data: tasks,
    isPending,
    error,
  } = useFetch("http://localhost:8000/tasks");

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {tasks && <CompletedList tasks={tasks} title="All Completed Tasks" />}
    </div>
  );
};

export default Completed;
