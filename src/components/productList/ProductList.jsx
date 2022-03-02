import "./productList.scss"
import Product from "../Product/Product";
import {products} from "../../data"
const ProductList = ()=>{
    return(
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire. It 's Lama</h1>
                <p className="pl-desc">
                    Lama is a creative portfolio that your work has been waiting Beautiful homes , 
                    stunning portfolio styles &a whole lot more inside.
                </p>
            </div>
            <div className="pl-list">
                {products.map((item)=>(
                    <Product key={item.id} img ={item.img} link={item.link}></Product>
                ))}
            </div>
        </div>
    )
}

export default ProductList;