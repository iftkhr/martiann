import "./Photos.css";

function Photos(posts) {

    let arr = [];
    for (let i = 0; i < 4; i++) {
        arr.push(posts.posts[i].url)
    }
    return (
		<div className="photos-container">
            <div className="photos-heading">Photos</div>
            <div className="photos">
                {arr.map((url)=> {
                    return(<div className="photo" key={url}>
                        <img alt="" src={url} />
                    </div>)
                })}
                <div className="photos-link">See more...</div>
            </div>
		</div>
	);
}

export default Photos;
