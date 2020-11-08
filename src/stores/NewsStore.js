import { observable, action, runInAction } from "mobx";
import axios from "axios";

export default class NewsStore {
  //store
  data = observable({
    newsArray: [
      {
        id: Date.now(),
        date: `${new Date().getDate()} / ${new Date().getMonth()} / ${new Date().getFullYear()}`,
        body: "Some news",
      },
    ],
  });

  //action Add New News
  addNews = action((body) => this.data.newsArray.push(body));

  //action remove News
  removeNews = action((id) => {
    this.data.newsArray = this.data.newsArray.filter(
      (row) => row.id !== id
    );
  });

  //axios rest operation
  getNewsFromRestApi = action(() => {
    runInAction(() =>
      axios
        .get("https://jsonplaceholder.typicode.com/todos/1")
        .then((response) => {
          // handle success
          this.addNews({id:Date.now(), date: `${new Date().getDate()} / ${new Date().getMonth()} / ${new Date().getFullYear()}`, body: response.data.title})
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    );
  });
}
