const validate = require("../../resources/validate");

describe("validate id from resources", () => {
  let mockReq, mockRes, mockNext, mockJoi;

  beforeEach(() => {
    mockRes = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn()
    };

    mockRes.status.mockReturnValue(mockRes);
    mockReq = {
      params: {},
      body: {}
    };
    mockNext = jest.fn();
  });

  test("validate id must execute next() (validation success)", () => {
    mockReq.params = { id: 1 };
    validate.v1.id(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  });

  test("validate id must return 400 ", () => {
    validate.v1.id(mockReq, mockRes, mockNext);

    expect(mockRes.send).toBeCalledWith({ message: "ID not found" });
    expect(mockRes.status).toBeCalledWith(400);
  });
});
