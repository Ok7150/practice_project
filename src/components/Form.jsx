import React from "react";

const Form = () => {
  return (
    <div class="w-full max-w-xs mt-20 m-auto ">
      <form class="bg-white shadow-md rounded px-10 pt-8 pb-10 mb-4">
        <div class="mb-4">
          <label
            class="block text-gray-700 text-bold font-bold mb-4"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            required          
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-bold font-bold mb-4"
            for="email"
          >
            Email
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            required          
          />
        </div>
        <div class="mb-6">
          <label
            class="block text-gray-700 text-bold font-bold mb-4"
            for="password"
          >
            Password
          </label>
          <input
            class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <div class="flex items-center justify-between">
          <button
            class=" hover:bg-blue-700 text-black font-bold py-0 px-1 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            class="inline-block align-baseline font-bold text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Form;
