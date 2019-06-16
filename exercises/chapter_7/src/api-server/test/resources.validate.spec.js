const validate = require("../resources/validate");

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
    mockJoi = jest.fn();
  });

  test("validate id must return 400 ", () => {
    mockJoi.validate = jest.fn().mockImplementation(err => {});
    validate.v1.id(mockReq, mockRes, mockNext);

    expect(mockRes.send).toBeCalledWith({ message: "ID not found" });
    expect(mockRes.status).toBeCalledWith(400);
  });

  test("validate id must execute next()", () => {
    mockReq.params = { id: 1 };
    mockJoi.validate = jest.fn().mockImplementation(err => {});
    validate.v1.id(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  });
});
