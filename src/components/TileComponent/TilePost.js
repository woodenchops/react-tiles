import React, {useContext, useEffect, useState} from 'react';
import {TileContext} from '../../contexts/tileContext'; 


const TilePost = (props) => {

    let id = props.match.params.post_id;
    const {fetchData} = useContext(TileContext);
    let [post, setpost] = useState({});


    useEffect(() => {
        fetchData('/data/tileInfo.json')
            .then((res) => {
                setpost(res)
            })
    }, [fetchData])




    let singlePost = (post.length > 0) && (
        post.map((item) => (
            <div className="con">
                {(item.title) ? (<h3>{item.title}</h3>) : (<h3>This post doesn't have a title</h3>)}
                {(item.body) ? (<p>{item.body}</p>) : (<p>This post doesn't have text content</p>)}
                {(item.image) && (<img src={item.image.src} alt={item.image.alt}/>)}         
                {(item.cta) && (
                    <div className="single-post__cta-container">
                        <a href={item.cta.link} className="single-post__cta">Book now</a>
                    </div>
                )}
            </div>
        ))
    ) 


    console.log('single', singlePost)

    return(

        <div className="single-post">
            {(singlePost) && (singlePost[id])}
        </div>

    )
}

export default TilePost;