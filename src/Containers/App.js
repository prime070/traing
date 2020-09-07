import React, { Component } from 'react';
import './App.css'
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoudry';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searhfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searhfield: event.target.value });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robots: users }))
    }

    render() {
        const { robots, searhfield } = this.state;
        const filteredRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searhfield.toLowerCase());
        })
        return !robots.length ? <h1 className='tc'>Loading</h1> :
            (
                <div className='tc'>
                    <h1 className='f1'>Robofriends</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobot} />
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
    }
}

export default App;