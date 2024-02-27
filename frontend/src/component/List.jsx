import React from "react";
import { inputIcon } from "../assets";

const List = () => {
  return (
    <div className="mt-6">
      please select your options, {""}
      <a
        href="#"
        className="underline decoration-[2px] font-medium text-blue-400"
      >
        Help me to choose
      </a>
      <div class="flex space-x-4 mt-4">
        <select class="form-select px-4 py-3 rounded w-full">
          <option value="value1">option one</option>
          <option value="value1">option one</option>
          <option value="value1">option one</option>
          <option value="value1">option one</option>
          <option value="value1">option one</option>
        </select>
        <select class="form-select px-4 py-3 rounded w-full">
          <option value="value1">option one</option>
          <option value="value1">option one</option>
          <option value="value1">option one</option>
          <option value="value1">option one</option>
          <option value="value1">option one</option>
        </select>
      </div>
      <div className="my-5">
        <a
          href="#"
          className="underline decoration-[2px] font-medium text-blue-400"
        >
          clear filter
        </a>
        {""} selected filter
      </div>
    </div>
  );
};

export default List;
