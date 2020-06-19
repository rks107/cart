import React from 'react';
const CartItem = (props) => {

    // constructor(){
    //     super();
    //     this.state = {
    //         price: 999,
    //         title: 'Mobile Phone',
    //         qty: 1,
    //         img: ''
    //     }

    //     // this.increaseQuantity = this.increaseQuantity.bind(this);
    //     // this.testing();
    // }

    // Synchronus setState Functionality by promise
    // testing(){
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     })

    //     promise.then(() => {
    //         // setState act like a synchronus call

    //         this.setState({ qty : this.state.qty + 10 });
    //         this.setState({ qty : this.state.qty + 10 });

    //         console.log('state', this.state);
    //     });
    // }

    // increaseQuantity = () => {
    //     // console.log(this.state);

    // // SHALLOW MERGING - only change qty

    //     // setState form 1 - required if only needs to change something once
    //     // this.setState({
    //     //     qty: this.state.qty + 1
    //     // });

    //     // setState form 2 - if prevState required use this form 2
    //     this.setState((prevState)=> {
    //         return {
    //             qty: prevState.qty + 1
    //         }
    //     })
    // }

    // decreaseQuantity = () => {

    //     const {qty} = this.state;

    //     if(qty === 0)return;

    //     this.setState((prevState) => {
    //         return  {
    //            qty: prevState.qty - 1
    //         }
    //     });

    //     // this.setState((prevState) => {
    //     //         if(prevState.qty >= 1){
    //     //           return  {
    //     //               qty: prevState.qty - 1
    //     //           }
    //     //         } else {
    //     //             return 0
    //     //         }
                
    //     // })
    // }

        const {price, title, qty} = props.product;
        const 
        {
            product, 
            onIncreasQuantity, 
            onDecreaseQuantity,
            onDeleteProduct
        } = props;
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
                 <img 
                  alt="Increase" 
                  className="action-icons" 
                  src="https://image.flaticon.com/icons/svg/659/659893.svg" 
                  onClick = {() => onIncreasQuantity(product)} 
                 />
                {/* onClick = {this.increaseQuantity.bind(this)} */}  
                 <img 
                  alt="Decrease" 
                  className="action-icons" 
                  src="https://image.flaticon.com/icons/svg/659/659892.svg" 
                  onClick = {()=> onDecreaseQuantity(product)} 
                 />
                 <img 
                  alt="Delete" 
                  className="action-icons" 
                  src="https://image.flaticon.com/icons/svg/1345/1345823.svg" 
                  onClick = {()=> onDeleteProduct(product.id)}
                 />
                 </div>
              </div>
            </div>
        );
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