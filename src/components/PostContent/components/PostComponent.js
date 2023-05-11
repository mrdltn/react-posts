/// разметка для каждого поста //////

// import { Component } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import './PostComponent.css';

// export class PostComponent extends Component {
//     //будем использовать props, это данные которые можно передать от родительского компонента к дочернему, (они всегда идут только от верха вниз), получить доступ к нему можно через параметр
//     // console.log(props);

//     render() {
//         return (
//             <div className="post">
//                     <h2>{this.props.title}</h2>
//                     <p>{this.props.body}</p>
//                     <div>
//                         <button onClick = {{}}><FavoriteIcon/></button>
//                     </div>
//                 </div>
//         )
//     }
// }

export const PostComponent = ({ title, body, liked, likePost, deletePost }) => {
    const heartFill = liked ? 'red' : '#DBD7D2';

    return (
        <div className="post">
            <div className='postContent'>
                <h2>{title}</h2>
                    <p>{body}</p>
                    <div>
                        <button onClick = {likePost}>
                            <FavoriteIcon style = {{fill: heartFill}} />
                        </button>
                    </div>
                </div>
                <button className = 'deleteBtn' onClick={deletePost}>
                    <DeleteForeverIcon />
                </button>
        </div>
    )
    
}