import axios from "axios"

const AxiosInstance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers:{
        Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOTJiYzllMDFmZDAyNzgwNWU2MjVmMDI2NTVhYjZhYyIsIm5iZiI6MTczOTgxMDIzNy44ODYwMDAyLCJzdWIiOiI2N2IzNjViZGE2NWQ2MzAzZTdlMGU0YmEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.n6EFm4-IU3UBb-BCbaf4wr47ubpcfxjjJP161_vL68U",
        Accept:'application/json'
    }
});


export default AxiosInstance;