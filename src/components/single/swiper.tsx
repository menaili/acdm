'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const Swiperslide: React.FC = () => (
  <>
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
    >
      
      <SwiperSlide>
        <div className="p-6 max-w-sm mx-auto bg-second rounded-xl shadow-lg flex items-center space-x-4">
            <div className='flex flex-col gap-5'>
                <div className="text-sm text-gray flex gap-3">
                    <p className="rounded-lg p-1 border-solid border-hover border-opacity-90 border-2 inline">Illustrator</p>
                    <p className="rounded-lg p-1 border-solid border-hover border-opacity-90 border-2 inline">Figma</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className="text-sm">Art of illustration</p>
                    <p className="text-xl">Bring your imagination to Life</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='text-sm text-gray flex gap-3'>
                        <p>6 week</p>
                        <p>183</p>
                    </div>
                    <div>
                        <button className="text-sm px-2 rounded-lg border-solid border-clickable border-opacity-90 border-2 inline">Join now</button>
                    </div>
                </div>
                
            </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="p-6 max-w-sm mx-auto bg-second rounded-xl shadow-lg flex items-center space-x-4">
            <div className='flex flex-col gap-5'>
                <div className="text-sm text-gray flex gap-3">
                    <p className="rounded-lg p-1 border-solid border-hover border-opacity-90 border-2 inline">Illustrator</p>
                    <p className="rounded-lg p-1 border-solid border-hover border-opacity-90 border-2 inline">Figma</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className="text-sm">Art of illustration</p>
                    <p className="text-xl">Bring your imagination to Life</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='text-sm text-gray flex gap-3'>
                        <p>6 week</p>
                        <p>183</p>
                    </div>
                    <div>
                        <button className="text-sm px-2 rounded-lg border-solid border-clickable border-opacity-90 border-2 inline">Join now</button>
                    </div>
                </div>
                
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="p-6 max-w-sm mx-auto bg-second rounded-xl shadow-lg flex items-center space-x-4">
            <div className='flex flex-col gap-5'>
                <div className="text-sm text-gray flex gap-3">
                    <p className="rounded-lg p-1 border-solid border-hover border-opacity-90 border-2 inline">Illustrator</p>
                    <p className="rounded-lg p-1 border-solid border-hover border-opacity-90 border-2 inline">Figma</p>
                </div>
                <div className='flex flex-col gap-2'>
                    <p className="text-sm">Art of illustration</p>
                    <p className="text-xl">Bring your imagination to Life</p>
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='text-sm text-gray flex gap-3'>
                        <p>6 week</p>
                        <p>183</p>
                    </div>
                    <div>
                        <button className="text-sm px-2 rounded-lg border-solid border-clickable border-opacity-90 border-2 inline">Join now</button>
                    </div>
                </div>
                
            </div>
        </div>
      </SwiperSlide>
    

      
      
      
    </Swiper>
  </>
);

export default Swiperslide;
