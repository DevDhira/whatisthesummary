import React from 'react'
import { a } from 'react-router-dom'
import { FaLessThanEqual } from 'react-icons/fa'
import { FiMenu } from 'react-icons/fi'

export default function Nav() {
  return (
    <div className='w-full px-3 py-3 bg-indigo-500 flex justify-between items-center' >
      <div className="hidden md:w-full md:flex md:justify-between md:items-center ">
        <a href={'/'} className='flex gap-2 items-center' >
          <FaLessThanEqual className='text-xl text-white' />

          <h1 className='text-xl font-bold text-white' > WhatIsTheSummary </h1>
        </a>
        <div className="hidden md:flex md:gap-4 md:items-center">
          <a className='text-white hover:text-neutral-600' href={'/about'} > About </a>
          <a className='text-white hover:text-neutral-600' href={'/feedback'} > Feedback </a>
          <a className='text-white hover:text-neutral-600' href={'/blog-summarizer'} > Summarize Blog </a>
          <a className='text-white hover:text-neutral-600' href={'/news-summarizer'} > Summarize News </a>
          <a className='text-white hover:text-neutral-600' href={'/video-summarizer'} > Summarize Video </a>
          
        </div>

        <div className='md:hidden' >
          <div className="dropdown dropdown-left  w-auhref">
            <label tabIndex={0} className="btn m-0 "> <FiMenu /> </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-indigo-900 rounded-box w-auhref">
              <li> <a className='text-white hover:text-neutral-600' href={'/'} > Home </a></li>
              <li><a className='text-white hover:text-neutral-600' href={'/about'} > About </a></li>
              <li><a className='text-white hover:text-neutral-600' href={'/feedback'} > Feedback </a>
              </li>
              <li><a className='text-white hover:text-neutral-600' href={'/blog-summarizer'} > Blog </a>
              </li>
              <li><a className='text-white hover:text-neutral-600' href={'/news-summarizer'} > News </a>
              </li>
              <li><a className='text-white hover:text-neutral-600' href={'/video-summarizer'} > Video </a>
              </li>

            </ul>
          </div>
        </div>
      </div>
      <div className="navbar w-full md:hidden bg-indigo-500">
        <div className="flex-1 px-2 lg:flex-none">
          <a href='/' className='flex gap-2 items-center' >
            <FaLessThanEqual className='text-xl text-white' />

            <h1 className='text-xl font-bold text-white' > WhatIsTheSummary </h1>
          </a>
        </div>
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost rounded-btn"><FiMenu className='text-xl text-white' /></label>
              <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                <li><a className='hover:text-neutral-600' href={'/about'} > About </a></li>
                <li><a className='hover:text-neutral-600' href={'/feedback'} > Feedback </a></li>
                <li><a className='hover:text-neutral-600' href={'/blog-summarizer'} > Blog </a></li>
                <li><a className='hover:text-neutral-600' href={'/news-summarizer'} > News </a></li>
                <li><a className='hover:text-neutral-600' href={'/video-summarizer'} > Video </a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
