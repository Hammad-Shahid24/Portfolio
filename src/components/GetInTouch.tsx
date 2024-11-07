import { FC } from "react";

const GetInTouch: FC = () => {
  return (
    <div className="w-full bg-slate-800">
      <div className="mx-auto max-w-screen-2xl w-8/12 py-16 ">
        <div className="flex flex-col items-center gap-y-4 bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl text-white text-center font-josefin">
            Let's get in touch
          </h1>
          <input
            className="w-1/2 py-2 px-4 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="text"
            placeholder="Your Name..."
          />
          <input
            className="w-1/2 py-2 px-4 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            type="email"
            placeholder="Your Email..."
          />
          <textarea
            className="w-1/2 py-8 px-4 rounded bg-white bg-opacity-20 text-white placeholder-white focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Your Message..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
