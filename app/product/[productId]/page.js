import { Breadcrumb, QuantityInput } from '@/app/_components'
import React from 'react'

const SingleProductPage = ({ params }) => {
  return (
    <>
    <Breadcrumb pageTitle="Product Page" pagePath="Home | Shop | Product 1" />    
    <div className='grid grid-cols-2 px-10 py-5 max-lg:grid-cols-1 max-lg:gap-y-5 max-sm:px-5'>

    <div>
        <img src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80" alt="single product image" />
    </div>
    <div className='flex flex-col justify-center pl-5 gap-y-2'>
        <h1 className='text-4xl font-bold max-sm:text-3xl'>Robot Toy</h1>
        <p className='text-red-500 font-bold text-xl'>$14.99</p>
        <p className='max-sm:text-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non dolore voluptate fugiat voluptatibus suscipit, ducimus neque molestiae minus, aliquid ut distinctio officiis dignissimos sunt ullam corrupti. Reprehenderit dolorem ullam debitis?</p>
        <QuantityInput />
        <button className='text-white bg-primary py-5 px-10 font-bold transition-colors hover:bg-red-600'>Add to cart</button>
    </div>

    </div>
    </>
  )
}

export default SingleProductPage