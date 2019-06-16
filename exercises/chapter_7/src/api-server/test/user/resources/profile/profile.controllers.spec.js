"use strict";
const models = require("../../../../models");
const profilesController = require("../../../../resources/profiles/controllers");
const mockProfiles = require("../../../../../test-helpers/profiles");

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
  test("")
})
