import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count:0
    };

    handleDecrement = ()=>{
        this.setState({count:this.state.count - 1})
    }
    handleIncrement = () =>{
        this.setState({count:this.state.count + 1})
       }


    render() {
        return(
            <div>
                <span className={this.getBadgeClasses()}>{this.checkCount()}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm" style= {{marginLeft: "2rem"}}>Increment</button>
                <button onClick = {this.handleDecrement} className="btn btn-primary btn-sm" style= {{marginLeft: "2rem"}}>Decrement</button>
            </div>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    checkCount() {
        const {count} = this.state;
        return count === 0?"Zero" : count;
    }
 }

export default Counter;

/** THIS EXPLAINS HOW TO RENDER LISTS

 class Counter extends Component {
    state = {
        count:0,
        tags:[]
    };

      render() {
        return(
            <div>
                {this.state.tags.length===0 && "please create a new tag"}
                {this.displayTags()}
            </div>
        )
    }

 displayTags(){
    if(this.state.tags.length === 0) return <p>'There are no tags!'</p>
    return <ul>
        {this.state.tags.map(tag=> <li key={tag}>{tag}</li>)}
    </ul>
}
 * */
