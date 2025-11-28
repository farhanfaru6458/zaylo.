import React from 'react'
import ProductList from './ProductList'
import { Metadata } from "next";



export const metadata:Metadata={
title:"Zaylo's Shop"
}
export default function Products() {


  return (
    <div>

      <ProductList />
    </div>
  )
}
