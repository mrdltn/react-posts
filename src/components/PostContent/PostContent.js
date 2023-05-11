import { Component } from 'react';
import { posts } from '../../shared/projectData.js'
import './PostContent.css';
import { PostComponent } from './components/PostComponent';

export class PostContent extends Component {

    // поменять на useState
    state = {
        showPosts: true,
        // postArr: posts
        postArr: JSON.parse(localStorage.getItem('masPosts')) || posts 
    }

    likePost = pos => {
        const tempArr = [...this.state.postArr];
        tempArr[pos].liked = !tempArr[pos].liked;

        this.setState({ postArr: tempArr });

        localStorage.setItem('masPosts', JSON.stringify(tempArr));
    }

    togglePost = () => {
        //this.setState асинхронный, потому смотри логи
        this.setState(({showPosts}) => {
            // console.log('1, но он будет выведен вторым ');
            return {showPosts: !showPosts}
        })
            // console.log('2, но будет выведен первым!');
    }

    render() {

        const masPosts = this.state.postArr.map((item, pos) => {
            return (
                <PostComponent
                    key = {item.id}
                    title = {item.title} //пропсы статичны
                    body = {item.body}
                    // pos = {pos}
                    liked = {item.liked}
                    likePost = {() => this.likePost(pos)}
                />
            )
        })

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
                        <div className="posts"> {masPosts} </div>
                    </>
                    : null
                }
                
            </>
        )
    }
}