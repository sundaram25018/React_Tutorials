import React from 'react'
import Person from '../components/Person';
import Product from '../components/Product';
import Card from '../components/Card';
const App = () => {
  // return <User
  //   name="Sundaram"
  //   age={18}
  //   gender="Male"
  //   hobby={["cricket ", "coding ", "movies"]}
  //   img = "https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1nfGVufDB8fDB8fHww" />
  return (
    <div>
    {/* <Person name="Sundaram" age={18}/>
     <Product name="Laptop" price = {30000} /> */}

     <Card>
        <h1>My Card</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim reiciendis minus recusandae maiores tempora? Iure veniam dicta quis ad laboriosam! In suscipit, facere inventore doloribus aut numquam accusantium quod voluptatibus.
        </p>
     </Card>
     </div>
  )

};
// const User = (props) => {
//   return <section>
//     <h1>Name:{props.name}</h1>
//     <h1>Age:{props.age}</h1>
//     <h1>Gender:{props.gender}</h1>
//     <h1>hobby:{props.hobby}</h1>
//     <img src={props.img} alt="images"width={200} height={100} />
//   </section>
// }

// Dstructuring

const User = ({name,age,gender,hobby,img}) => {
  return <section>
    <h1>Name:{name}</h1>
    <h1>Age:{age}</h1>
    <h1>Gender:{gender}</h1>
    <h1>hobby:{hobby}</h1>
    <img src={img} alt="images"width={200} height={100} />
  </section>
}
export default App
