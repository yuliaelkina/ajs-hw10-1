import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {

  static load() {
    const data = read();
    const value = json(data); 
    const GameSaving = {
      "id": value.id,
      "created": value.created,
      "userInfo": {
        "id": value.userInfo.id, 
        "name": value.userInfo.name, 
        "level": value.userInfo.level,
        "points": value.userInfo.points,
      },
    };
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(GameSaving);
      }, 500);})
  }

}
