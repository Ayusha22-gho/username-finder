import React, { useEffect, useState } from 'react'
import { useLocation } from "react-router-dom";
import axios from "axios"

export default function index({repoData}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [repo, setRepo] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation()
//  const repoId = location.state.id;
//  const fetchApi = async ()=>{
//       const response = await axios.get(repoUrl)
//       console.log(response.data)
//       setRepo(response.data);
//   }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect( ()=>{
  //   fetchApi();
  // },[])

  // eslint-disable-next-line react-hooks/rules-of-hooks
  // useEffect(  ()=> {
  //   const fetchApi = async ()=>{
  //     const response = await axios.get(repoUrl)
  //     console.log(response.data)
  //     setRepo(response.data);
  //   }
  //   fetchApi();
  // },[])
  return (
    <div>
    </div>
  )
}
