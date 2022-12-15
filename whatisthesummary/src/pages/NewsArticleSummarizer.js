import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { LineWave } from 'react-loader-spinner'
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { FcAdvance } from "react-icons/fc";
import { useLocation } from 'react-router';
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function News() {


  const [newsUrl, setNewsUrl] = useState('')
  const [loading, setLoading] = useState(false)
  const [summary, setSummary] = useState([])

  const [verifyHuman, setVerifyHuman] = useState(false);
  const captcha = useRef()

  const { pathname } = useLocation();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const onChange = (value) => {
    if (value) {
      setVerifyHuman(true)
    }
  }

  const captchSubmit = () => {
    if (newsUrl !== '' && verifyHuman) {
      submitUrl()

    }

    else {
      toast.error('Not a Valid URL', {
        position: "top-right",
        autoClose: 500,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
        });
    }
  }

  const expire = () => {
    captcha.current.reset()
  }



  const submitUrl = async () => {
    setLoading(true)
    const data = {
      url: newsUrl
    }

    await axios.post('http://127.0.0.1:8000/api/news_summarize/', data)
      .then(response => {
        console.log(response.data)
      let sum = response.data.split(".")     
        let sum_list = []
        sum.map((s)=>{
        if(s!== ''){
          sum_list.push(s)
        }
         
        setSummary(sum_list)

         })
         console.log(summary)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setLoading(false)
      })

  }

  return (
    <div className='h-screen w-full p-10 items-start' >

      <div >
        <h1 className='w-full text-center my-5 text-2xl font-bold' > News Article Summarizer </h1>
        <div className='flex flex-col lg:flex-row gap-4 w-5/6 lg:w-1/2 mx-auto' >


          <input
            value={newsUrl}
            onChange={(e) => setNewsUrl(e.target.value)}
            type="text"
            className='px-2 py-2 w-full mx-auto rounded border focus:ring ring-indigo-300 outline-none text-slate-700'
            placeholder='Paste News Article URL'
            required
          />
         
         
         <label htmlFor="my-modal" className="btn bg-indigo-600">Get Summary</label>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <ReCAPTCHA
      ref={captcha}
      onExpired={expire}
      className='w-full mt-20 lg:mt-10 mx-auto'
      sitekey="6LeyDFwjAAAAADCQpuoN7aE58Np-xuqjLTChXeu3"
      onChange={onChange}
    />

    <div className="modal-action">
      <label htmlFor="my-modal" className="btn bg-red-500">Cancel</label>

      <label htmlFor="my-modal" onClick={captchSubmit} className="btn bg-indigo-600">Proceed</label>
    </div>
  </div>
</div>


        </div>


      </div>
      <div className='w-full lg:w-1/2 my-10 mx-auto flex justify-center' >
        { loading
        ?
        <div>
          <LineWave
            color="red"
            firstLineColor="blue"
            middleLineColor="green"
            lastLineColor="grey"
          />
        </div>  
        :     <div className='h-1/2' >
          {summary.length 
          ? <div><h1 className='my-3 text-xl font-bold text-center' > Summary </h1>
            <div className='h-96 overflow-auto overflow-x-hidden' >
            <div>{summary.map((s, index)=>{
            return <div key={index} className='flex gap-3 items-start my-3' > <div className='h-auto w-auto' ><FcAdvance  className='text-xl pt-1' /></div> {String(s)}. </div>
          })}</div>
            </div>
          </div>
          :<h1 className='opacity-30' > Your Summary will Appear Here </h1>
          }
        </div>

        }
      </div>
      <ToastContainer/>

    </div>
  )
}

