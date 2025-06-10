import React, { Component } from 'react'
import leftMainText from '../assets/left_main_text.svg';
import centerMain from '../assets/center-mid.png';
export default class mainpage extends Component {
  render() {
    return (
      <div style={{backgroundColor:'#F0ECE8'}} className='w-screen h-screen'>
        <div className='grid gap-4 grid-cols-12 z-10 w-screen  p-10'>
            
            <div className=' col-span-4 min-h-100 h-[400px] w-[95%] flex flex-wrap justify-end align-top'>
                <div className='m-4'>
                    <img src={leftMainText} alt="Law Lens Logo" className="w-80  " />
                </div>
                <div className='flex justify-end mt-10'>
                    <p className='text-left m-4 w-[75%] justify-end '>
                        Describe What Happened.  We'll instantly show you the laws that protect you. Empower yourself with knowledge, clarity, and confidence because knowing your rights changes everything.
                    </p>

                </div>

            </div>
            <div className='  col-span-5 min-h-100 h-[700px] w-[95%] grid'>
                
                    <div className='w-auto '>
                        <img src={centerMain} alt="Law Lens Logo " className="  w-[100%] h-[100%] mb-50px " />
                    </div>
                    
                        
                    
                    

                
            </div>
            <div className='col-span-3 min-h-100 w-[95%]'>
                <div className='flex justify-start mt-10'>
                    <p className='text-left m-4 w-[75%] justify-center '>
                        Tell Us What You Faced.  We'll quickly guide you to the laws that support you. Take control with clear, reliable information—because understanding your legal rights is the first step toward justice, safety, and self-respect.
                    </p>

                </div>

            </div>
        </div>

        

      </div>
    )
  }
}
