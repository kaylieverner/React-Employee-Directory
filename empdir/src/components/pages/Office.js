import React, { Component } from "react";
import DiscoverResult from "../DiscoverResult"

  class Office extends Component {
    state = {
      friend: '',
      increment: 0
    };

    componentDidMount() {
      this.getNewFriend();
    }

    getNewFriend = () => {
      fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          friend: data.message,
        })
      }).catch(err => console.log(err));
    }

    addNewFriend = () => {
      const chance = Math.random();

      if (chance > .5) {
        this.setState({
          increment: this.state.increment + 1
        })
        // show the alert component
      }
    }
    render() {
      const { friend, increment } = this.state;

      return (
        <div>
          <h1>Office Pups</h1>
          <h4>Thumbs up the pups you want to meet!</h4>
          <DiscoverResult
            friend={friend}
            getNewFriend={this.getNewFriend}
            addNewFriend={this.addNewFriend}
          />
      <h4>Made friends with {increment} pups so far</h4>
        </div>
      );
    }
}
 


export default Office;
