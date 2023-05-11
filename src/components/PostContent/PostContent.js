import { Component } from 'react';
// import { posts } from '../../shared/projectData.js'
import stylesPostContent from './PostContent.module.css';
import { PostComponent } from './components/PostComponent';
import axios from 'axios';

export class PostContent extends Component {

    // поменять на useState
    state = {
        showPosts: true,
        postArr: [],
        isPending: false
        // postArr: JSON.parse(localStorage.getItem('masPosts')) || posts 
    }

    togglePost = () => {
        //this.setState асинхронный, потому смотри логи
        this.setState(({showPosts}) => {
            // console.log('1, но он будет выведен вторым ');
            return {showPosts: !showPosts}
        })
            // console.log('2, но будет выведен первым!');
    }

    getPosts = () => {
        this.setState({
            isPending: true
        })
        axios
        .get('https://645a428f65bd868e9315acf0.mockapi.io/api/posts')
        .then((res) => {
            this.setState({
                postArr: res.data,
                isPending: false
            })
        })
        .catch((err) => {
            console.log(err);
        })
    }

    // getFavoritePosts = () => { //////////
    //     axios
    //     .get(likePost)
    //     .then((res) => {
    //         this.setState({
    //             postArr: res.data,
    //             isPending: false
    //         })
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
    // }

    likePost = (postItem) => {
        const favoriteArr = {...postItem};
        favoriteArr.liked = !favoriteArr.liked;

        axios.put(`https://645a428f65bd868e9315acf0.mockapi.io/api/posts/${postItem.id}`, favoriteArr)
            .then((res) => {
                console.log('Post changed', res.data);
                this.getPosts();
            })
            .catch((err) => {
                console.log(err);
            })
    }

    deletePost = (postItem) => { 
        if(window.confirm(`Are you ready to delete the Post "${postItem.title}" ?`)) {
            this.setState({
                isPending: true
            })
            axios.delete(`https://645a428f65bd868e9315acf0.mockapi.io/api/posts/${postItem.id}`)
                .then((res) => {
                    console.log('Post deleted', res.data);
                    this.getPosts();
                })
                .catch((err) => {
                    console.log(err);
                })
            // const temp = [...this.state.postArr];
            // temp.splice(pos, 1);
            // this.setState({ postArr: temp});
            // localStorage.setItem('masPosts', JSON.stringify(temp));
        }
    }

    componentDidMount() {
        this.getPosts();
        // this.getFavoritePosts(); ////////
    }

    render() {

        const masPosts = this.state.postArr.map((item, pos) => {
            return (
                <PostComponent
                    key = {item.id}
                    title = {item.title} //пропсы статичны
                    body = {item.body}
                    liked = {item.liked}
                    likePost = {() => this.likePost(item)}
                    deletePost = {() => this.deletePost(item)}
                    // getFavoritePosts = {() => this.getFavoritePosts} ///////
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
                        <h1>Post search</h1>
                        {
                            this.state.isPending && <h2>loading, please wait...</h2>
                        }
                        <div className = { stylesPostContent.posts }> {masPosts} </div>
                    </>
                }
                
            </>
        )
    }
}