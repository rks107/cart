import React from 'react';

const Navbar = (props) => {
        return (
            <div style={styles.nav}>
              <div style={styles.cartIconContainer}>
                 <img style={styles.cartIcon} src="https://image.flaticon.com/icons/svg/833/833400.svg" alt="cart-icon" />
                 <span style={styles.cartCount}> {props.cart} </span>
              </div>
            </div>
        )
}

const styles = {
    nav: {
        height:70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIcon: {
        height: 32,
        marginRight: 20
    },
    cartIconContainer: {
        position: 'relative'
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '50%',
        padding: '4px 8px',
        position: 'absolute',
        right: 0,
        top: -9
    }
}


export default Navbar;