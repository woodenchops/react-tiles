import React, {useContext, useEffect, useState} from 'react';
import {TileContext} from '../../contexts/tileContext';
import {Link} from 'react-router-dom';


const TilePost = (props) => {

    let urlParam = props.match.params.post_id;
    const {fetchData} = useContext(TileContext);
    let [post, setpost] = useState([]);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData('/data/tileInfo.json')
            .then((res) => {
                let data = res.filter((item) => (
                    item.id === parseInt(urlParam)
                ))
                setpost(data);
                setLoading(false);
            }).catch((err) => {
                setLoading(false);
                console.log(err);
            })
    }, [fetchData, urlParam])


    let standAlonePost = (post.length > 0) ? post.map((item) => (
        <div className="post">
            {(item.title) ? (<h3>{item.title}</h3>) : (<h3>This post doesn't have a title</h3>)}
            {(item.body) ? (<p>{item.body}</p>) : (<p>This post doesn't have text content</p>)}
            {(item.image) && (<img src={item.image.src} alt={item.image.alt}/>)} 
            {(item.cta) && (
                    <div className="single-post__cta-container">
                        <a href={item.cta.link} className="single-post__cta">Book now</a>
                    </div>
                )}
        </div>
    )) : (
        <div className="err no-post">
            <p>Looks like there is no post...</p>
            <div className="single-post__cta-container">
                 <Link to="/" className="single-post__cta">Go back to homepage</Link>
            </div>
        </div>
        
    )

    return(

        <div className="single-post">
            <h1>single post</h1>
            {(loading) ? (<p>...loading</p>) : ( standAlonePost )}
        </div>

    )
}

export default TilePost;