import { useState } from "react";
import { handleLogin } from "../assets";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <div className="my-3 w-[310px]">
        <div className="w-full mt-3">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            username
          </label>
          <div className="mt-2">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="w-full mt-2">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            password
          </label>
          <div className="mt-2">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={()=>handleLogin(username, password, navigate)}
          className="mt-4 w-full block rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          login
        </button>
        <div className="mt-5">
          don't have account?,{" "}
          <a className="underline decoration-[2px] font-medium text-indigo-600 cursor-pointer">
            Sign up
          </a>
        </div>
      </div>
    </>
  );
};

export default Login;
