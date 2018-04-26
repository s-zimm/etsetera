import React from 'react';
import axios from 'axios';

class CategoryScreen extends React.Component {
    componentDidMount() {
        axios.get('http://etsetera.herokuapp.com/category/', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWUwY2NiY2Y0YTlmZjAwMTQ2NjU3ZGQiLCJpYXQiOjE1MjQ2ODIwNTIsImV4cCI6MTUyNzI3NDA1Mn0.huKbQu2mikb4bEWhWhsi_4tEq7HCttp8JFh9wopaty4'
            }
        })
        .then(data => console.log(data.data))
    }

    render() {
        return (
            <div>
                This is the category screen
            </div>
        )
    }
}

export default CategoryScreen;