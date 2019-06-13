const roleMock = require('../../../test-helpers/roles');
const model = require('../../models');
const roleController = require('./controllers');



describe('Role controller happy path', () => {
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
        name: ""
      }
    };
    model.Role.destroy = jest.fn().mockReturnValue(Promise.resolve());
    model.Role.update = jest.fn().mockReturnValue(Promise.resolve(model.role));
    model.Role.findAll = jest.fn().mockReturnValue(Promise.resolve(roleMock.ALL_ROLES));
    model.Role.findByPk = jest.fn().mockReturnValue(Promise.resolve(roleMock.ALL_ROLES[0].id));
    model.Role.create = jest.fn().mockReturnValue(Promise.resolve(model.role));
  });

  test('get Allroles must return 200', async () => {
    await roleController.v1.getAll(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toBeCalled();
  });

  test('getroleById must return 200', async () => {
    await roleController.v1.getRoleById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toBeCalled();
  });

  test('create Role must return 200', async () => {
    await roleController.v1.createRole(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toBeCalled();
  });


});

describe('Role controller bad path', () => {
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
        name: ""
    }
    };
    model.Role.findAll = jest.fn().mockReturnValue(Promise.reject());
    model.Role.findByPk = jest.fn().mockReturnValue(Promise.resolve());
    model.Role.destroy = jest.fn().mockReturnValue(Promise.resolve());
    model.Role.update = jest.fn().mockReturnValue(Promise.resolve());


  });

  test('get roleById must return 404', async () => {
    await roleController.v1.getRoleById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });
  
  test('delete role must return 404', async () => {
    await roleController.v1.deleteRole(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });

  test('update role must return 404', async () => {
    await roleController.v1.updateRole(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });

});