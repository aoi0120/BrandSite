export interface Brand {
        id: number;
        photo_url: string;
        name: string;
        name_hira: string;
        url: string;
}

export interface ProductGridProps {
        items: Product[];
        brandId: number;
}

export interface Product {
        id: number;
        name: string;
        photo_url: string;
        link_url: string;
        brand_id: number;
}

export interface Product {
        id: number;
        name: string;
        photo_url: string;
        link_url: string;
        brand_id: number;
}

export interface ProductCardProps {
        item: Product;
}

export interface ModalProps {
    showFlag: boolean,
    setShowModal: (value: boolean) => void,
    selectedBrandName: string
};
