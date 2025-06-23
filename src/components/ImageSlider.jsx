import React from 'react'
import photo12 from "../assets/model2.jpg"
import photo13 from "../assets/model3.jpg"
import photo14 from "../assets/model4.jpg"
import photo15 from "../assets/model5.jpg"
import photo16 from "../assets/model6.jpg"


const ImageCard = () => {
  return (
    <div className='flex items-center justify-center py-8 bg-black'>
      <div className='grid gap-5 lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2'>
          <div className='relative items-center justify-center overflow-hidden transition-shadow group curser-pointer hover:shadow-xl hover:shadow-black/30'>
              <div className='h-96 w-72'>
                  <img src={photo12} className="object-cover w-full h-full transition-transform group-hover:rotate-3 group-hover:scale-125" alt="" />
              </div>
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
              <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[60%] group-hover:translate-y-0 transition-all duration-500'>
                  <h1 className='text-3xl font-bold text-white baskervville-sc-regular'>Women's Wardrobe</h1>
                  <p className='mb-3 text-lg italic text-white transition-opacity duration-300 baskervville-sc-regular opactiy-0 group-hover:opacity-100'>Lorem ipsum dolor sit amet.</p>
                  <button className='baskervville-sc-regular py-2 rounded-full bg-neutral-900 px-3.5 text-sm capitalize text-white shadow shadow-black/60'>See More</button>
              </div>
          </div>
          <div className='relative items-center justify-center overflow-hidden transition-shadow group curser-pointer hover:shadow-xl hover:shadow-black/30'>
              <div className='h-96 w-72'>
                  <img src={photo13} className="object-cover w-full h-full transition-transform group-hover:rotate-3 group-hover:scale-125" alt="" />
              </div>
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
              <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[60%] group-hover:translate-y-0 transition-all duration-500'>
                  <h1 className='text-3xl font-bold text-white baskervville-sc-regular'>Women's Wardrobe</h1>
                  <p className='mb-3 text-lg italic text-white transition-opacity duration-300 baskervville-sc-regular opactiy-0 group-hover:opacity-100'>Lorem ipsum dolor sit amet.</p>
                  <button className='baskervville-sc-regular py-2 rounded-full bg-neutral-900 px-3.5 text-sm capitalize text-white shadow shadow-black/60'>See More</button>
              </div>
          </div>
          <div className='relative items-center justify-center overflow-hidden transition-shadow group curser-pointer hover:shadow-xl hover:shadow-black/30'>
              <div className='h-96 w-72'>
                  <img src={photo14} className="object-cover w-full h-full transition-transform group-hover:rotate-3 group-hover:scale-125" alt="" />
              </div>
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
              <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[60%] group-hover:translate-y-0 transition-all duration-500'>
                  <h1 className='text-3xl font-bold text-white baskervville-sc-regular'>Women's Wardrobe</h1>
                  <p className='mb-3 text-lg italic text-white transition-opacity duration-300 baskervville-sc-regular opactiy-0 group-hover:opacity-100'>Lorem ipsum dolor sit amet.</p>
                  <button className='baskervville-sc-regular py-2 rounded-full bg-neutral-900 px-3.5 text-sm capitalize text-white shadow shadow-black/60'>See More</button>
              </div>
          </div>
          <div className='relative items-center justify-center overflow-hidden transition-shadow group curser-pointer hover:shadow-xl hover:shadow-black/30'>
              <div className='h-96 w-72'>
                  <img src={photo15} className="object-cover w-full h-full transition-transform group-hover:rotate-3 group-hover:scale-125" alt="" />
              </div>
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
              <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[60%] group-hover:translate-y-0 transition-all duration-500'>
                  <h1 className='text-3xl font-bold text-white baskervville-sc-regular'>Women's Wardrobe</h1>
                  <p className='mb-3 text-lg italic text-white transition-opacity duration-300 baskervville-sc-regular opactiy-0 group-hover:opacity-100'>Lorem ipsum dolor sit amet.</p>
                  <button className='baskervville-sc-regular py-2 rounded-full bg-neutral-900 px-3.5 text-sm capitalize text-white shadow shadow-black/60'>See More</button>
              </div>
          </div>
          <div className='relative items-center justify-center overflow-hidden transition-shadow group curser-pointer hover:shadow-xl hover:shadow-black/30'>
              <div className='h-96 w-72'>
                  <img src={photo16} className="object-cover w-full h-full transition-transform group-hover:rotate-3 group-hover:scale-125" alt="" />
              </div>
              <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
              <div className='absolute inset-0 flex flex-col items-center justify-center text-center px-9 translate-y-[60%] group-hover:translate-y-0 transition-all duration-500'>
                  <h1 className='text-3xl font-bold text-white baskervville-sc-regular'>Women's Wardrobe</h1>
                  <p className='mb-3 text-lg italic text-white transition-opacity duration-300 baskervville-sc-regular opactiy-0 group-hover:opacity-100'>Lorem ipsum dolor sit amet.</p>
                  <button className='baskervville-sc-regular py-2 rounded-full bg-neutral-900 px-3.5 text-sm capitalize text-white shadow shadow-black/60'>See More</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default ImageCard
