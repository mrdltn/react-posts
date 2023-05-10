import { Component } from 'react';
import { posts } from '../shared/projectData';
import './PostContent.css';
import { PostComponent } from './components/PostComponent';

export class PostContent extends Component {

    // поменять на useState
    state = {
        showPosts: true
    }

    masPosts = posts.map((item) => {
        return (
            <PostComponent
                key = {item.id}
                title = {item.title} //пропсы статичны
                body = {item.body}
            />
        )
    })

    togglePost = () => {
        //this.setState асинхронный, потому смотри логи
        this.setState((state) => {
            console.log('1, но он будет выведен вторым ');
            return {showPosts: !state.showPosts}
        })
            console.log('2, но будет выведен первым!');
    }

    render() {
        return (
            <>
                {/* {
                    this.state.showPosts ? 'show Posts' : 'hide Posts'
                } */}
                <button onClick = {this.togglePost}>
                    {
                        this.state.showPosts ? 'Hide all Posts' : 'Show posts'
                    }
                </button>
                {
                    this.state.showPosts ?
                    <>
                        <h1>Simple Post</h1>
                        <div className="posts">
                            {this.masPosts}
                        </div>
                    </>
                    : null
                }
                
            </>
        )
    }
}