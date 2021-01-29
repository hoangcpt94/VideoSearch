import React, {Component} from 'react';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar/SearchBar';
import VideoList from './components/VideoList/VideoList';
import VideoDetail from './components/VideoDetail/VideoDetail'


class App extends Component {
	state = {
		searchField: '',
		videos: [],
		selectedVideo: null
	};

	componentDidMount = async () => {
		const response = await youtube.get('/search', {
			params: {q: 'hot girl bikini'}
		})
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		})
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}

	onSearchSubmit = async (event) => {
		event.preventDefault()
		const response = await youtube.get('/search', {
			params: {q: this.state.searchField}
		})
		this.setState({
			videos: response.data.items,
			selectedVideo: response.data.items[0]
		})
	} 

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video })
	}


	render() {
		const {searchField, videos, selectedVideo} = this.state
		return(
			<div className="ui container">
				<SearchBar
					searchSubmit={this.onSearchSubmit}
					searchChange={this.onSearchChange}
					searchField={searchField}
				/>

				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail selectedVideo={selectedVideo}/>
						</div>

						<div className="five wide column">
							<VideoList 
								videoSelect={this.onVideoSelect}
								videos={videos} 
							/>
						</div>
					</div>
				</div>
			</div>
		)
	};

};

export default App;