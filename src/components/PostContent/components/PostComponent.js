export const PostComponent = ({title, body}) => {
    //будем использовать props, это данные которые можно передать от родительского компонента к дочернему, (они всегда идут только от верха вниз), получить доступ к нему можно через параметр
    // console.log(props);
    return (
        <div className="post">
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
    )
}