import { logoIcon } from "../assets"

function Navbar({open}) {
  return (
    <div className="pt-4">
      <div className="flex justify-between 	">
        <div className="flex justify-center items-center text-2xl font-medium ">
          {logoIcon} <span className="mt-[-10px]">fun travel</span>
        </div>
        <button
          onClick={open}
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Add place
        </button>
      </div>
    </div>
  );
}

export default Navbar