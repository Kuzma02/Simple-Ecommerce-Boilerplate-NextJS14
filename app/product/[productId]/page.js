import { Breadcrumb, QuantityInput } from '@/app/_components'
import React from 'react'

const SingleProductPage = async ({ params }) => {
  const data = await fetch(`http://localhost:1337/api/products/${params.productId}?populate=*`);
  const product = await data.json();

  const pagePath = "Home | Shop | "+product.data.attributes.title;
  return (
    <>
    <Breadcrumb pageTitle="Product Page" pagePath={pagePath} />    
    <div className='grid grid-cols-2 px-10 py-5 gap-x-5 max-lg:grid-cols-1 max-lg:gap-y-5 max-sm:px-5 max-w-7xl mx-auto'>

    <div className='flex justify-center'>
        <img src={`http://localhost:1337`+product.data.attributes.Image.data.attributes.url} alt="single product image" />
    </div>
    <div className='flex flex-col justify-center gap-y-5'>
        <h1 className='text-6xl font-bold max-sm:text-3xl'>{product.data.attributes.title}</h1>
        <p className='text-red-500 font-bold text-5xl max-sm:text-3xl'>${product.data.attributes.price}</p>
        <p className='max-sm:text-sm text-2xl'>{ product.data.attributes.description }</p>
        <QuantityInput />
        <button className='text-white bg-primary py-5 px-10 font-bold transition-colors hover:bg-red-600'>Add to cart</button>
    </div>

    </div>
    </>
  )
}

export default SingleProductPage