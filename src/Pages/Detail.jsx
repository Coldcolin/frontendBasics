import { useEffect, useState } from "react";
import {useLoaderData, useParams} from "react-router-dom"

const Detail = () => {
    const [data, setData]= useState({})
    const {id} = useParams();
    // const team = useLoaderData()
    // console.log(team)

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .then(json=>setData(json))
    },[])
  return (
    <div>
        <h1>Detail for :{id}</h1>
        <h3>Title: {data.title}</h3>
        <p>Description:{data.description}</p>
    </div>
  )
}

export default Detail