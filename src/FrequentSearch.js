import { Component } from "react";


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
        const className = this.state.contentVisible ? '' : 'hidden';

        return (
            <div className="mx-2 px-2 mt-2">
                <div className="">
                    <span className="text-indigo-800 text-xl font-bold">
                        {this.state.contentVisible ? '<' : '>'}
                    </span>
                    <span className="ml-2 text-emerald-700 text-xl font-medium">
                        <a href="#" onClick={this.toggle}>{this.props.title}</a>
                    </span> 
                </div>
                <div className={className + " mt-2"}>
                    <p className="bg-gray-100 border-solid border-2 border-indigo-200 p-4">Hidden content</p>
                </div>            
            </div>
        )
    }
}