import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase'; 

class App extends React.Component{
  constructor() {
    super();
    this.state = {
        products : [
            // {
            //     price: 99,
            //     title: 'Watch',
            //     qty: 10,
            //     img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
            //     id: 1
            // },
            // {
            //     price: 999,
            //     title: 'Mobile Phone',
            //     qty: 100,
            //     img: 'https://images.unsplash.com/photo-1547658718-f4311ad64746?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            //     id: 2
            // },
            // {
            //     price: 9999,
            //     title: 'Laptop',
            //     qty: 1,
            //     img: 'https://images.unsplash.com/photo-1504707748692-419802cf939d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1030&q=80',
            //     id: 3
            // }
        ],
        loading: true
    }
}

componentDidMount() {
  firebase
   .firestore()
   .collection('products')
   .get()
   .then((snapshot) =>{
     console.log(snapshot);

     snapshot.docs.map((doc) => {
       console.log(doc.data());
     })

     const products = snapshot.docs.map((doc) => {
       const data = doc.data();
       data['id'] = doc.id;
       return data;
     })

     this.setState({
       products,
       loading: false
     });
   })
}

handleIncreaseQuantity = (product) => {
    // console.log('Hey Increase the Qty of produc', product);
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;

    this.setState ({
        products
    })
}
handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0) {
        return;
    }

    products[index].qty -= 1;

    this.setState({
        products
    })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;

    const items = products.filter((item) => item.id !== id);  //[{}]
    this.setState({
        products: items
    })
}

getCartCount = () => {
  const {products} = this.state;
  let count = 0;
  products.forEach((product) => {
    count += product.qty;
  })

  return count;
}

getCartTotal = () => {
  const {products} = this.state;
  let cartTotal = 0;

  products.map((product) => {
    if(product.qty > 0){
      cartTotal = cartTotal + product.qty * product.price;
    }
    return '';
  })

  return cartTotal;
}

  render(){
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar 
          cart={this.getCartCount()}
        />
        <Cart 
          products={products}
          onIncreasQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1> Loading Products...</h1>}
        <div style={ { fontSize:25, padding:10 }}> TOTAL: {this.getCartTotal()} </div>
      </div>
    );
  }
}

export default App;
