import { Link } from "react-router-dom";
import type { Product } from "../types";

interface ProductCardProps {
    product: Product;
}

function ProductCard({ product }: ProductCardProps) {
    return (
        <div>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price.toLocaleString()}원</p>
            <Link to={`/products/${product.id}`}>상세보기</Link>
        </div>
    );
}

export default ProductCard;
