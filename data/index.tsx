type TCartItem = {
    imageURL: string;
    estimatedDeliveryDate: string;
    unitPrice: number;
    warranty: string;
    brand: string;
    title: string;
};

type TInvoice = {
    total: number;
};

export type TCartData = {
    items?: Array<TCartItem>;
    invoice?: TInvoice;
    cartCount?: number;
};

const cartData: TCartData = {
    items: [
        {
            imageURL: 'https://k.nooncdn.com/t_desktop-thumbnail-v1/v1585233265/N28431690A_1.jpg',
            estimatedDeliveryDate: '2021-02-23',
            unitPrice: 163.0,
            warranty: '1 year warranty',
            brand: 'Philips',
            title: 'Digital Airfryer 3.2L 1400W Black',
        },
        {
            imageURL: 'https://k.nooncdn.com/t_desktop-thumbnail-v1/v1595488129/N27407599A_1.jpg',
            estimatedDeliveryDate: '2021-02-23',
            unitPrice: 15.0,
            warranty: '1 year warranty',
            brand: 'New Brand',
            title: 'Stoneware 5.5 inch Wine 4 - Piece Bowls',
        },
        {
            warranty: '1 year warranty',
            imageURL: 'https://k.nooncdn.com/t_desktop-thumbnail-v1/v1611467659/N40792846A_1.jpg',
            estimatedDeliveryDate: '2021-02-23',
            unitPrice: 35.0,
            brand: 'Xiomi',
            title: 'Portable Wall Charger Adapter Black',
        },
    ],
    invoice: {
        total: 202.35,
    },
    cartCount: 3,
};

export default cartData;
