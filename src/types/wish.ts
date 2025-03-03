export type Twish = {
  product: string;
  email: string | undefined;
}

export type WishlistItemProps = {
  item: {
    product: {
      _id: string
      title: string;
      images: string[];
      price: number;
      condition: string;
      userID: string;
    };
    email: string;
  };
}