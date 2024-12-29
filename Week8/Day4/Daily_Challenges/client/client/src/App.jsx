import React from 'react';

class App extends React.Component {
  state = {
    message: '',
    inputValue: '',
    responseMessage: '' 
};

async componentDidMount() {
    const response = await fetch('http://localhost:5000/api/hello');
    const data = await response.text();
    this.setState({ message: data });
}

handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
};

handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:5000/api/world', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value: this.state.inputValue })
    });
    const data = await response.text();
    this.setState({ responseMessage: data, inputValue: '' }); 
};

render() {
    return (
        <div>
            <h1>{this.state.message}</h1>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text" 
                    value={this.state.inputValue} 
                    onChange={this.handleInputChange} 
                    placeholder="Type something..." 
                />
                <button type="submit">Submit</button>
            </form>
            {this.state.responseMessage}
        </div>
    );
}
}

export default App;