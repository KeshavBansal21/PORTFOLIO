import "./product.scss";

const Product = ({ img, name }) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
          <img src={img} alt="" className="p-img"></img>
          <h6>{name}</h6>
    </div>
  );
};

export default Product;
