import React from 'react';

const VideoDetail = ({ selectedVideo }) => {

	if (!selectedVideo) {
		return (<div>Loading...</div>)
	}
	const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`
	const {title, description} = selectedVideo.snippet
	return(
		<div>
			<div className="ui embed">
				<iframe allowfullscreen="allowfullscreen" title="video player" src={videoSrc} />
			</div>
			<div className="ui segment">
				<h4 className="ui header">{title}</h4>
				<p>{description}</p>
			</div>
		</div>
	)
};

export default VideoDetail;