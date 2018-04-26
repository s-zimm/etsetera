import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { setProducts } from '../../actions/actions';
import axios from 'axios';
import { connect } from 'react-redux';

class SpecificCategoryScreen extends Component {
    componentDidMount() {
        axios.get('http://etsetera.herokuapp.com/product/', {
            headers: { Authorization: this.props.auth }
        })
        .then(data => this.props.setProducts(data.data))
    }

    componentDidUpdate(prevProps) {
        if (prevProps.auth !== this.props.auth) {
            axios.get('http://etsetera.herokuapp.com/product/', {
                headers: { Authorization: this.props.auth }
            })
            .then(data => this.props.setProducts(data.data))
        }
    }

    getProducts = () => {
        let { products, match } = this.props;
        let categoricalProducts = products.filter(product => product.category.title === match.params.category);
        return categoricalProducts;
    }

    render() {
        let { match } = this.props;
        let productArray = this.getProducts();

        return (
            <div>
                <h1>{match.params.category}</h1>
                {productArray.map(product => (
                    <div>
                        <h1>{product.title}</h1>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setProducts
    }, dispatch);
}

const mapStateToProps = (state) => ({
    products: state.products,
    auth: state.authentication
});

export default connect(mapStateToProps, mapDispatchToProps)(SpecificCategoryScreen);