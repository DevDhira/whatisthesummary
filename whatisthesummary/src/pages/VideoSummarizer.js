import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { LineWave } from 'react-loader-spinner'
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { FcAdvance } from "react-icons/fc";
import { useLocation } from 'react-router';
import ReCAPTCHA from "react-google-recaptcha";
import 'react-toastify/dist/ReactToastify.css';


export default function VideoSummarizer() {

  const [videoUrl, setVideoUrl] = useState('')
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
    if (videoUrl !== '' && verifyHuman) {
      submitUrl()

    }

    else {
      toast.error('Not a Video URL', {
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


  function youtubeUrlParser(url) {

    var timeToSec = function (str) {
      var sec = 0;
      if (/h/.test(str)) { sec += parseInt(str.match(/(\d+)h/, '$1')[0], 10) * 60 * 60; }
      if (/m/.test(str)) { sec += parseInt(str.match(/(\d+)m/, '$1')[0], 10) * 60; }
      if (/s/.test(str)) { sec += parseInt(str.match(/(\d+)s/, '$1')[0], 10); }
      return sec;
    };

    var videoId = /^https?\:\/\/(www\.)?youtu\.be/.test(url) ? url.replace(/^https?\:\/\/(www\.)?youtu\.be\/([\w-]{11}).*/, "$2") : url.replace(/.*\?v\=([\w-]{11}).*/, "$1");
    var videoStartTime = /[^a-z]t\=/.test(url) ? url.replace(/^.+t\=([\dhms]+).*$/, '$1') : 0;
    var videoStartSeconds = videoStartTime ? timeToSec(videoStartTime) : 0;
    var videoShowRelated = ~~/rel\=1/.test(url);

    return {
      id: videoId,
      startString: videoStartTime,
      startSeconds: videoStartSeconds,
      showRelated: videoShowRelated
    };

  };


  const submitUrl = async () => {
    setLoading(true)

    let ytParser = youtubeUrlParser(videoUrl)

    if (String(ytParser.id).length !== 11) {
      toast.error(
        "Youtube Video Url Not Valid",
        {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,         
          theme: "light",
        }
      )
    }
    //turM5fTBqxo
    else{
      const data = {
        id: String(ytParser.id)
      }
  
      console.log(data)
      await axios.post('http://127.0.0.1:8000/api/youtube_video_summarize/', data)
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
   
  }


  return (
    <div className='h-screen w-full p-10 items-start' >

    <div >
      <h1 className='w-full text-center my-5 text-2xl font-bold' > Youtube Video Summarizer </h1>
      <div className='flex flex-col lg:flex-row gap-4 w-5/6 lg:w-1/2 mx-auto' >


        <input
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          type="text"
          className='px-2 py-2 w-full mx-auto rounded border focus:ring ring-indigo-300 outline-none text-slate-700'
          placeholder='Paste Youtube Video URL'
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

  </div>
  )
}
