import React from "react";

export default function Form() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center p-20 mt-30 lg:px-28 w-screen">
      <h2 className="text-2xl lg:text-4xl font-bold ">Get In Touch </h2>
      <h4 className="text-sm lg:text-md text-transparent bg-clip-text bg-gradient-to-r from-[#4FC3F7] to-black dark:to-white">
       Lets work together
      </h4>
      <form
        action="https://formsubmit.co/abdhulla.code@gmail.com"
        method="POST"
        className="space-y-5 mt-10 w-full lg:w-2xl "
      >
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://abdhulla-fronend-dev.netlify.app/thanks"
        />

        <label className="block">
          <span className="text-sm font-bold text-[#282938] dark:text-white">
            Name
          </span>
          <input
            type="text"
            name="name"
            required
            className="w-full mt-1 p-3 border rounded-md   placeholder-gray-400"
            placeholder="Your name"
          />
        </label>

        <label className="block">
          <span className="text-sm font-bold text-[#282938] dark:text-white">
            Email
          </span>
          <input
            type="email"
            name="email"
            required
            className="w-full mt-1 p-3 border rounded-md  placeholder-gray-400"
            placeholder="you@example.com"
          />
        </label>
        <label className="block">
          <span className="text-sm font-bold text-[#282938] dark:text-white">
            Message
          </span>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full mt-1 p-3 border rounded-md  placeholder-gray-400"
            placeholder="Your message..."
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-full mt-2 p-3 rounded-md text-white dark:text-black bg-gray-800 dark:bg-white font-bold hover:bg-gray-900 dark:hover:bg-gray-200 transition"
        >
          Get in Touch
        </button>
      </form>
    </div>
  );
}
