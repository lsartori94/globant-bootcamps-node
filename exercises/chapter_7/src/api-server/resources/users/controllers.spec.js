const userMock = require('../../../test-helpers/users');
const model = require('../../models');
const userController = require('./controllers');



describe('User controller happy path', () => {
  let mockReq,
    mockRes;

  beforeEach(() => {
    mockRes = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn()
    };

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
    model.User.destroy = jest.fn().mockReturnValue(Promise.resolve());
    model.User.update = jest.fn().mockReturnValue(Promise.resolve(model.User));
    model.User.findAll = jest.fn().mockReturnValue(Promise.resolve(userMock.ALL_USERS));
    model.User.findByPk = jest.fn().mockReturnValue(Promise.resolve(userMock.ALL_USERS[0].id));
    model.User.create = jest.fn().mockReturnValue(Promise.resolve(model.User));
  });

  test('get AllUsers must return 200', async () => {
    await userController.v1.getAll(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toBeCalled();
  });

  test('getUserById must return 200', async () => {
    await userController.v1.getUserById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toBeCalled();
  });

  test('create User must return 200', async () => {
    await userController.v1.createUser(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toBeCalled();
  });


});

describe('User controller bad path', () => {
  let mockReq,
    mockRes;

  beforeEach(() => {
    mockRes = {
      status: jest.fn(),
      send: jest.fn(),
      json: jest.fn()
    };

    mockRes.status.mockReturnValue(mockRes);
    mockReq = {
      params: {},
      body: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        ProfileId: ""}
    };
    model.User.findByPk = jest.fn().mockReturnValue(Promise.resolve());
  });

  test('getAll must return 404', async ()=>{
    model.User.findAll = jest.fn().mockReturnValue(Promise.reject());
    await userController.v1.getUserById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });

  test('get userById must return 404', async () => {
    await userController.v1.getUserById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });

  test('get userById must return 500', async () => {
    model.User.findByPk = jest.fn().mockReturnValue(Promise.reject());
    await userController.v1.getUserById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });
  
  test('create User must return 500', async () => {
    model.User.create = jest.fn().mockReturnValue(Promise.reject());
    await userController.v1.createUser(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test('delete User must return 404', async () => {
    model.User.destroy = jest.fn().mockReturnValue(Promise.reject());
    await userController.v1.deleteUser(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });
  
  test('delete User must return 500', async () => {
    model.User.findByPk = jest.fn().mockReturnValue(Promise.reject());
    await userController.v1.deleteUser(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test('update User must return 404', async () => {
    model.User.update = jest.fn().mockReturnValue(Promise.reject());
    await userController.v1.updateUser(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });

  test('update User must return 500', async () => {
    model.User.findByPk = jest.fn().mockReturnValue(Promise.reject());
    await userController.v1.updateUser(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

});