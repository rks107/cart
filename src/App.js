import React from 'react';
import Cart from './Cart';
import Navbar from './Navbar';
import * as firebase from 'firebase'; 

class App extends React.Component{
  constructor() {
    super();
    this.state = {
        products : [],
        loading: true,
    }
    this.db = firebase.firestore()
}

componentDidMount() {
  // firebase
  //  .firestore()
  //  .collection('products')
  //  .get()
  //  .then((snapshot) =>{
  //    console.log(snapshot);

  //    snapshot.docs.map((doc) => {
  //      console.log(doc.data());
  //    })

  //    const products = snapshot.docs.map((doc) => {
  //      const data = doc.data();
  //      data['id'] = doc.id;
  //      return data;
  //    })

  this.db
   .collection('products')
   .onSnapshot((snapshot) => {
    const products = snapshot.docs.map((doc) => {
      const data = doc.data();
      data['id'] = doc.id;
      return data;
    })

    this.setState({
      products,
      loading: false
    });
   });

    
}

handleIncreaseQuantity = (product) => {
    // console.log('Hey Increase the Qty of produc', product);
    const {products} = this.state;
    const index = products.indexOf(product);
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
      .update({
        qty: products[index].qty + 1
      })
      .then(() => {
        console.log('Updated Successfully');
      })
      .catch((err) => {
        console.log('Error', err);
      })
    // products[index].qty += 1;

    // this.setState ({
    //     products
    // })
}
handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0) {
        return;
    }

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef
    .update({
      qty: products[index].qty - 1
    })
    .then(() => {
      console.log('Updated Successfully');
    })
    .catch((err) => {
      console.log('Error', err);
    })

    // products[index].qty -= 1;

    // this.setState({
    //     products
    // })
}

handleDeleteProduct = (id) => {
    const {products} = this.state;

    const docRef = this.db.collection('products').doc(id);

    docRef
    .delete()
    .then(() => {
      console.log('Deleted Successfully');
    })
    .catch((err) => {
      console.log('Error', err);
    })
    // const items = products.filter((item) => item.id !== id);  //[{}]
    // this.setState({
    //     products: items
    // })
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

addProduct = () => {
  this.db
  .collection('products')
  .add({
    img: 'https://images.unsplash.com/photo-1534299898413-786c624f93eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    price: 10000,
    title: 'Washing Machine',
    qty: 5
  })
  .then((docRef) => {
    console.log('product added sucessfully', docRef);
  })
  .catch((err) => {
    console.log('Error', err);
  })
}

  render(){
    const {products, loading} = this.state;
    return (
      <div className="App">
        <Navbar 
          cart={this.getCartCount()}
        />
        <button onClick={this.addProduct} style={{padding:20, fontSize:20, margin:10}}> Add Product</button>
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
