import React from 'react';
import { BsTelephoneFill, BsEnvelopeFill, BsGeoAltFill, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Contact = () => {
    return (
      <div>
          <section className="bg-gradient-to-b from-slate-900 to-slate-950 pb-20 pt-16 px-10">
            <div className="flex flex-col md:flex-row md:space-x-6 md:space-y-0 justify-center">
              <div className="flex flex-col justify-between md:w-96">
                <div>
                  <h1 className="font-bold text-4xl tracking-wide">
                    Contact Me
                  </h1>
                  <p className="pt-2 pb-8 xl:pb-0">
                    Thanks for checking out my website! If you wish to contact me for any reason, you can do so using any of my linked 
                    communications below or by the form.
                  </p>
                </div>
                <div className="flex flex-col space-y-4 md:space-y-6">
                  <div>
                    <div className="inline-flex mr-2 items-center text-sky-500">
                      <BsTelephoneFill className="text-100 text-xl"></BsTelephoneFill>
                    </div>
                    <span>+(724) 877 7607</span>
                  </div>
                  <div>
                    <div className="inline-flex mr-2 items-center text-sky-500">
                      <BsEnvelopeFill className="text-100 text-xl"></BsEnvelopeFill>
                    </div>
                    <span>michaelctripp@gmail.com</span>
                  </div>
                  <div>
                    <div className="inline-flex mr-2 items-center text-sky-500">
                      <BsGeoAltFill className="text-100 text-xl"></BsGeoAltFill>
                    </div>
                    <span>New Wilmington, PA</span>
                  </div>
                </div>
                <div className="flex mt-8 md:mt-0 space-x-8 text-2xl text-gray-400">
                  <a className="transition-all duration-300 hover:scale-110 hover:text-gray-300" href="https://www.linkedin.com/in/michaelctripp/" target="_blank"><BsLinkedin /></a>
                  <a className="transition-all duration-300 hover:scale-110 hover:text-gray-300" href="https://github.com/Mctripp10" target="_blank"><BsGithub /></a>
                  <a className="transition-all duration-300 hover:scale-110 hover:text-gray-300" href="https://www.instagram.com/mc_fold/" target="_blank"><BsInstagram /></a>
                </div>
              </div>
              <div className="mt-10">
                <div className="bg-gray-900 rounded-xl shadow-lg p-8 text-gray-300 md:w-96">
                  <form 
                    action="https://formspree.io/f/mqkrpjkb"
                    method="POST"
                    className="flex flex-col space-y-4">
                    <div>
                      <label htmlFor="" className="text-sm">Your name</label>
                      <input 
                        type="text"
                        name="name"
                        placeholder="Your name" 
                        className="bg-gray-900 ring-1 ring-gray-600 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-sky-500" 
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="text-sm">Email Address</label>
                      <input 
                        type="email"
                        name="email"
                        placeholder="Email Address" 
                        className="bg-gray-900 ring-1 ring-gray-600 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-sky-500" 
                      />
                    </div>
                    <div>
                      <label className="text-sm">Message</label>
                      <textarea 
                        name="message"
                        placeholder="Message"
                        rows="4"
                        className="bg-gray-900 ring-1 ring-gray-600 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-sky-500" 
                      ></textarea>
                    </div>
                      <button
                        type="submit"
                        className="inline-block self-end bg-gradient-to-l from-sky-500 to-violet-600 font-bold rounded-lg p-[1px] uppercase text-sm
                        transition-all duration-300 hover:bg-gray-900"
                      >
                        <div className="h-full w-full transition-all duration-500 hover:bg-gradient-to-r hover:from-slate-900 hover:via-violet-600 hover:to-sky-500 bg-gray-900 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg px-6 py-2">
                          Send Message
                        </div>
                      </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
      </div>
    )
}

export default Contact;