export type UniformFormValues = {
    name: string;
    groupName: string;
    emailAddress: string;
    phone: string;
    categoryId: string | null;
    quantity: number | undefined;
    image: File | null;
    requestedDeliveryDate: Date;
    additionalDetails: string;
};