import React from 'react';

export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const ItemPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0)
    const taxPrice = ItemPrice * 0.14;
    const shippingPrice = ItemPrice > 2000 ? 0 : 20;
    const totalPrice = ItemPrice + taxPrice + shippingPrice;
    return (
        <aside className="block col-1">
            <h2>Cart Items</h2>
            <div>
                {/* {cartItems && cartItems.length === 0 && <div>Cart is empty</div>} */}
                {cartItems.length === 0 && <div>Cart is empty</div>}
                {cartItems.map((item) => (
                    <div key={item.id} className="row">
                        <div className="col-2">
                            {item.name}
                        </div>
                        <div>
                            <button onClick={() => onAdd(item)} className="add">+</button>
                            <button onClick={() => onRemove(item)} className="remove">-</button>
                        </div>
                        <div className="col-2 text-right">
                            {item.qty} x ${item.price.toFixed(2)}
                        </div>
                    </div>

                ))}
                {cartItems.length !== 0 && (
                    <>
                        <hr></hr>
                        <div className="row">
                            <div className="col-2">
                                Item Price
                            </div>
                            <div className="col-1 text-right">
                                ${ItemPrice.toFixed(2)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                Tax Price
                            </div>
                            <div className="col-1 text-right">
                                ${taxPrice.toFixed(2)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                Shipping Price
                            </div>
                            <div className="col-1 text-right">
                                ${shippingPrice.toFixed(2)}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <strong>Total Price</strong>
                            </div>
                            <div className="col-1 text-right">
                                <strong>${totalPrice.toFixed(2)}</strong>
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <button onClick={() => alert('implement checkout')}>
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </aside>
    )
}