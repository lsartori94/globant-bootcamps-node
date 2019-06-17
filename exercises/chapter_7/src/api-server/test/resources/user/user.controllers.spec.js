"use strict";
const models = require("../../../models");
const userController = require("../../../resources/users/controllers");
const userMock = require("../../../../test-helpers/users");

describe("user controller happy path", () => {
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
    models.User.findAll = jest.fn();
    models.User.findByPk = jest.fn();
    models.User.create = jest.fn();
    models.User.update = jest.fn();
    models.User.destroy = jest.fn();
  });

  test("getAll must response 200", async () => {
    models.User.findAll.mockResolvedValue(userMock.ALL_USERS);
    await userController.v1.getAll(mockReq, mockRes);

    expect(mockRes.send).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toHaveBeenCalledWith(userMock.ALL_USERS);
  });

  test("getUserById must response 200", async () => {
    models.User.findByPk.mockResolvedValue(userMock.ALL_USERS[0]);
    mockReq.params.id = 1;
    await userController.v1.getUserByID(mockReq, mockRes);

    expect(mockRes.send).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toHaveBeenCalledWith(userMock.ALL_USERS[0]);
  });

  test("createUser must response 201", async () => {
    mockReq.body = userMock.ALL_USERS[0];
    models.User.create.mockResolvedValue(mockReq.body);
    await userController.v1.createUser(mockReq, mockRes);

    expect(mockRes.send).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.send).toHaveBeenCalledWith(userMock.ALL_USERS[0]);
  });

  test("modifyUser must response 200", async () => {
    mockReq.params.id = 1;
    models.User.update.mockResolvedValue(1);
    await userController.v1.modifyUser(mockReq, mockRes);

    expect(mockRes.send).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toHaveBeenCalledWith(mockReq.params.id);
  });

  test("deleteUser must response 204", async () => {
    models.User.destroy.mockResolvedValue(1);
    await userController.v1.deleteUser(mockReq, mockRes);

    expect(mockRes.send).toBeCalledWith({});
    expect(mockRes.status).toHaveBeenCalledWith(204);
  });
});

describe("user controller errors", () => {
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
    models.User.findAll.mockRejectedValue();
    await userController.v1.getAll(mockReq, mockRes);

    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test("getUserById must response 404 (user not found)", async () => {
    models.User.findByPk.mockResolvedValue(null);
    await userController.v1.getUserByID(mockReq, mockRes);

    expect(mockRes.send).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(404);
  });

  test("getUserById must response 500 (something went wrong)", async () => {
    models.User.findByPk.mockRejectedValue();
    await userController.v1.getUserByID(mockReq, mockRes);

    expect(mockRes.send).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(500);
  });

  test("createUser must response 400 (malformed request)", async () => {
    models.User.create.mockRejectedValue(mockReq.body);
    await userController.v1.createUser(mockReq, mockRes);

    expect(mockRes.send).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(400);
  });

  test("modifyUser must response 404 (user not found)", async () => {
    models.User.update.mockResolvedValue(null);
    await userController.v1.modifyUser(mockReq, mockRes);

    expect(mockRes.send).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toHaveBeenCalledWith({ msg: "user not found" });
  });

  test("modifyUser must response 500 (something went wrong)", async () => {
    models.User.update.mockRejectedValue();
    await userController.v1.modifyUser(mockReq, mockRes);

    expect(mockRes.send).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(500);
  });

  test("deleteUser must response 404 (user not found)", async () => {
    models.User.destroy.mockResolvedValue(0);
    await userController.v1.deleteUser(mockReq, mockRes);

    expect(mockRes.send).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toHaveBeenCalledWith({ msg: "user not found" });
  });

  test("deleteUser must response 500 (something went wrong)", async () => {
    models.User.destroy.mockRejectedValue();
    await userController.v1.deleteUser(mockReq, mockRes);

    expect(mockRes.send).toBeCalled();
    expect(mockRes.status).toHaveBeenCalledWith(500);
  });
});
