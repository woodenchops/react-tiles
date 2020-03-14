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




    let singlePost = (post.length > 0) ? (
        post.map((item) => (
            <div className="con">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <img src={item.image.src} alt={item.image.alt}/>
                
                {(item.cta) ? (
                    <div className="single-post__cta-container">
                        <a href={item.cta.link} className="single-post__cta">{item.cta.text}</a>
                    </div>
                ) : (
                    <p>no cta</p>
                )}
            </div>
        ))
    ) : ('no post')


    console.log('sibnlg', singlePost)

    return(

        <div className="single-post">
            {singlePost[id]}
        </div>

    )
}

export default TilePost;