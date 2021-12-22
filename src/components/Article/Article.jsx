import './article.css'

import React from 'react'

export default function Article() {
    return (
        <div className='article'>
            <img src="http://web.archive.org/web/20211031173553im_/https://images.wired.it/wp-content/uploads/2021/03/10175707/map--960x394.jpg" alt="" className="postImage" />
            <div className="articleInfo">
                <div className="articleDetails">
                    <span className="articleCat">Medicina</span>
                    <span className="articleDate"> 1 hour ago</span>
                    <br />
                </div>
                
            <div className="articleTitle">Lorem ipsum dolor, sit amet consectetur. </div>
            </div>
        </div>
        
    )
}
