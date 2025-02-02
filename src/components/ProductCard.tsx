import { ProductCardProps } from "./types"

export const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
    return (
        <div className='bg-white shadow-md rounded-lg p-4'>
            <img className='w-full h-48 object-contain rounded-mb' src={item.photo_url} alt={item.name} />
            <div className='mt-2 text-center'>
                <h3 className='text-lg font-semibold'>{item.name}</h3>
                <a className='text-blue-500 underline' href={item.link_url}>商品詳細</a>
            </div>
        </div>
    )
}