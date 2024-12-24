import React from "react";

class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favoriteColor: 'red',
      show: true ,
    };
  }

  componentDidMount() {
    console.log('componentDidMount Reached');
    this.timer = setTimeout(() => {
      this.setState({ favoriteColor: 'yellow' });
    }, 2000)

  }

  shouldComponentUpdate(nextProps, nextState) {
    return true; 
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("after update");
}
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("in getSnapshotBeforeUpdate");
    return null;
}
  changeColor = () => {
    this.setState({ favoriteColor: 'blue' }); 
  };
  deleteChild = () => {
    this.setState({ show: false }); 
  }
  render() {
    return (
      <div>
        <h1>My Favorite Color Is {this.state.favoriteColor}</h1>
        <button onClick={this.changeColor}>Change to blue</button>
        <button onClick={this.deleteChild}>Delete Header</button>
        {this.state.show && <Child />}
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("Child component will unmount!"); 
  }

  render() {
    return <h2>Hello World!</h2>; e
  }
}


export default Color;