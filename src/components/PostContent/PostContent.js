import { posts } from '../shared/projectData';
import './PostContent.css';
import { PostComponent } from './components/PostComponent';

export const PostContent = () => {

    const masPosts = posts.map((item) => {
        return (
            <PostComponent
                key = {item.id}
                title = {item.title} //пропсы статичны
                body = {item.body}
            />
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