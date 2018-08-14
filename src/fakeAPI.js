import mockData from './mockData';

class fakeAPI {
  constructor() {
    this.taskLists = mockData.taskLists;
  }

  getTaskLists() {
    return new Promise((resolve, reject) => {
      resolve(this.taskLists);
    })
  }

  addTask = (listName, taskTitle, taskText) => {
    return new Promise((resolve,reject) => {
      const affectedList = this.taskLists.find((taskList) => taskList.title === listName);

      if (affectedList) {
        affectedList.taskArray.push({
          "title": taskTitle,
          "text": taskText,
          "checked": false
        });
        resolve("SUCCESS");
      } else {
        reject("LIST NOT FOUND");
      }
    })
  }

  addList = (listTitle) => {
    const affectedList = this.taskLists.find((taskList) => taskList.title === listTitle);

    return new Promise((resolve, reject) => {
      if (!affectedList) {
        this.taskLists.push({
          "title": listTitle,
          "taskArray": []
        })
        resolve("SUCCESS");
      } else {
        reject("LIST NOT FOUND");
      }
    })
  }
}

const API = new fakeAPI();
export default API;