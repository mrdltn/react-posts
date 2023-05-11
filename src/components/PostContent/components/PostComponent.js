// import { Component } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';
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

export const PostComponent = ({ title, body, liked, likePost }) => {
    const heartFill = liked ? 'red' : '#DBD7D2';

    return (
        <div className="post">
            <h2>{title}</h2>
                <p>{body}</p>
                <div>
                    <button onClick = {likePost}>
                        <FavoriteIcon style = {{fill: heartFill}} />
                    </button>
                </div>
        </div>
    )
    
}