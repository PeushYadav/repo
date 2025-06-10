import React, { Component } from 'react';
import Maincont from '../assets/card2maintext.svg';
import Emblem from '../assets/emblem.svg';

export default class Card extends Component {
  render() {
    return (
      <div>
        <div
          style={{ backgroundColor: '#F0ECE8' }}
          className="w-screen h-[800px] flex justify-center items-center p-10">
            <div className='w-[85%] h-[600px] bg-white rounded-2xl'>
              <div className=' grid  w-full h-[50%]'>
                <div className='flex w-full h-[25%] justify-center pt-5'> 
                  <div className='w-[30%]'>
                         <img
                              src={Maincont}
                              alt="Gavel Icon"
                              className="w-[100%]"
                            /> 

                  </div>
                  </div>
                  <div className='grid grid-cols-3 w-full h-full '>                    
                      <div className=' w-full h-full p-10 col-span-1 flex justify-end'>
                        <img
                              src={Emblem}
                              alt="Gavel Icon"
                              className="w-[40%] "
                            /> 

                      </div>
                      <div className='flex justify-center items-center w-full h-full col-span-2'>
                        <p className='w-[75%] font-semibold font-primary'>
                          Reading the Constitution is essential because it empowers you with the knowledge of your fundamental rights, duties, and the framework that governs our democracy. It helps you understand how laws are made, how power is distributed, and how justice is delivered. By knowing the Constitution, you become an informed citizen who can question injustice, participate meaningfully in civic life, and ensure that your rights—and the rights of others—are respected and upheld.
                        </p>
                      </div>
                    </div>
                    <div className='flex w-full justify-end pr-20'>
                      <button className='w-40px h-full text-2xl font-semibold'>
                         <div style={{backgroundColor:'#BA5C45'}} className='w-60 h-20 flex justify-center items-center rounded-2xl'>
                          <div style={{backgroundColor:'#EECF95'}} className='w-50 h-13 flex justify-center items-center rounded-2xl'>
                            <p>
                              Read Now ! 
                            </p>

                          </div>
                         </div>
                      </button>
                    </div>
                 




























              </div>

            </div>

           

          </div>
        </div>
  
    );
  }
}
