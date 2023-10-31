import React, { useEffect, useState } from 'react';
//import logo from '../logo.svg';
import '../App.css';
//import axios from 'axios';
import { getItems } from '../service/FakeService';
import { item } from '../interfaces/interfaces';
import MostrarProductos from '../components/MostrarProductos';


function App() {
  const[Loading, setLoading]=useState(true)
  const[Order,setOrder]=useState('Asce')
  const[ItemList,setItemList]=useState<item[]>([])

  const getDataAsync = async () =>{
    setLoading(true)
    getItems()
     .then(Response=>{
      const ItemList = Response.data as item[]
      setItemList(ItemList)

      console.log(ItemList)
      setLoading(false)
     })
    .catch(error =>{
      console.error(error)
    }) 
    setLoading(false)
  }

  const ChangrOrder=() =>{
    if(Order==='Asce'){
      setOrder('Desc')
      ItemList.sort((a,b)=>a.price-b.price);
    }
    else{
      setOrder('Asce')
      ItemList.sort((a,b)=>b.price-a.price);
    }
  }

 
  useEffect(()=>{
    getDataAsync()
  },[])

  return (
    <div className="App">
     <h1>Super Fake Store</h1>
     <button onClick={()=>ChangrOrder()}>orden </button>
    {MostrarProductos(ItemList)}
    </div>
  )
}

export default App;
