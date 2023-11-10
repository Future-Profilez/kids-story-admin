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

    async Subscriptionlist(){
        return Api.get("/get-subscription-list")
    }

    async Scheduledate(data){
        return Api.post("/create-story",data)
    }

    async Reschedule(id,data){
        return Api.post(`/reschedule-story/${id}`,data)
    }
    async Static(){
        return Api.get("/statistics")
    }



    //http://127.0.0.1:8000/api/admin/reschedule-story/6e179c7e-bd07-452b-9da8-9d58dd3014ee 
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