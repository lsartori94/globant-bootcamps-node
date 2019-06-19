const userValidator = require('./validator');

describe('User validations happy path', () => {
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
        lastname: "",
        email: "",
        password: "",
        ProfileId: ""
      }
    };
    mockSchema = {};
    mockJoi = jest.fn();
    mockJoi.validate = jest.fn().mockImplementation((value, err) => { });
  });

  test('ValidateId must call next', () => {
    mockReq.params = { userId: 1 };
    userValidator.v1.validateId(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  });

  test('ValidateBodyPost must call next', () => {
    mockReq.body = {
      name: "Un nombre",
      lastname: "Apellido",
      email: "mail@gmail.com",
      password: "contraseña",
      ProfileId: 1
    }
    userValidator.v1.validateBodyPost(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  });

  test('ValidateBodyPut must call next', () => {
    mockReq.body = {
      name: "Un nombre",
      lastname: "Apellido",
      email: "mail@gmail.com",
      password: "contraseña",
      ProfileId: 1
    };
    mockReq.params = { userId: 1 };
    userValidator.v1.validateBodyPut(mockReq, mockRes, mockNext);
    expect(mockNext).toBeCalled();
  });


});



describe('User validations bad path', () => {
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
        lastname: "",
        email: "",
        password: "",
        ProfileId: ""
      }
    };
    mockSchema = {};
    mockJoi = jest.fn();
    mockJoi.validate = jest.fn().mockImplementation((value, err) => { });
  });


  test('ValidateId must return 422', () => {
    userValidator.v1.validateId(mockReq, mockRes, mockNext);
    expect(mockRes.json).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(422);
  });


  test('ValidateBodyPost must call next', () => {
    userValidator.v1.validateBodyPost(mockReq, mockRes, mockNext);
    expect(mockRes.json).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(422);
  });

  test('ValidateBodyPut must return 422', () => {
    mockReq.params = { userId: 1 };
    userValidator.v1.validateBodyPut(mockReq, mockRes, mockNext);
    expect(mockRes.json).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(422); 
    mockReq.body = {
      name: "Un nombre",
      lastname: "Apellido",
      email: "mail@gmail.com",
      password: "contraseña",
      ProfileId: 1
    };
    mockReq.params = { userId: 0 };    
    expect(mockRes.json).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(422);

  });

})