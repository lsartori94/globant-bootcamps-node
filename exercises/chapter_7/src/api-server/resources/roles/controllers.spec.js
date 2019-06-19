const roleMock = require('../../../test-helpers/roles');
const model = require('../../models');
const roleController = require('./controllers');
const actions = require('./actions');



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
      params: { roleId: 1},
      body: {
        name: "Un rol"
      }
    };
    actions.v1 = jest.fn()
    actions.v1.getAll =jest.fn().mockReturnValue(Promise.resolve(roleMock.ALL_ROLES));
    actions.v1.deleteRole = jest.fn().mockReturnValue(Promise.resolve(model.Role));
    actions.v1.updateRole = jest.fn().mockReturnValue(Promise.resolve(model.Role));
    actions.v1.getRoleById = jest.fn().mockReturnValue(Promise.resolve(roleMock.ALL_ROLES[0].id));
    actions.v1.createRole = jest.fn().mockReturnValue(Promise.resolve(model.Role));
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

  test('update Role must return 200', async () => {
    await roleController.v1.updateRole(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toBeCalled();
  });
  
  test('delete Role must return 200', async () => {
    await roleController.v1.deleteRole(mockReq, mockRes);
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
    actions.v1.getRoleById = jest.fn().mockReturnValue(Promise.resolve());
  });

  test('getAll must return 404', async ()=>{
    actions.v1.getAll = jest.fn().mockReturnValue(Promise.reject());
    await roleController.v1.getAll(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test('get RoleById must return 404', async () => {
    await roleController.v1.getRoleById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });

  test('get RoleById must return 500', async () => {
    actions.v1.getRoleById = jest.fn().mockReturnValue(Promise.reject());
    await roleController.v1.getRoleById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });
  
  test('create Role must return 500', async () => {
    actions.v1.createRole = jest.fn().mockReturnValue(Promise.reject());
    await roleController.v1.createRole(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test('delete Role must return 404', async () => {
    actions.v1.deleteRole = jest.fn().mockReturnValue(Promise.resolve());
    await roleController.v1.deleteRole(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });
  
  test('delete Role must return 500', async () => {
    actions.v1.deleteRole = jest.fn().mockReturnValue(Promise.reject());
    await roleController.v1.deleteRole(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test('update Role must return 404', async () => {
    actions.v1.updateRole = jest.fn().mockReturnValue(Promise.resolve());
    await roleController.v1.updateRole(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });

  test('update Role must return 500', async () => {
    actions.v1.updateRole = jest.fn().mockReturnValue(Promise.reject());
    await roleController.v1.updateRole(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

});