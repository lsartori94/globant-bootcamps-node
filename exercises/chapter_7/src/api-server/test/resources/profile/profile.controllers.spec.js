"use strict";
const models = require("../../../models");
const profilesController = require("../../../resources/profiles/controllers");
const mockProfiles = require("../../../../test-helpers/profiles");

describe("profile controller happy path", () => {
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
    models.Profile.findAll = jest.fn();
    models.Profile.findByPk = jest.fn();
    models.Profile.create = jest.fn();
    models.Profile.update = jest.fn();
    models.Profile.destroy = jest.fn();
  });

  test("getAll must response 200", async () => {
    models.Profile.findAll.mockResolvedValue(mockProfiles.ALL_PROFILES);
    await profilesController.v1.getAll(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.send).toBeCalledWith(mockProfiles.ALL_PROFILES);
  });

  test("getProfileById must response 200", async () => {
    models.Profile.findByPk.mockResolvedValue(mockProfiles.ALL_PROFILES[0]);
    await profilesController.v1.getProfileById(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.send).toBeCalledWith(mockProfiles.ALL_PROFILES[0]);
  });

  test("createProfile must response 201", async () => {
    models.Profile.create.mockResolvedValue(mockProfiles.ALL_PROFILES[0]);
    await profilesController.v1.createProfile(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(201);
    expect(mockRes.send).toBeCalledWith(mockProfiles.ALL_PROFILES[0]);
  });

  test("modifyProfile must response 200", async () => {
    mockReq.params.id = 1;
    models.Profile.update.mockResolvedValue(1);
    await profilesController.v1.modifyProfile(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.send).toBeCalledWith(mockReq.params.id);
  });

  test("deleteProfile must response 204", async () => {
    mockReq.params.id = 1;
    models.Profile.destroy.mockResolvedValue(1);
    await profilesController.v1.deleteProfile(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(204);
    expect(mockRes.send).toBeCalledWith({});
  });

  test("addUsers must response 200", async () => {
    mockReq.body.Users = [1, 2, 3];
    models.Profile.update.mockResolvedValue(mockReq.body.Users);
    await profilesController.v1.addUsers(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.send).toBeCalledWith(mockReq.body.Users);
  });
});

describe("profile controller errors", () => {
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
    models.Profile.findAll.mockRejectedValue();
    await profilesController.v1.getAll(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test("getProfileById must response 500 (something went wrong)", async () => {
    models.Profile.findByPk.mockRejectedValue();
    await profilesController.v1.getProfileById(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test("getProfileById must response 404 (profile not found)", async () => {
    models.Profile.findByPk.mockResolvedValue(null);
    await profilesController.v1.getProfileById(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });

  test("createProfile must response 400 (malformed request)", async () => {
    models.Profile.create.mockRejectedValue();
    await profilesController.v1.createProfile(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(400);
    expect(mockRes.send).toBeCalled();
  });

  test("modifyProfile must response 404 (profile not found)", async () => {
    mockReq.params.id = 1;
    models.Profile.update.mockResolvedValue(0);
    await profilesController.v1.modifyProfile(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(404);
    expect(mockRes.send).toBeCalledWith({ msg: "profile not found" });
  });

  test("modifyProfile must response 500 (something went wrong)", async () => {
    models.Profile.update.mockRejectedValue();
    await profilesController.v1.modifyProfile(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test("deleteProfile must response 404 (profile not found)", async () => {
    models.Profile.destroy.mockResolvedValue(0);
    await profilesController.v1.deleteProfile(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(404);
    expect(mockRes.send).toBeCalledWith({ msg: "profile not found" });
  });

  test("deleteProfile must response 500 (something went wrong)", async () => {
    models.Profile.destroy.mockRejectedValue();
    await profilesController.v1.deleteProfile(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test("addUsers must response 500 (something went wrong)", async () => {
    models.Profile.update.mockRejectedValue();
    await profilesController.v1.addUsers(mockReq, mockRes);

    expect(mockRes.status).toBeCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });
});
