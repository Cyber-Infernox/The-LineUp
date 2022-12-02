import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [deadline, setDeadline] = useState();
  const [isPending, setIsPending] = useState(false);
  const Checked = false;
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const task = { title, body, deadline, Checked };

    setIsPending(true);

    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    }).then(() => {
      setIsPending(false);
      navigate("/");
    });
  };

  return (
    <div className="mx-96 px-32 py-12">
      <div className="px-8 py-4 pt-2">
        <h2 className="text-2xl font-bold pb-3 pt-3 rounded-t-xl text-center bg-black text-white">
          Add a new Task
        </h2>
        <form
          className="flex flex-col bg-gray-300 pt-4 pb-5 rounded-b-xl"
          onSubmit={handleSubmit}
        >
          <label className="pb-2 pl-10 text-lg font-bold">Task title:</label>
          <input
            className="mb-3 border rounded-lg mx-10 p-2 pl-3"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label className="pb-2 pl-10 text-lg font-bold">Task body:</label>
          <textarea
            className="mb-3 border rounded-lg mx-10 p-2 pl-3"
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <label className="pb-2 pl-10 text-lg font-bold">Task Deadline:</label>
          <input
            className="mb-3 border rounded-lg mx-10 p-2 pl-3"
            type="date"
            required
            value={deadline}
            onChange={(e) => setDeadline(e.target.value)}
          />

          <div className="flex justify-center mt-2">
            {!isPending && (
              <button className="bg-black text-white hover:text-gray-500 px-3 py-2 border border-black rounded-xl">
                Add Task
              </button>
            )}
            {isPending && (
              <button
                className="bg-blue-600 text-white px-3 py-2 hover:text-gray-500 border border-black rounded-xl"
                disabled
              >
                Adding task...
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
