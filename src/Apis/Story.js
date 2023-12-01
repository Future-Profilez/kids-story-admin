import { Component } from 'react';
import Api from '../Apis/Api';
class Story extends Component {

    async Login(data) {
        return Api.post("/login", data);
    }

    async Profile(data) {
        return Api.post("/update-profile", data)
    }


    async Password(data) {
        return Api.post("/change-password", data)
    }

    async Subscription(data) {
        return Api.post("/create-subscription", data)
    }

    async Subscriptionlist() {
        return Api.get("/get-subscription-list")
    }

    async Scheduledate(data) {
        return Api.post("/create-story", data)
    }

    async Reschedule(id, data) {
        return Api.post(`/reschedule-story/${id}`, data)
    }
    async Static() {
        return Api.get("/statistics")
    }

    async StoryCard(type, query,page) {
        return Api.get(`/story-list/${type}?${query}&page=${page}`,)
    }

    async Storydetilas(uuid) {
        return Api.get(`/story-detail/${uuid}`)
    }

    async storydelete(uuid) {
        return Api.get(`/delete-story/${uuid}`)
    }
    async storyreshedule(uuid, data) {
        return Api.post(`/reschedule-story/${uuid}`, data)
    }
    async saveimage(data) {
        return Api.post(`/save-image`, data)
    }
    async StoryLogout() {
        return Api.get("/admin-logout")
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