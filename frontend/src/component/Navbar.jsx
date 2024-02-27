import { logoIcon } from "../assets"

function Navbar() {
  return (
    <div className="pt-4 ">
        <div className="flex justify-between 	">
          <div className="flex justify-center items-center text-2xl font-medium ">
            {logoIcon} <span className="mt-[-10px]">fun travel</span>
          </div>
          <button className="btn-blue">Add place</button>
        </div>
    </div>
  );
}

export default Navbar