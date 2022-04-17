import React, { Component } from 'react'
import axios from 'axios'


class PostList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/posts").then(response => {
            console.log(response)
            this.setState({posts: response.data})
        }).catch(error => {
            console.log(error)
        })
    }
    render() {
        return (
            <div>
                List of post
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h3>{post.title}</h3>
                            <hr/>
                            <p>{post.body}</p>
                            <hr/>
                        </div>
                    })
                }
            </div>
        )
    }
}

export default PostList