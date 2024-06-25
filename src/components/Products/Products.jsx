import React from 'react'
import ProductsData from './ProductsData'

const Products = () => {
  return (
    <div className='mx-auto px-4 py-8 max-w-[1300px] md:flex my-20 md:justify-between'>
        <div>
            <h1 className='text-[25px] '>Каталог товаров</h1>

            <div className='flex md:flex-col mt-[20px] gap-[5px] '>
            <a href="" className='text-gray-400'>Хиты продаж</a>
            <a href="" className='text-gray-400'>Новинки</a>
            <a href="" className='text-gray-400'>Акции</a>
            </div>
        </div>
        <div>
            <ProductsData />
        </div>
    </div>
  )
}

export default Products