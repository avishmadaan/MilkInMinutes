export type orderRequests = {
    price: any;
    cusName: string;
    cusEmail?: string;
    cusPhone?: number;
    cusAddress: {
      street?: string;
      city?: string;
      state?: string;
      pincode?: string | number;
    };
    orderDetails: {
      product?: string;
      quantity?: number;
      orderDate?:Date;
      totalAmount?:number;
}
}