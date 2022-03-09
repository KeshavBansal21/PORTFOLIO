import { useEffect, useState } from "react";
import { getSkills } from "../../data";
import Product from "../Product/Product";
import "./productList.scss";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async function () {
      setProducts(await getSkills());
    })();
  }, []);
  
  console.log(products)
  products.map((item)=>{
    console.log(item._fieldsProto.imageurl.stringValue)
    console.log(item._fieldsProto.name.stringValue)

  })
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & Inspire. It 's Lama</h1>
        <p className="pl-desc">
          Lama is a creative portfolio that your work has been waiting Beautiful
          homes , stunning portfolio styles &a whole lot more inside.
        </p>
      </div>
      <div className="pl-list">
        {products.map((item, index) => (
          <Product key={index} img={item._fieldsProto.imageurl.stringValue} name={item._fieldsProto.name.stringValue}></Product>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
