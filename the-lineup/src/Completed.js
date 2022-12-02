import CompletedList from "./CompletedList";
import useFetch from "./useFetch";

const Completed = () => {
  const {
    data: tasks,
    isPending,
    error,
    quote,
    author,
  } = useFetch("http://localhost:8000/tasks");

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <div className="mx-96 text-lg mt-4 text-center p-4 flex flex-col justify-center place-items-center">
        <h2 className="mb-2 font-Calli text-xl font-semibold">{quote}</h2>
        <small className="ml-96 text-lg font-Nerk">--- {author}</small>
      </div>
      {tasks && <CompletedList tasks={tasks} title="All Completed Tasks" />}
    </div>
  );
};

export default Completed;
