import { createContext, useEffect, useState } from "react";
import AxiosInstance from "../api/AxiosInstance";

export const MovieContext = createContext([]);


export function MovieContextProvider(props){
    const [movieList,setMovieList] = useState([]);
    
    useEffect(()=>{
        AxiosInstance.get('movie/now_playing?language=en-US&page=1')
        .then((resp)=>resp.data)
        .then(({results})=>{
            setMovieList(results)
        })
    },[]);


    return <MovieContext.Provider value={movieList}>
        {props.children}
    </MovieContext.Provider>
}