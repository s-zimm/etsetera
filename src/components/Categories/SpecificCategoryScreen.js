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

    render() {
        return (
            <div>
                <h1>{this.props.match.params.category}</h1>
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