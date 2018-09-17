const expect = require("chai").expect;
const what = require("../lib/what");

const raw = `
1/29/16, 13:32 - Messages to this group are now secured with end-to-end encryption. Tap for more info.
6/25/15, 14:29 - ‪A user has created group "room"
6/25/15, 14:29 - You were added
11/29/16, 16:27 - User 1: Ya tengo mi S7
11/29/16, 16:28 - User 1: Soy un Android user again
11/29/16, 16:29 - User 2: Genial!
11/29/16, 16:30 - User 1: Me viene bien para el invierno
11/29/16, 16:31 - User 2: Jajjaja
12/29/16, 16:32 - User 2: iPhone al rescate
`;

describe("what", () => {
  it("should return an array", () => {
    expect(what(raw)).to.be.an("array");
  });

  it("should return an array with 1 element", () => {
    expect(what(raw, "Ya tengo mi")).to.have.lengthOf(1);
  });

  it("should return an array with 2 elements", () => {
    expect(what(raw, "te")).to.have.lengthOf(2);
  });

  it("should return an array with 1 element and the message's user is 'User 1'", () => {
    const res = what(raw, "Soy un Android user again");

    expect(res).to.have.lengthOf(1);
    expect(res[0].user).to.be.eq("User 1");
  });

  it("should return an array with 1 element and the message's date is '12/29/16'", () => {
    const res = what(raw, "iPhone al rescate");

    expect(res).to.have.lengthOf(1);
    expect(res[0].date).to.be.eq("12/29/16");
  });

  it("should return an array with 1 element and the message's time is '16:32'", () => {
    const res = what(raw, "iPhone al rescate");

    expect(res).to.have.lengthOf(1);
    expect(res[0].time).to.be.eq("16:32");
  });
});
