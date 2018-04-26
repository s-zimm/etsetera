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
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWUwY2NiY2Y0YTlmZjAwMTQ2NjU3ZGQiLCJpYXQiOjE1MjQ2ODIwNTIsImV4cCI6MTUyNzI3NDA1Mn0.huKbQu2mikb4bEWhWhsi_4tEq7HCttp8JFh9wopaty4'
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
    categories: state.categories
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);