const validate = require("../../../../resources/profiles/validate");
const mockProfiles = require("../../../../../test-helpers/profiles");
const _ = require("lodash");

describe("profile validation success", () => {
  let mockReq, mockRes, mockNext;

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

  test("allProfileData must execute next()", () => {
    mockReq.body = _.omit(mockProfiles.ALL_PROFILES[0], ["id", "createdAt"]);
    validate.v1.allProfileData(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalled();
  });

  test("profileData must execute next()", () => {
    mockReq.body = _.omit(mockProfiles.ALL_PROFILES[0], [
      "id",
      "createdAt",
      "description"
    ]);
    validate.v1.profileData(mockReq, mockRes, mockNext);

    expect(mockNext).toBeCalled();
  });
});


describe("profile validation failure", () => {
    let mockReq, mockRes, mockNext;
  
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
  
    test("allProfileData must response with 400", () => {
      mockReq.body = {description: 'only one make it fails'}
      validate.v1.allProfileData(mockReq, mockRes, mockNext);
  
      expect(mockRes.status).toBeCalledWith(400);
      expect(mockRes.send).toBeCalled();
    });
  
    test("profileData must response with 400", () => {
      mockReq.body = {naim: 'myProfileNameWithAnInvalidProperty'}
      validate.v1.profileData(mockReq, mockRes, mockNext);
  
      expect(mockRes.status).toBeCalledWith(400);
      expect(mockRes.send).toBeCalled();
    });
  });
