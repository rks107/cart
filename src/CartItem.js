import React from 'react';
class CartItem extends React.Component {

    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Mobile Phone',
            qty: 1,
            img: ''
        }
    }

    render() {
        const {price, title, qty} = this.state;
        return (
            <div className="cart-item">
              <div className="left-block">
                 <img style={styles.image} />
              </div>
              <div className="right-block">
                 <div style={ {fontSize:25}}> {title} </div>
                 <div style={ {color: '#777'}}> Rs. {price} </div>
                 <div style={ {color: '#777'}}> Qty. {qty} </div>
                 <div className="cart-item-actions">
                 {/* Buttons */}
                 <img alt="Increase" className="action-icons" src="https://image.flaticon.com/icons/svg/659/659893.svg" />
                 <img alt="Decrease" className="action-icons" src="https://image.flaticon.com/icons/svg/659/659892.svg" />
                 <img alt="Delete" className="action-icons" src="https://image.flaticon.com/icons/svg/1345/1345823.svg" />
                 </div>
              </div>
            </div>
        );
    }
}

const styles = {
    image : {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;