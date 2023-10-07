import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";
import { useNavigate } from 'react-router-dom'; 

type ShoppingCartProps = {
    isOpen: boolean
};

export function ShoppingCart({isOpen} :ShoppingCartProps){
    const { closeCart, cartItems } = useShoppingCart();
    const navigate = useNavigate(); 
    const totalPrice = cartItems.reduce((total, cartItem) => {
        const item = storeItems.find(i => i.id === cartItem.id);
        return total + (item?.price || 0) * cartItem.quantity;
    }, 0);

    return(
        <Offcanvas show={isOpen} onHide={closeCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Stack gap={3}>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
                    <div className="ms-auto fw-bold fs-5">
                        Subtotal: {formatCurrency(totalPrice)}
                    </div>
                    {cartItems.length > 0 && (
                        <Button
                            variant="success"
                            className="mt-2 w-100"
                            onClick={() => {
                                closeCart();
                                navigate('/checkout'); 
                            }}
                        >
                            Proceed to Checkout
                        </Button>
                    )}
                </Stack>
            </Offcanvas.Body>
        </Offcanvas>
    );
}
