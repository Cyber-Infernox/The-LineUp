import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between mx-96 mt-4 mb-3">
        <h1 className="text-2xl text-blue-700 pt-1">The LineUp__</h1>

        <ul className="flex text-lg">
          <li className="py-1 px-2 rounded-lg text-gray-500 cursor-pointer hover:text-black">
            <Link to={"/"}>Pending</Link>
          </li>
          <li className="py-1 px-2 ml-4 rounded-lg text-gray-500 cursor-pointer hover:text-black">
            <Link to={"/completed"}>Completed</Link>
          </li>
          <li className="bg-blue-600 text-white ml-6 py-1 px-2 border rounded-lg cursor-pointer hover:text-gray-700">
            <Link to={"/create"}>New</Link>
          </li>
        </ul>
      </nav>
      <hr className="mx-96" />
    </div>
  );
};

export default Navbar;
