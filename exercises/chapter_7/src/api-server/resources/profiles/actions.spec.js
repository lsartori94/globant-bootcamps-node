const profileActions = require('./actions');

describe('Profile actions happy path', () => {
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
        name: "",
        description: ""
      }
    };
    mockJoi = jest.fn();
    mockJoi.validate = jest.fn().mockImplementation((value, err) => { });
  });

  test('ValidateId must call next', () => {
    mockReq.params = { profileId: 1 };
    profileActions.v1.validateId(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  });

  test('ValidateBodyPost must call next', () => {
    mockReq.body = {
      name: "Un nombre",
      description: "Una descripcion"
    }
    profileActions.v1.validateBodyPost(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  });

  test('ValidateBodyPut must call next', () => {
    mockReq.body = {
      name: "Un nombre",
      description: "Una descripcion"
    };
    mockReq.params = { profileId: 1 };
    profileActions.v1.validateBodyPut(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  });


});



describe('profile actions bad path', () => {
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
        name: "",
        description: ""
      }
    };
    mockJoi = jest.fn();
    mockJoi.validate = jest.fn().mockImplementation((value, err) => { });
  });


  test('ValidateId must return 422', () => {
    profileActions.v1.validateId(mockReq, mockRes, mockNext);
    expect(mockRes.json).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(422);
  });


  test('ValidateBodyPost must call next', () => {
    profileActions.v1.validateBodyPost(mockReq, mockRes, mockNext);
    expect(mockRes.json).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(422);
  });

  test('ValidateBodyPut must return 422', () => {
    mockReq.params = { profileId: 1 };
    profileActions.v1.validateBodyPut(mockReq, mockRes, mockNext);
    expect(mockRes.json).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(422); 
    mockReq.body = {
      name: "Un nombre",
      description: "Una descripcion"
    };
    mockReq.params = { profileId: 0 };    
    expect(mockRes.json).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(422);

  });

})