"use strict";
const models = require("../../../models");
const rolesController = require("../../../resources/roles/controllers");
const mockRoles = require("../../../../test-helpers/roles");

describe("role controller happy path", () => {
  let mockReq, mockRes;

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
    models.Role.findAll = jest.fn();
    models.Role.findByPk = jest.fn();
    models.Role.create = jest.fn();
    models.Role.update = jest.fn();
    models.Role.destroy = jest.fn();
  });

  test("getAll must response 200", async () => {
    models.Role.findAll.mockResolvedValue(mockRoles.ALL_ROLES);
    await rolesController.v1.getAll(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.send).toBeCalledWith(mockRoles.ALL_ROLES);
  });

  test("getRoleById must response 200", async () => {
    models.Role.findByPk.mockResolvedValue(mockRoles.ALL_ROLES[0]);
    await rolesController.v1.getRoleById(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.send).toBeCalledWith(mockRoles.ALL_ROLES[0]);
  });

  test("createRole must response 201", async () => {
    models.Role.create.mockResolvedValue(mockRoles.ALL_ROLES[0]);
    await rolesController.v1.createRole(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(201);
    expect(mockRes.send).toBeCalledWith(mockRoles.ALL_ROLES[0]);
  });

  test("modifyRole must 200", async () => {
    mockReq.params.id = 1;
    models.Role.update.mockResolvedValue(1);
    await rolesController.v1.modifyRole(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.send).toBeCalledWith(mockReq.params.id);
  });

  test("deleteRole must response 204", async () => {  
    models.Role.destroy.mockResolvedValue(1);
    await rolesController.v1.deleteRole(mockReq,mockRes);

    expect(mockRes.status).toBeCalledWith(204);
    expect(mockRes.send).toBeCalledWith();
  })
});

describe("role controller errors", () => {
  let mockReq, mockRes;

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
  });

  test("getAll must response 500 (something went wrong)", async () => {
    models.Role.findAll.mockRejectedValue();
    await rolesController.v1.getAll(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test("getRoleById must response 404 (role not found)", async () => {
    models.Role.findByPk.mockResolvedValue(null);
    await rolesController.v1.getRoleById(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });

  test("getRoleById must response 500 (something went wrong)", async () => {
    models.Role.findByPk.mockRejectedValue();
    await rolesController.v1.getRoleById(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test("createRole must response 400 (malformed request)", async () => {
    models.Role.create.mockRejectedValue();
    await rolesController.v1.createRole(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(400);
    expect(mockRes.send).toBeCalled();
  });

  test("modifyRole must response 400 (malformed request)", async () => {
    mockReq.params = { id: "invalidID" };
    models.Role.update.mockRejectedValue();
    await rolesController.v1.modifyRole(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(400);
    expect(mockRes.send).toBeCalled();
  });

  test("modifyRole must response 404 (role not found)", async () => {
    mockReq.params = { id: 0 };
    models.Role.update.mockResolvedValue(0);
    await rolesController.v1.modifyRole(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(404);
    expect(mockRes.send).toBeCalledWith({ msg: "role not found" });
  });


  test("deleteRole must response 500 (something went wrong)", async () => {
    models.Role.destroy.mockRejectedValue();
    await rolesController.v1.deleteRole(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test("deleteRole must response 404 (role not found)", async () => {
    mockReq.params = { id: 0 };
    models.Role.destroy.mockResolvedValue(0);
    await rolesController.v1.deleteRole(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(404);
    expect(mockRes.send).toBeCalledWith({ msg: "role not found" });
  }); 
});
