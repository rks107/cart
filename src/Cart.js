import React from 'react';
import CartItems from './CartItem';


const Cart = (props) => {
        const {products} = props;
        return (
            <div className="cart">
             
             { products.map((product) => {
               return (
                   <CartItems 
                   product={product} 
                   key={product.id} 
                   onIncreasQuantity={props.onIncreasQuantity}
                   onDecreaseQuantity={props.onDecreaseQuantity}
                   onDeleteProduct={props.onDeleteProduct}
                   />
                )
             })}
            </div> 
        )
}

export default Cart;