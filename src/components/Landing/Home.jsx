import React, { useContext } from 'react'
import { MovieContext } from '../../context/MovieContext'
import MovieCard from '../Movie/layouts/MovieCard';

export default function Home() {
    const movieList = useContext(MovieContext);

  return <>
  <div className='container px-4'>
    <h2 className='text-black text-4xl font-bold my-3'>Now Playing</h2>

    <div className='grid grid-cols-4 gap-4'>
        {movieList&&movieList.map((item)=><MovieCard key={item.id} object={item} />)}
    </div>
  </div>
  </>
}
