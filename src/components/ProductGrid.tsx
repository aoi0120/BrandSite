import { ProductCard } from "./ProductCard";
import { ProductGridProps } from "./types";

const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5)
}

export const ProductGrid: React.FC<ProductGridProps> = ({ items, brandId }) => {
    //ブランドIDでフィルターしてランダムに並び替え
    const filteredItems = shuffleArray(
        items.filter((item) => item.brand_id === brandId)
    );

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {filteredItems.map((item) => (
                <ProductCard key={item.id} item={item} />
            ))}
        </div>
    )
}