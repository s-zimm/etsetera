import { combineReducers } from 'redux';

let data = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 2,
      "id": 11,
      "title": "et ea vero quia laudantium autem",
      "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    }
];

let initialUsers = [
    { name: 'Seth', job: 'DIR' }
]

const postsReducer = (state = data, action) => {
    return state;
}

const usersReducer = (state = initialUsers, action) => {
    return state
}

export default combineReducers({
    posts: postsReducer,
    users: usersReducer
});