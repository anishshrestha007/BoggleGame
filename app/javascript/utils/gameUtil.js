
import { showToast } from "../components/generics/Toast";
export const isSubmitValid =(word,gameInfo)=>{
    var result = true;
    if (word && gameInfo) {
        const wordExists =
          gameInfo.words.filter(wrds => wrds.word === word).length > 0;
        if (wordExists) {
          showToast(
            "warning",
            "Sorry " + gameInfo.userName + ", You have already thought about it!"
          );
          result = false;
        }
      }
      if (word.length < gameInfo.minWord) {
        showToast(
          "warning",
          "Sorry " +
            gameInfo.userName +
            ", Word should be atleast " +
            gameInfo.minWord +
            " character"
        );
        result = false;
      }
      if (word.length > gameInfo.maxWord) {
        showToast(
          "warning",
          "Sorry " +
            gameInfo.userName +
            ", Word should notbe greater than " +
            gameInfo.maxWord +
            " character"
        );
        result = false;
      }
      return result;
}