import { posts } from '../shared/projectData';
import './PostContent.css';

export const PostContent = () => {

    const masPosts = posts.map((item) => {
        return (
            <div key={item.id} className="post">
                <h2>{item.title}</h2>
                <p>{item.body}</p>
            </div>
        )
    })

    return (
        <>
            <h1>Simple Post</h1>
                <div className="posts">
                    {masPosts}
                </div>
        </>
    )
}