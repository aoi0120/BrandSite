export interface Brand {
        id: number;
        photo_url: string;
        name: string;
        name_hira: string;
        url: string;
}

export interface Tag {
        id: number;
        name: string;
        brands: BrandTag[];
        items: ItemTag[];
}

export interface BrandTag {
        tag_id: number;
        brand_id: number;
}

export interface ItemTag {
        tag_id: number;
        item_id: number;
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
        tags?: string[] | string;
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
        value: number | string[] | undefined,
        options: Brand[] | Tag[],
        onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export interface TextInputProps {
        type: string,
        label: string,
        name: string,
        value: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}