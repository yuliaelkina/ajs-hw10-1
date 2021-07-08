import GameSavingLoader from "./gameSavingLoader";

const gameSavingLoader = new GameSavingLoader();
gameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  throw new Error("невозможно загрузить");
});