import { reviewMsg } from "../../../utils/gameUtil";
import { DO_BETTER, EXCELLENT } from "../../../constants/reviewMsgType";

describe("Boggle game utils test", () => {
  test("should handle display review message do better", () => {
    var msg = reviewMsg(10);
    var expectedMsg = DO_BETTER;
    expect(msg).toBe(expectedMsg);
  });

  test("should handle display review message excellent", () => {
    var msg = reviewMsg(50);
    var expectedMsg = EXCELLENT;
    expect(msg).toBe(expectedMsg);
  });
});
