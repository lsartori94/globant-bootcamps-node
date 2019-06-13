const userActions = require('./actions');
const joi = require('joi');



describe('User controller happy path', () => {
  let mockReq,
    mockNext,
    mockRes;

  beforeEach(() => {
    mockRes = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn()
    };
    //mockNext =jest.fn().mockReturnValue();
    mockRes.status.mockReturnValue(mockRes);
    mockReq = {
      params: {},
      body: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        ProfileId: ""
      }
    };
    //joi.validate = jest.fn().mockReturnValue()
  });

  /**
  test('ValidateId must call next', async () => {
    await userActions.v1.validateId(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  });
  */
});
