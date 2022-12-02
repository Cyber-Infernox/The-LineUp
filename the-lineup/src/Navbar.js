import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex justify-between mx-96 mt-4 mb-3 bg-black rounded-t-xl py-3 px-4">
        <Link to={"/"}>
          <h1 className="text-2xl hover:text-gray-200 text-gray-400 pt-1">
            <span className="text-white">The</span> LineUp__
          </h1>
        </Link>

        <ul className="flex text-lg">
          <li className="py-1 px-2 rounded-lg text-gray-400 cursor-pointer hover:text-gray-200">
            <Link to={"/"}>Pending</Link>
          </li>
          <li className="py-1 px-2 ml-4 rounded-lg text-gray-400 cursor-pointer hover:text-gray-200">
            <Link to={"/completed"}>Completed</Link>
          </li>
          <li className="bg-gray-300 text-black ml-6 py-1 px-2 border-black rounded-lg cursor-pointer hover:text-gray-500">
            <Link to={"/create"}>New</Link>
          </li>
        </ul>
      </nav>
      <hr className="mx-96" />
    </div>
  );
};

export default Navbar;
