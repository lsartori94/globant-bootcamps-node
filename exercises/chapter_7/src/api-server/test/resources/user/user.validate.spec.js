const validate = require("../../../resources/users/validate");
const mockUser = require("../../../../test-helpers/users");
const _ = require("lodash");

describe("validate user (success)", () => {
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

  test("allUserData must execute next()", () => {
    mockReq.body = _.omit(mockUser.ALL_USERS[0], ["id", "createdAt"]);
    validate.v1.allUserData(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalled();
  });

  test("userData must execute next()", () => {
    mockReq.body = { name: "German" };
    validate.v1.userData(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalled();
  });
});

describe("validate user resources (failure)", () => {
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

  test("allUserData must return 400 (malformed request)", () => {
    mockReq.body = _.omit(mockUser.ALL_USERS[0], ["id", "createdAt", "name"]);
    validate.v1.allUserData(mockReq, mockRes, mockNext);

    expect(mockRes.status).toBeCalledWith(400);
  });

  test("userData must return 400 (malformed request)", () => {
    mockReq.body = { nombre: "German" };
    validate.v1.userData(mockReq, mockRes, mockNext);

    expect(mockRes.status).toBeCalledWith(400);
  });
});
