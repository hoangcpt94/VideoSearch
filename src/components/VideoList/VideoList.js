import React from 'react';
import VideoItem from '../VideoItem/VideoItem'

const VideoList = ({ videos, videoSelect }) => {
	return(
		<div className="ui relaxed divided list">
			{
				videos.map(video => {
					return(
						<VideoItem
							key={video.id.videoId}
							video={video}
							videoSelect={videoSelect}
						/>
					)
				})
			}
		</div>
	)
};

export default VideoList;