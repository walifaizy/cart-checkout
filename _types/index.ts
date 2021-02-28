export type TUserData = {
    avatar_url: string;
    email: string;
    isLoading: boolean;
    name: string;
    html_url: string;
    bio: string;
};

export type TAlertBox = {
    onCloseAlert?: () => void;
    children?: React.ReactNode;
    title?: React.ReactNode;
    isOpen: boolean;
    onConfirm?: () => void;
    onCancel?: () => void;
    confirmBtnLabel?: React.ReactNode;
};

export type TItems = {
    item: {
        imageURL: string;
        estimatedDeliveryDate: string;
        brand: string;
        title: string;
        warranty: string;
        unitPrice: number;
    };
};
