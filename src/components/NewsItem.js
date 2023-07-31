// import { getByTitle } from '@testing-library/react'
import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card" >
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    position: 'absolute',
                    right: '0'
                }}>
                    <span class="badge rounded-pill bg-danger" >{source}</span>
                </div>
                <img src={!imageUrl ? "https://gumlet.assettype.com/barandbench%2F2023-07%2Fb300be25-144a-4257-acc1-4682c4a9b362%2F24.jpg?w=1200&auto=format%2Ccompress&ogImage=true&enlarge=true" : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small class="text-danger">by {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-dark">Read more</a>
                </div>
            </div>
        </div>
    )
}
export default NewsItem
// Function based component 