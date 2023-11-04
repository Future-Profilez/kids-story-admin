import { Component } from 'react';
import Ai from './Ai';
class Story extends Component {

    async ChatAi() {
        return Ai.post("completions")
    }
    render() {
        return (
            <div>
                <>

                </>
            </div>
        )
    }
}

export default Story;