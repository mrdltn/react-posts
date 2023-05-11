import { Component } from 'react';
// import { posts } from '../../shared/projectData.js'
import './PostContent.css';
import { PostComponent } from './components/PostComponent';
import axios from 'axios';

export class PostContent extends Component {

    // поменять на useState
    state = {
        showPosts: true,
        postArr: []
        // postArr: JSON.parse(localStorage.getItem('masPosts')) || posts 
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

    deletePost = pos => { 
        if(window.confirm(`Are you ready to delete the Post "${this.state.postArr[pos].title}" ?`)) {
            const temp = [...this.state.postArr];
            temp.splice(pos, 1);
            this.setState({ postArr: temp});
            localStorage.setItem('masPosts', JSON.stringify(temp));
        }
    }

    componentDidMount() {
        axios
            .get('https://645a428f65bd868e9315acf0.mockapi.io/api/posts')
            .then((res) => {
                this.setState({
                    postArr: res.data
                })
            })
            .catch((err) => {
                console.log(err);
            })
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
                    deletePost = {() => this.deletePost(pos)}
                />
            )
        })

        if(this.state.postArr.length === 0)
            return <h1>Data loading...</h1>

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
                    this.state.showPosts &&
                    <>
                        <h1>Simple Post</h1>
                        <div className="posts"> {masPosts} </div>
                    </>
                }
                
            </>
        )
    }
}