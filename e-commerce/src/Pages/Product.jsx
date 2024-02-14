import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Breadcrum } from '../Components/Breadcrums/Breadcrum';

export const Product = () => {
  const {all_product}=useContext(ShopContext)
  const {productId}=useparams();
  const product=all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
        <Breadcrum product={product} />
    </div>
  )
}
