const roleMock = require('../../../test-helpers/roles');
const model = require('../../../db/models');
const roleController = require('./controllers');

describe('Role controller', () => {
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
  



    model.Role.findAll = jest.fn().mockReturnValue(Promise.resolve(roleMock.ALL_ROLES));
    model.Role.findOne =jest.fn().mockReturnValue(Promise.resolve(roleMock.ALL_ROLES[0]));
    model.Role.destroy =jest.fn().mockReturnValue(1);
 //   model.Role.create = jest.fn().mockReturnValue(Promise.resolve(roleMock));
    model.Role.update = jest.fn().mockReturnValue(1);


  });

  test('get allRole must return 200', async () => {
    await roleController.v1.getAll(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });

  test('get a Role by Id  must return 200', async () => {

    await roleController.v1.getOneById(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });

  test('delete Role must return 200', async () => {
    await roleController.v1.deleteRol(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });


  test('post create Role must return 200', async () => {
    await roleController.v1.createRol(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });

  test('put update Role must return 200', async () => {
    await roleController.v1.updateRol(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });


});