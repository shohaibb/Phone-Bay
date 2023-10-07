import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";  // import Button
import { useShoppingCart } from "../context/ShoppingCartContext"; // import useShoppingCart
import products from '../data/items.json';

export function ProductPage() {
  const { id } = useParams<{ id?: string }>();

  if (!id) {
    return <div>Invalid Product ID</div>;
  }

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
  } = useShoppingCart();
  const quantity = getItemQuantity(product.id);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ marginBottom: "60px" }}>{product.name}</h1>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <img src={product.imgUrl} 
          style={{ 
            width: "750px", 
            height: "450px", 
            objectFit: "contain",
            border: "5px solid black",
            marginLeft: '-170px',  
          }} 
        />

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          marginLeft: '80px',
        }}>
          <span style={{
            fontSize: '24px',
            fontWeight: 'bold',
            fontFamily: 'Georgia, serif',
          }}>
            Product Description
          </span>
          <pre>{product.description}</pre>

          <div style={{ textAlign: 'center', marginTop: '20px' }}>
          {quantity === 0 ? (
            <Button onClick={() => increaseCartQuantity(product.id)}>
              + Add To Cart
            </Button>
          ) : (
            <div className="d-flex align-items-center justify-content-center" style={{ gap: ".5rem" }}>
              <Button onClick={() => decreaseCartQuantity(product.id)}>-</Button>
              <div>
                <span className="fs-3">{quantity}</span> in cart
              </div>
              <Button onClick={() => increaseCartQuantity(product.id)}>+</Button>
            </div>
          )}
        </div>

        </div>
      </div>
    </div>
  );
}
