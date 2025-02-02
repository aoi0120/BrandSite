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
        id?: number;
        name: string;
        description?: string;
        photo_url: string;
        link_url?: string;
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

export interface SelectInputProps {
        label: string,
        name: string,
        value: number,
        options: Brand[],
        onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface TextInputProps {
        type: string,
        label: string,
        name: string,
        value: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}