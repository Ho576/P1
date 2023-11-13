import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function Details() {
 let [user,setUser]=useState({});
 const {id} = useParams('id')
 const getUser = async ()=>{
    const {data}= await axios.get(`https://crud-users-gold.vercel.app/users/${id}`)
    setUser(data.user);
 }
 useEffect(()=>{
    getUser();
 },[])
 
    return (
    <div>Details for {user.name}</div>
  )
}
