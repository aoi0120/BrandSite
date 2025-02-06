import { ProductCard } from "./components/ProductCard"
import { useItems } from "./hooks/useItems"

const shuffleArray = <T,>(array: T[]): T[] => {
    return [...array].sort(() => Math.random() - 0.5)
}

export const ProductRandom = () => {
    const { items = [] } = useItems();

    const shuffleItems = shuffleArray(items)

    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold text-center mb-6">すべての商品</h1>
            <select name="" id=""></select>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {shuffleItems.map((item) => (
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}