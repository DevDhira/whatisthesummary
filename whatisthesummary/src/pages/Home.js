import React from 'react'
import { BsNewspaper, BsYoutube } from "react-icons/bs";
import { FaBlog } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <motion.div
      className='w-full h-full'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .5 }}
    >

      <section className="bg-gray-50">
        <div
          className="mx-auto max-w-screen-xl px-4 py-36 lg:flex lg:h-full lg:items-center"
        >
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Consume Content  &nbsp;
              <strong className="font-extrabold text-indigo-700 sm:block my-3">
                That Matters
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl sm:leading-relaxed">
            Way to remember the most important parts without having to read everything again.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-indigo-700 focus:outline-none focus:ring active:bg-indigo-500 sm:w-auto"
                href="#get-started"
              >
                Get Started
              </a>

              <Link
                className="block w-full rounded px-12 py-3 text-sm font-medium text-indigo-600 shadow hover:text-indigo-700 focus:outline-none focus:ring active:text-indigo-500 sm:w-auto"
                to={'/about'}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id='get-started' className="bg-white ">
        <div className="container px-6 py-10 mx-auto">
          <h1 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl ">Explore our <br /> awesome <span className="underline decoration-indigo-500">Summarizers</span></h1>

          <p className="mt-4 text-gray-500 xl:mt-6 ">
            Start Saving your Time
          </p>

          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">

            <motion.div


              className="p-8 space-y-3 border-2 border-indigo-400  rounded-xl">
              <span className="inline-block text-indigo-500 ">
                <FaBlog className='text-3xl font-cold text-indigo-500' />
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize ">Blog Summarizer</h1>

              <p className="text-gray-500 ">
                Lets you summarize any blog post into a simple  & easily readable bullet points. It helps you to get the core idea of that content.
              </p>

              <a href={'/blog-summarizer'} className="inline-flex p-2 animate-bounce text-indigo-500 capitalize transition-colors duration-300 transform bg-indigo-100 rounded-full rtl:-scale-x-100 hover:underline hover:text-indigo-600">
                <motion.svg
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  animate={{
                    rotate: 120, rotate: 0
                  }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 1, scale: 4 },

                  }}

                  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </motion.svg>
              </a>
            </motion.div>

            <div className="p-8 space-y-3 border-2 border-indigo-400  rounded-xl">
              <span className="inline-block text-indigo-500 ">
                <BsNewspaper className='text-3xl font-cold text-indigo-500' />
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize">News Summarizer</h1>

              <p className="text-gray-500">
                Lets you summarize any news article into a simple & easily readable bullet points. With this you don't need to go through the who Article.
              </p>

              <a href={'/news-summarizer'} className="inline-flex p-2 animate-bounce text-indigo-500 capitalize transition-colors duration-300 transform bg-indigo-100 rounded-full rtl:-scale-x-100 hover:underline hover:text-indigo-600">
                <motion.svg

                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  animate={{
                    rotate: 120, rotate: 0
                  }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 1, scale: 4 },

                  }}

                  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </motion.svg>
              </a>
            </div>

            <div className="p-8 space-y-3 border-2 border-indigo-400  rounded-xl">
              <span className="inline-block text-indigo-500 ">
                <BsYoutube className='text-3xl font-cold text-indigo-500' />
              </span>

              <h1 className="text-2xl font-semibold text-gray-700 capitalize">Youtube Summarizer</h1>

              <p className="text-gray-500 ">
                Lets you summarize any Youtube Video into a simple & easily readable bullet points. Don't watch videos that won't provide valuable info to you.

              </p>

              <a href={'/video-summarizer'} className="inline-flex p-2 animate-bounce text-indigo-500 capitalize transition-colors duration-300 transform bg-indigo-100 rounded-full rtl:-scale-x-100 hover:underline hover:text-indigo-600">
                <motion.svg
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  animate={{
                    rotate: 120, rotate: 0
                  }}
                  variants={{
                    visible: { opacity: 1, scale: 1 },
                    hidden: { opacity: 1, scale: 4 },

                  }}

                  xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </motion.svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="tutorial" className="w-full h-full bg-white  flex flex-col gap-5 items-center">
        <h1 className='text-3xl font-semibold text-black' > Here is How it Works.... </h1>
        <hr className='md:my-3 bg-slate-600' />

        <div className='w-full md:w-3/4 mx-auto h-52 md:h-screen mb-20 sm:flex sm:justify-center ' >
          <iframe
            width="80%"
            height="80%"
            src={`https://www.youtube.com/embed/mVshIg-iqnk`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            className='sm:w-full ml-10 sm:h-full lg:mx-auto mb-10'
          />
        </div>
      </section>

    </motion.div>
  )
}
