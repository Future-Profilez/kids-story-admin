import { Component } from 'react';
import Api from './Api';
class Story extends Component {

    async Login(data) {
        return Api.post("/login", data)
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