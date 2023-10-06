import React from 'react'
import style from './WarehouseList.module.css'
import WarehouseCard from '../warehouseCard/WarehouseCard'
import { useSelector } from 'react-redux'

const WarehouseList = ({data}) => {
  console.log("warehouse list",data);


  return (
   <div>

   
     <div>
       {
            data.map((item)=>(
                <WarehouseCard key={item.id} item={item}/>
            ))
       }    
    </div>
   </div>
  )
}

export default WarehouseList

