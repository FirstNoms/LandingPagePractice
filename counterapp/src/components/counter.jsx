import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 1
    };
    render() {
        return(
            <div>
              <span className={this.getBadgeClasses()}>{this.checkCount()}</span>
                <button className="btn btn-secondary btn-sm">Increment</button>
            </div>
            );
    }


    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary"
        return classes;
    }

    checkCount(){
        //object destructuring:(this helps eliminating repetitive codes by making the count property of the state object a function)
        const {count} = this.state;
        return count === 0? "Zero" : count;
    }

}

export default Counter;