import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
const Signup = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 shadow-md ">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm  ">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address *
            </label>
          </div>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="current-email"
              required
              placeholder="Enter your email..."
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              UserName *
            </label>
          </div>
          <div className="mt-2">
            <input
              id="username"
              name="username"
              type="username"
              autoComplete="current-username"
              required
              placeholder="  Enter your name..."
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              password *
            </label>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              placeholder="  Enter your password..."
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="number"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone Number *
            </label>
          </div>
          <div className="mt-2">
            <input
              id="phone-number"
              name="phone-number"
              type="number"
              required
              placeholder="  Enter your phone number..."
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div className=" flex  gap-3 ">
          <div className="flex h-6 items-center">
            <input
              id="candidates"
              name="candidates"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600"
            />
          </div>
          <p className="">Rember Me</p>
        </div>
        <div className="relative gap-2">
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Sign up
            <FaArrowRightLong className="absolutel l-0  ml-3 mt-1.5   flex items-center" />
          </button>
        </div>
      </form>

      <div>
        <p className="mt-4 text-center text-sm text-gray-500">
          Already an account?{" "}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            sign in
          </a>
        </p>
      </div>
      <hr className="mt-3 border-2 shadow-md" />
      <div>
        <p className="mt-2 font-semibold items-center justify-center">
          {" "}
          or sign in with
        </p>
        <div className="flex justify-between mt-4">
          <div className="border-solid border-0  items-center">
            <h4 className="font-semibold ">Login with Google </h4>
          </div>
          <div className="border-0 border-solid items-center  ">
            <h4 className="font-semibold ">Login with Facebook</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Signup
