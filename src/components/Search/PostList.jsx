import Post from './Post.jsx';

const PostList = ({ postList, searchTerm }) => {
    return (
        <div>
            { 
             postList.map((post, index) => {
                return (
                    <Post
                        key={index}
                        postTitle={post.title}
                        postBody={post.body}
                    />
                )
            }) }
        </div>
    );
}


export default PostList;
