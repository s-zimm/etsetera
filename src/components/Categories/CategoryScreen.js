import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setCategories } from '../../actions/actions'

import SingleCategory from './SingleCategory';

class CategoryScreen extends React.Component {
    componentDidMount() {
        axios.get('http://etsetera.herokuapp.com/category/', {
            headers: {
                Authorization: this.props.auth.jwt
            }
        })
        .then(data => this.props.setCategories(data.data))
    }

    render() {
        return (
            <div className="category-screen">
                {this.props.categories.map(category => 
                <SingleCategory
                    key={category.id}
                    id={category.id}
                    title={category.title}
                    description={category.description}
                />)}
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        setCategories
    }, dispatch);
}

const mapStateToProps = (state) => ({
    categories: state.categories,
    auth: state.authentication
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);