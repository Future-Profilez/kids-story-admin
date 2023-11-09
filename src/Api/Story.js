import { Component } from 'react';
import Api from './Api';
class Story extends Component {

    async Login(data) {
        return Api.post("/login", data)
    }

    async Profile(data) {
        return Api.post("/update-profile", data)
    }

    
    async Password(data) {
        return Api.post("/change-password", data)
    }

    async Subscription(data){
        return Api.post("/create-subscription", data)
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