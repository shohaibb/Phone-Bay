import { Stack, Form, Button, Row, Col } from "react-bootstrap";
import { CartItem } from '../components/CartItem';
import { useShoppingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";
import { useNavigate } from 'react-router-dom'; 

const centerStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh', // 100% of the viewport height
};

export function Checkout() {
  const { cartItems } = useShoppingCart();
  const navigate = useNavigate(); // Initialize navigate function

  // If the cart is empty, show a message and a button to go back to the Store
  if (cartItems.length === 0) {
    return (
      <div className="checkout" style={centerStyle}>
        <h1>Your cart is empty :(</h1>
        <p>Click "Shop Now" to look through our selection!</p>
        <Button onClick={() => navigate('/store')} variant="primary">Shop Now</Button>
      </div>
    );
  }

  // Calculate the total number of items in the cart
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // Calculate subtotal price
  const subtotalPrice = cartItems.reduce((total, cartItem) => {
    const item = storeItems.find(i => i.id === cartItem.id);
    return total + (item?.price || 0) * cartItem.quantity;
  }, 0);

  const tax = subtotalPrice * 0.0625;

  let shipping = 0;
  if (totalItems > 0 && totalItems <= 4) {
    shipping = 15;
  } else if (totalItems > 4 && totalItems <= 8) {
    shipping = 30;
  } else if (totalItems > 8) {
    shipping = 45;
  }

  const totalPrice = subtotalPrice + tax + shipping;

  return (
    <div className="checkout">
      <h1>Checkout</h1>

      <Stack gap={3}>
        {cartItems.map(item => (
          <CartItem key={item.id} {...item} />
        ))}
        
        {/* Display subtotal */}
        <div className="ms-auto fw-bold fs-5">
          Subtotal: {formatCurrency(subtotalPrice)}
        </div>

        {/* Display tax */}
        <div className="ms-auto fw-bold fs-5">
          Tax: {formatCurrency(tax)}
        </div>

        {/* Display shipping */}
        <div className="ms-auto fw-bold fs-5">
          Shipping & Handling: {formatCurrency(shipping)} 
        </div>

        {/* Display total price */}
        <div className="ms-auto fw-bold fs-5">
          Total: {formatCurrency(totalPrice)}
        </div>
      </Stack>
      {/* Personal Information */}
      <Row className="mb-4">
        <Col>
          <h3>Personal Information</h3>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      {/* Shipping and Payment Information */}
      <Row>
        <Col>
          <h2>Shipping Information</h2>
          <Form>
            <Form.Group>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text" placeholder="Enter address" />
            </Form.Group>
            <Form.Group>
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="Enter city" />
            </Form.Group>
            <Form.Group>
              <Form.Label>State</Form.Label>
              <Form.Control type="text" placeholder="Enter state" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Postal Code</Form.Label>
              <Form.Control type="text" placeholder="Enter postal code" />
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <h2>Payment Information</h2>
          <Form>
            <Form.Group>
              <Form.Label>Cardholder Name</Form.Label>
              <Form.Control type="text" placeholder="Enter cardholder name" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" placeholder="Enter card number" />
            </Form.Group>
            <Form.Group>
              <Form.Label>Expiration Date</Form.Label>
              <Form.Control type="text" placeholder="MM/YY" />
            </Form.Group>
            <Form.Group>
              <Form.Label>CVV</Form.Label>
              <Form.Control type="text" placeholder="CVV" />
            </Form.Group>
          </Form>
        </Col>
      </Row>

      <Button className="mt-3 mx-auto d-block">Place Order</Button>

    </div>
  );
}
