import React from 'react'
import SearchBar from './SearchBar'
import youtube from '../api/youtube'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
const KEY ='AIzaSyBkNi72NSQNr2BXVaI28T5wLH2dZ6RXXcY';
class App extends React.Component{
    state={videos:[], selcetedVideo:null}
    componentDidMount(){
        this.onTermSubmit('pubg');
    }
    onTermSubmit = async (term)=>{
        const response = await youtube.get('/search',{
            params:{
                q:term, 
                part:'snippet',
                type:'video',
                maxResults:5,
                key:`${KEY}`
            }
        })
        this.setState(
            {videos:response.data.items,
            selcetedVideo:response.data.items[0]}
        )
        // console.log(this.state.videos); 
    }
    onVideoSelect = (video)=>{
        this.setState({selcetedVideo : video})
    }
    render(){
        return(
            <div className='ui container'>
                <SearchBar onFormSubmit= {this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video ={this.state.selcetedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList
                                videos={this.state.videos}
                                onVideoSelect = {this.onVideoSelect}
                            />
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        )
    }
}
export default App;