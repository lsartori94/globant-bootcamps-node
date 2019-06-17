const validate = require("../../../resources/roles/validate");

describe("validate role (success)", () => {
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

  test("roleData must execute next()", () => {
    mockReq.body = { name: "IT" };

    validate.v1.roleData(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  });
});

describe("validate role failure", () => {
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

  test("roleData must response 400", () => {
    mockReq.body = {};
    validate.v1.roleData(mockReq, mockRes, mockNext);

    expect(mockRes.status).toBeCalledWith(400);
  });
});
