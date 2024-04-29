import React from 'react'

const NewsItem = (props) => {
  
    let{title, description, imageUrl, newsUrl,author ,source,date}=props;

    const truncateText = (text, maxLength) => {
      if (text.length > maxLength) {
        return text.slice(0, maxLength) + '...';
      }
      return text;
    };

    return (
      <div className='my-3'>
        <div className="card">
            <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>
              <span className="badge rounded-pill bg-danger">{source}</span>
            </div>

            <img src={imageUrl?imageUrl:"https://t.ly/9qA-X"} className="card-img-top" alt="..." style={{ height: '250px', objectFit: 'cover' }}/>
            <div className="card-body" style={{ height: '300px', overflow: 'hidden' }}>
                <h5 className="card-title">{truncateText(title, 50)}</h5>
                <p className="card-text">{truncateText(description,80)}</p>
                <p className='card-text'><small className='text-muted'>By {!author?"Unknown":author}<br />{new Date(date).toGMTString()}</small></p>
                <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>  
            </div>
        </div>
      </div>
    )
  
}

export default NewsItem