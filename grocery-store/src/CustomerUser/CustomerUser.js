import React, { useEffect } from 'react'
import { gstoreAPIs } from '../APIs/gstoreAPIs'
import { useState } from 'react'
import s from "./style.module.css"
import { useNavigate } from 'react-router'
import Cart from '../Cart/Cart'

const CustomerUser = () => {
  const [catList, setCatList]=useState([])
  const [productList,setProductList]=useState([])
const [prodtoCart, setProdToCart]=useState('')
const [cartItems, setCartItems]=useState([])
const [status, setStatus] =useState(false)
const [listStatus,setListStatus] =useState(true)

const navigate = useNavigate()


  const catIdList=[catList.map((cat)=>cat.catId)]
  console.log(catIdList)

    async function getCategories(){
      const res =await gstoreAPIs.getCategory()
      setCatList(res)
    }


    async function getProducts(){
      const products = await gstoreAPIs.getProducts()
      setProductList(products)
    }
// console.log(productList[1].category.catId);
    useEffect(()=>{
      getCategories()
      getProducts()
    },[])

//    const onClick=(prodId)=>{
// console.log(prodId)
//  }

console.log(prodtoCart);
async function addToCart(){
const res =await gstoreAPIs.addToCart(prodtoCart)
const status = res.status
console.log(status);
}
const onClick=(e)=>{
  e.preventDefault();
  viewCart(cartItems)

}
 function viewCart(CartItems){
//  navigate("Cart")
 console.log(CartItems);
  setStatus(true)
  setListStatus(false)
 
 
return CartItems

}

  return (
    <div>
      <div>{listStatus&&catList&&catList.map((cat)=>{return <h1 key={cat.catId}>{cat.catName}
      <div>{productList&&productList.filter((prod)=>{return prod.category.catId === cat.catId}).map((prd)=>{return <div key={prd.prodId}
      >{prd.prodName}
      <div className={s.AddButton}><button onClick={(e)=>{e.preventDefault(); setProdToCart(prd); setCartItems([...cartItems,prd])}}>Add To Cart</button></div>
      </div>})}</div>
      </h1>})}
      {listStatus&&<button onClick={onClick}>View Cart</button>}
      </div>
        {status && <div>
          <div>
          <h1>Cart</h1>
          </div>
          <div>
            {cartItems.map((items)=>{return <div key={items.prodId}>{items.prodName}</div>})}
          </div>
          </div>}
    </div>
  )
}

export default CustomerUser