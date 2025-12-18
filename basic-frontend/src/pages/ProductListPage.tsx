import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
function ProductListPage() {
    const [selectedCategory, setSelectedCategory] = useState<string>("all");

    const filteredProducts =
        selectedCategory === "all"
            ? products
            : products.filter((p) => p.category === selectedCategory);
    return (
        <div>
            <h1>제품 목록</h1>

            <div>
                <button onClick={() => setSelectedCategory("all")}>전체</button>
                <button onClick={() => setSelectedCategory("laptop")}>
                    노트북
                </button>
                <button onClick={() => setSelectedCategory("phone")}>
                    스마트폰
                </button>
            </div>
            <div>
                {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}

export default ProductListPage;
