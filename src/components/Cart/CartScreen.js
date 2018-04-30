import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCart } from '../../actions/actions';

class CartScreen extends Component {
    // componentDidUpdate(prevProps) {
    //     let { setCart, user } = this.props;
    //     if (prevProps.cart !== this.props.cart) {
    //         setCart(user.id, user.jwt);
    //     }
    // }

    render() {

        return (
            <div>
                {this.props.cart.map(item => {
                    return (
                        <div>
                            <h4>{item.product.title}</h4>
                            <p>{item.quantity}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    cart: state.cart,
    user: state.authentication
});

let mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setCart
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);