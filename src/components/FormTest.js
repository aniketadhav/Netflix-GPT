import React from "react";
import { useFormik } from "formik";

const FormTest = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(JSON.stringify(values, values?.firstName));
    },
  });

  return (
    <div className="bg-slate-500 align-middle items-center w-100 h-96">
      <h1 className="from-neutral-300 text-2xl align-middle">React Formik</h1>
      <div className="bg-slate-950-50 align-middle items-center w-100 h-96">
        <form className="w-full max-w-sm" onSubmit={formik.handleSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-full-name"
              >
                Full Name
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-500 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-full-name"
                type="text"
                name="firstName"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
            </div>
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                htmlFor="inline-password"
              >
                Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="inline-password"
                type="password"
                name="password"
                placeholder="**********"
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/2"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormTest;
