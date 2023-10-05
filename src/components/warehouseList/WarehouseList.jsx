import React from 'react'
import style from './WarehouseList.module.css'
import WarehouseCard from '../warehouseCard/WarehouseCard'

const WarehouseList = ({data}) => {
  console.log(data);

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

