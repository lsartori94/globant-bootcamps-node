const roleActions = require('./validator');

describe('Role actions happy path', () => {
  let mockReq,
    mockNext,
    mockRes;

  beforeEach(() => {
    mockRes = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn()
    };
    mockNext = jest.fn();
    mockRes.status.mockReturnValue(mockRes);
    mockReq = {
      params: {},
      body: {
        name: ""
      }
    };
    mockJoi = jest.fn();
    mockJoi.validate = jest.fn().mockImplementation((value, err) => { });
  });

  test('ValidateId must call next', () => {
    mockReq.params = { roleId: 1 };
    roleActions.v1.validateId(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  });

  test('ValidateBodyPost must call next', () => {
    mockReq.body = {
      name: "Un nombre"
    }
    roleActions.v1.validateBodyPost(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  });

  test('ValidateBodyPut must call next', () => {
    mockReq.body = {
      name: "Un nombre"
    };
    mockReq.params = { roleId: 1 };
    roleActions.v1.validateBodyPut(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  });


});



describe('role actions bad path', () => {
  let mockReq,
    mockNext,
    mockRes;

  beforeEach(() => {
    mockRes = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn()
    };
    mockNext = jest.fn();
    mockRes.status.mockReturnValue(mockRes);
    mockReq = {
      params: {},
      body: {
        name: ""
      }
    };
    mockJoi = jest.fn();
    mockJoi.validate = jest.fn().mockImplementation((value, err) => { });
  });


  test('ValidateId must return 422', () => {
    roleActions.v1.validateId(mockReq, mockRes, mockNext);
    expect(mockRes.json).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(422);
  });


  test('ValidateBodyPost must call next', () => {
    roleActions.v1.validateBodyPost(mockReq, mockRes, mockNext);
    expect(mockRes.json).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(422);
  });

  test('ValidateBodyPut must return 422', () => {
    mockReq.params = { roleId: 1 };
    roleActions.v1.validateBodyPut(mockReq, mockRes, mockNext);
    expect(mockRes.json).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(422); 
    mockReq.body = {
      name: "Un nombre"
    };
    mockReq.params = { roleId: 0 };    
    expect(mockRes.json).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(422);

  });

})