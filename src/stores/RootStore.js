import NewsStore from "./NewsStore";

export default class RootStore {
    constructor(){
        this.newsStore = new NewsStore();
    }
}