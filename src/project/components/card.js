import   "./card.css"

import { MdOutlineFavoriteBorder } from "react-icons/md";
import { MdOutlineContentPasteSearch } from "react-icons/md";


const ProductCard = ({
  sku,
  imageUrl,
  brand,
  name,
  currentPrice,
  originalPrice,
  status,style
}) => {
  return (
    <div className="product-card" style={style}>
      <div className="product-details">
      <p className=
      "product-sku">{sku}</p>
      <img src={imageUrl} alt={name} className="product-image" />
        <h3 className="product-brand">{brand}</h3>
        <h2 className="product-name">{name}</h2>
      </div>

<div style={{display:"flex"}}>
      <div className="product-price">
      <span>{currentPrice}</span>  
        {originalPrice && (
          <span className="product-original-price">
            {originalPrice}
          </span>
        )}
        </div>


        <div className="product-info">
        {status == 'in-stock' && <p className="stock-info ">In stock</p>}
        {status == 'closeout' && <p className="closeout ">Out stock</p>}
        {status == 'sold-out' && <p className="sold-out ">sold out</p>}
        </div>
      
</div>
      <div className="product-actions">
        <button className="favorite-button">
        <MdOutlineFavoriteBorder />

                </button>
        <button className="quick-view-button">
        <MdOutlineContentPasteSearch />

                 </button>
      </div>

    </div>
  );
};

export default ProductCard;
