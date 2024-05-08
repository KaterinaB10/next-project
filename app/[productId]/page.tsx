export default function ProductId({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <div>
      <h1>Product Card</h1>
      <p>{params.productId}</p>
    </div>
  );
}
