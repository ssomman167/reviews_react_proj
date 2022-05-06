import data from './data'
import { useState } from 'react';
import "./App.css"
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';


function Review() {
  const [index,setIndex]=useState(0)
  const people=data[index]

  const getindex=(index)=>{

    if(index>=data.length)
    return 0
    else if(index<0)
    return data.length-1
    else
    return index

  }
  const goforward=()=>{
    
    setIndex((index)=>{
      return getindex(index+1)
    })
    

  }

  const gobackward=()=>{
    
    // setIndex((index)=>{
    //      return getindex(index-1)
    // })

    setIndex(getindex(index-1))
  }

  const surprise=()=>{
    let supind=Math.floor(Math.random()*data.length)
    if(supind==index)
    supind=index+1

    setIndex(getindex(supind))
  }



  return (
    <div>
    
     
    
        
          <div>
          <h1>{people.name}</h1>
          <h3>{people.job}</h3>
          <img className="image" src={people.image}></img>
       
          </div>
          <br/>
          <div className='leftright'>
          <button onClick={gobackward} className="btn-go"><FaChevronLeft/></button>
          <button onClick={goforward} className="btn-go"><FaChevronRight/></button>
          </div>
          <br/>
          <button className='btn-random' onClick={surprise}>Surprise me</button>
    
    </div>
  )
}

export default Review