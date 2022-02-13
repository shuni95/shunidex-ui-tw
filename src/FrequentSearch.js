import { Component } from "react";

function FrequentSearchOn(props) {
    return (
        <div className="mx-2 px-2 mt-2">
            <div className="">
                <span className="text-[#dba774] text-xl font-bold">
                    &lt;
                </span>
                <span className="ml-2 text-[peru] text-xl font-medium">
                    <button onClick={props.onClick} className="py-2 px-4 rounded-lg bg-black">{props.emoji} {props.title}</button>                
                </span> 
            </div>
            <div className="mt-2">
                <p className="border-solid border-2 border-[#dba774] p-4">Hidden content</p>
            </div>
        </div>      
    )
}

function FrequentSearchOff(props) {
    return (
        <div className="mx-2 px-2 mt-2">
            <div className="">
                <span className="text-[#dba774] text-xl font-bold">
                    &gt;
                </span>
                <span className="ml-2 text-black text-xl font-medium">
                    <button onClick={props.onClick} className="py-2 px-4 rounded-lg border-2 border-[peru]">{props.title}</button>                
                </span> 
            </div>
            <div className="mt-2"></div>    
        </div>
    )
}

export class FrequentSearch extends Component {

    constructor(props) {
        super(props);
        this.state = { contentVisible: false };
        this.toggle = this.toggle.bind(this);
    }

    toggle(event) {
        event.preventDefault();
        this.setState({contentVisible: !this.state.contentVisible});
    }

    render() {
        if (this.state.contentVisible) {
            return <FrequentSearchOn onClick={this.toggle} title={this.props.title}/>;
        } else {
            return <FrequentSearchOff onClick={this.toggle} title={this.props.title}/>;
        }
    }
}