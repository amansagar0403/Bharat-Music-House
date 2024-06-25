import React from "react";
import styles from "./page.module.css";
import { GuitarProduct } from "../HomeCard/types";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: GuitarProduct;
}
const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/product/${5}`)}
      className={styles.productPage}
    >
      <div className={styles.productinner}>
        <div className={styles.products}>
          <div className={styles.image}>
            <img src={product.image} alt="Guitar" />
          </div>
          <div className={styles.content}>
            <h2>{product.brand}</h2>
            <p>{product.title}</p>
          </div>
          <div className={styles.price}>
            <p className="font-semibold">Rs.{product.discountedPrice}</p>
            <p className="line-through opacity-50">Rs.{product.price}</p>
            <p className="text-green-600 font-semibold">
              {product.discountPercent}%off
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
