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

  const dateComparison = (a, b) => {
    return new Date(a.deadline) - new Date(b.deadline);
  };

  return (
    <div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      <div className="xl:mx-96 sm:mx-0 text-center text-lg mt-4 p-4 flex flex-col justify-center place-items-center">
        <h2 className="mb-2 font-Calli text-xl font-semibold">{quote}</h2>
        <small className="text-center text-lg font-Nerk">--- {author}</small>
      </div>
      <hr className="sm:mx-20 xl:mx-96" />
      {tasks && (
        <CompletedList
          tasks={tasks.sort(dateComparison)}
          title="All Completed Tasks"
        />
      )}
    </div>
  );
};

export default Completed;
