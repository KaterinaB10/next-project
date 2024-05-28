interface ProductCardProps {
  title: string;
  price: string;
  someText: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  price,
  someText,
}) => (
  <div>
    <h2>{title}</h2>
    <p>{price}</p>
    <p>{someText}</p>
  </div>
);

export default ProductCard;
