import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { setProducts, updateCart } from '../../actions/actions';
import axios from 'axios';
import { connect } from 'react-redux';

class SpecificCategoryScreen extends Component {
    componentDidMount() {
        axios.get('https://etsetera.herokuapp.com/product/', {
            headers: { Authorization: this.props.auth.jwt }
        })
        .then(data => this.props.setProducts(data.data))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.auth !== this.props.auth) {
            axios.get('https://etsetera.herokuapp.com/product/', {
                headers: { Authorization: this.props.auth.jwt }
            })
            .then(data => this.props.setProducts(data.data))
        }
    }

    getProducts = () => {
        let { products, match } = this.props;
        let categoricalProducts = products.filter(product => product.category.title === match.params.category);
        return categoricalProducts;
    }

    addProductFetch = (productId) => {
        let postOptions = {
            method: 'POST',
            url: 'https://etsetera.herokuapp.com/cartItem',
            headers: { "Authorization": this.props.auth.jwt },
            data: {
                quantity: 1,
                product: {
                     _id: productId
                },
                user: {
                    _id: this.props.auth.id
                }
            }
        }
        axios(postOptions)
        .then(data => {
            console.log(data)
            this.props.updateCart(data.data);
        })
    }

    render() {
        let { match } = this.props;
        let productArray = this.getProducts();

        return (
            <div>
                <h1>{match.params.category}</h1>
                {productArray.map(product => (
                    <div key={product.id}>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <button onClick={() => this.addProductFetch(product.id)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setProducts,
        updateCart
    }, dispatch);
}

const mapStateToProps = (state) => ({
    products: state.products,
    auth: state.authentication
});

export default connect(mapStateToProps, mapDispatchToProps)(SpecificCategoryScreen);