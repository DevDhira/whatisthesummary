import React from 'react'
import { Link } from 'react-router-dom'



export default function About() {
  return (
    <div className='flex flex-col h-screen items-center justify-start' >
      <div className='p-10 flex flex-col gap-3 items-center' >

        <h1 className='text-lg lg:text-2xl font-bold text-center' > About 🌟 </h1>
        <hr />
        <p className='w-5/6 lg:w-3/6 text-justify text-lg' > WhatIsTheSummary is a Collection of Summarization Tools which helps users to Summarize Text(Blog & News) and Video(Youtube) content to Know if it is Worth Spending Time or Get some Outline Ideas from that Content.
          This tool is currently in the development and it's online for your Feedback.   </p>
        <p className='w-5/6 lg:w-3/6 text-justify text-lg' >If you have any comments or found some errors in this tool. Please Don't forget to <Link className='text-indigo-600 hover:text-black font-semibold' to={'/feedback'} >provide your valuable Feedbacks !!</Link>  .</p>
        
      </div>



    </div>
  )
}
