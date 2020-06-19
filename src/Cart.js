import React from 'react';
import CartItems from './CartItem';


class Cart extends React.Component {
    constructor() {
        super();
        this.state = {
            products : [
                {
                    price: 99,
                    title: 'Watch',
                    qty: 10,
                    img: '',
                    id: 1
                },
                {
                    price: 999,
                    title: 'Mobile Phone',
                    qty: 100,
                    img: '',
                    id: 2
                },
                {
                    price: 9999,
                    title: 'Laptop',
                    qty: 1,
                    img: '',
                    id: 3
                }
            ]
        }
    }

    handleIncreaseQuantity = (product) => {
        // console.log('Hey Increase the Qty of produc', product);
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty +=1;

        this.setState ({
            products
            // products:products
        })
    }

    render() {
        const {products} = this.state;
        return (
            <div className="cart">
             
             { products.map((product) => {
               return (
                   <CartItems 
                   product={product} 
                   key={product.id} 
                   onIncreasQuantity={this.handleIncreaseQuantity}
                   />
                )
             })}
            </div> 
        )
    }
}

export default Cart;