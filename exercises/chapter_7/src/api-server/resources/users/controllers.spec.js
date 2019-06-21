const userMock = require('../../../test-helpers/users');
const model = require('../../../db/models');
const userController = require('./controllers');

describe('User controller', () => {
  let mockReq,
    mockRes,
    mockNext;

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




    model.User.findAll = jest.fn().mockReturnValue(Promise.resolve(userMock.ALL_USERS));
    model.User.findOne = jest.fn().mockReturnValue(Promise.resolve(userMock.ALL_USERS[0]));
    model.User.destroy = jest.fn().mockReturnValue(1);
    //   model.User.create = jest.fn().mockReturnValue(Promise.resolve(userMock));
    model.User.update = jest.fn().mockReturnValue(1);


  });

  test('get allUser must return 200', async () => {
    await userController.v1.getAll(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });

  test('get a User by Id  must return 200', async () => {

    await userController.v1.getOneByid(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });

  test('delete User must return 200', async () => {
    await userController.v1.deleteUser(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });


  test('post create User must return 200', async () => {
    await userController.v1.createUser(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });

  test('put upddate User must return 200', async () => {
    await userController.v1.updateUser(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });


});