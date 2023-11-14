import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import './App.css';
import Scroll from '../Components/Scroll';
import ErrorBoundary from '../Components/ErrorBoundary';

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    onSearchChange= (event)=>{
        this.setState({searchField: event.target.value});
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                return response.json();
            })
            .then(users=>{
                this.setState({robots: users});
            })
    }

    render(){

        const {robots, searchField} = this.state;

        const filteredRobots = robots.filter((robot)=>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        });
        
        return !robots.length?
        <h1 className='tc'>Loading</h1>:
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        )  
    }
}

export default App;