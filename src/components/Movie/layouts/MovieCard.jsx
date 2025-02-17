import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function MovieCard({object}) {

  const {id, original_title, release_date,poster_path} = object
  return <>
  
  <div className="movie-card w-70">
    <div className="top-card w-full relative">
        <img src={"https://image.tmdb.org/t/p/original"+poster_path} alt={original_title} />
        <div className='absolute top-3 px-3 w-full flex justify-between'>
            <span className='bg-gray-50/50 p-1 rounded-full'>TV series</span>
            <span className='bg-gray-50/50 p-1 rounded-full'>
                <FontAwesomeIcon icon={faHeart} />
            </span>
        </div>
        <div className="detials">
            <span className='text-xs font-bold text-gray-400 mb-3'>USA, {release_date.slice(0,4)} - Current</span>
            <h2 className='text-xl font-bold text-gray-900 mb-2'>{original_title}</h2>
            <h3 className='text-xs font-bold text-gray-400'>Action, Adventure / Horror</h3>
        </div>
    </div>
  </div>
  
  </>
}
