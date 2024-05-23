type Product = {
  id: number | string;
  title: string;
  components: [string];
  body: string;
  tag: string;
  price: string;
  favorited: boolean;
  image?: File;
};
