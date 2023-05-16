const Post = ({ postTitle, postBody }) => {

    return (
        <div>
            <div>{ postTitle }</div>
            <div>{ postBody }</div>
        </div>
    );
}

export default Post;