import React from 'react'

function Banner() {
  return (
    <div className='h-[20vh] md:h-[60vh] bg-center bg-no-repeat flex items-end'
    style={{
        backgroundImage : `url(https://i0.wp.com/itsmoreofacomment.com/wp-content/uploads/2021/09/Dune-Movie-Official-Poster-banner-feature.jpg?w=1440&ssl=1)`
    }}>


        <div className='text-xl md:text-3xl bg-gray-900 bg-opacity-60 p-4 text-white text-center w-full'>
            Dune 2
        </div>
       


    </div>
  )
}

export default Banner