import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { Link } from 'react-router-dom';


const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);

  const generateOrderNumber = () => {
    return Math.floor(Math.random() * 1000000);
  };

  const [orderNumber, setOrderNumber] = useState(null);

  const calculateSubtotal = () => {
    return cart.reduce((subtotal, item) => subtotal + item.price * item.amount, 0);
  };

  const taxRate = 0.08;

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal + subtotal * taxRate;
  };

  const handleCheckout = () => {
    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    clearCart();
  };

  return (
    <section className="h-screen flex justify-center items-center">
      <div>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="mb-4">
              <img src={item.image} alt={item.title} className="w-16 h-16" />
              <span className="ml-4">{item.title} - Quantity: {item.amount}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8">
          {orderNumber ? (
            <p className="text-green-600 font-semibold">
              Thanks for your purchase. Your order number is: {orderNumber}
            </p>
          ) : (
            <div>
              <p className="text-green-600 font-semibold">
                Subtotal: ${calculateSubtotal().toFixed(2)}
              </p>
              <p className="text-green-600 font-semibold">
                tax ({(taxRate * 100).toFixed(0)}%): ${(
                  calculateSubtotal() * taxRate
                ).toFixed(2)}
              </p>
              <p className="text-blue-600 font-semibold">
                TOTAL (including taxes): ${calculateTotal().toFixed(2)}
              </p>
              <button
                onClick={handleCheckout}
                className="mt-4 py-2 px-4 bg-primary text-white rounded hover:bg-primary-dark transition duration-300"
              >
                Complete purchase
              </button>

              <Link to="/">
              <button
              className="mt-4 py-2 px-4 bg-primary text-white rounded hover:bg-primary-dark transition duration-300"
              >
              Go to Shop
              </button>
              </Link>


            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;

