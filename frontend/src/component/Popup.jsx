import { logoIcon, crossIcon } from "../assets";
const Popup = ({ open, close, children }) => {
  return (
    <div>
      {open && (
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 bg-white rounded shadow-lg">
          <div className="flex justify-between">
            <div className="flex justify-center items-center  text-2xl font-medium ">
              {logoIcon} <span className="mt-[-10px]">fun travel</span>
            </div>
            <button className="" onClick={close}>
              {crossIcon}
            </button>
          </div>
          {children}
        </div>
      )}
    </div>
  );
};

export default Popup;
