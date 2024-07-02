"use client";
import React from "react";
import { BackgroundBeams } from "./ui/BackgroundBeams";
import {
  FaMapMarkerAlt,
  FaRegEnvelope,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";
import MagicButton from "./MagicButton";
import { FaLocationArrow } from "react-icons/fa6";

export function ContantMe() {
  return (
    <div
      className="py-16 h-[40rem] rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased"
      id="contact"
    >
      <div className="w-full mx-auto  relative h-full">
        <h1 className="relative z-10 heading  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Contact with me
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Feel free to reach out for any inquiries, collaborations, or project
          discussions. I&apos;m always open to new opportunities and excited to
          connect with like-minded professionals. Let&apos;s work together to
          create something amazing!
        </p>

        <div className="container mt-8 absolute z-10 top-0 left-0 mx-auto min-h-screen bg-transparent text-white flex items-center justify-center w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full  p-8">
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-gray-400 w-6 h-6 mr-2" />
                <div>
                  <h3 className="text-lg font-semibold">Address</h3>
                  <p>Dhaka, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaClock className="text-gray-400 w-6 h-6 mr-2" />
                <div>
                  <h3 className="text-lg font-semibold">Freelance</h3>
                  <p>Available Right Now</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaRegEnvelope className="text-gray-400 w-6 h-6 mr-2" />
                <div>
                  <h3 className="text-lg font-semibold">Email</h3>
                  <p>mohonsaha108@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaPhoneAlt className="text-gray-400 w-6 h-6 mr-2" />
                <div>
                  <h3 className="text-lg font-semibold">Phone</h3>
                  <p>+880 1609-185463</p>
                </div>
              </div>
            </div>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className=" border border-gray-700 rounded-lg p-2 w-full focus:outline-none focus:border-gray-500 bg-transparent"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className=" border border-gray-700 rounded-lg p-2 w-full focus:outline-none focus:border-gray-500 bg-transparent"
                  required
                />
              </div>
              <input
                type="email"
                placeholder="Your Email Address"
                className=" border border-gray-700 rounded-lg p-2 w-full focus:outline-none focus:border-gray bg-transparent"
                required
              />
              <textarea
                placeholder="Your Message"
                className=" border border-gray-700 rounded-lg p-2 w-full h-32 focus:outline-none focus:border-gray bg-transparent"
                required
              ></textarea>
              {/* <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 rounded-lg p-2 w-full"
              >
                SEND MESSAGE
              </button> */}

              {
                <MagicButton
                  title="SEND MESSAGE"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              }
            </form>
          </div>
        </div>
      </div>
      <BackgroundBeams className="bg-black-100 w-[100vw] -left-10" />
    </div>
  );
}
