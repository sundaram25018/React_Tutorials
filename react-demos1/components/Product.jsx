import React from 'react'

const Product = () => {
  // const product = {
  //    Name : "Laptop",
  //    Price : 100000,
  //    Avalibilty : "Present",
  //    colour : "green"

  // }

  const Productinfo = [
    {Name: 'Phone', Price:2000, Categories: 'Electronic'},
    {Name: 'Food', Price:300, Categories: 'Grocry'},
    {Name: 'TV', Price:4000, Categories: 'Electric'}
  ]
  return (
    <div>
      {/* <p>Name : {product.Name}</p>
      <p>Price : {product.Price}</p>
      <p>Avalibility : {product.Avalibilty}</p>
      <p>Color : {product.colour}</p> */}
     {Productinfo.map((p)=>(
         <div key={Math.random()}>
          <h1>Name:{p.Name}</h1>
          <h1>Price:{p.Price}</h1>
          <h1>Categories:{p.Categories}</h1>
         </div>
      ))}

    </div>
  )
}

export default Product
