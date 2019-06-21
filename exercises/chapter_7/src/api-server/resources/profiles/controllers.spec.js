const profileMock = require('../../../test-helpers/profiles');
const model = require('../../../db/models');
const profileController = require('./controllers');

describe('Profile controller', () => {
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




    model.Profile.findAll = jest.fn();
    model.Profile.findOne = jest.fn().mockReturnValue(Promise.resolve(profileMock.ALL_PROFILES[0]));
    model.Profile.destroy = jest.fn().mockReturnValue(Promise.resolve(profileMock));
    model.Profile.create = jest.fn().mockReturnValue(Promise.resolve(profileMock.ALL_PROFILES[0]));
    model.Profile.update = jest.fn().mockReturnValue(1);
    model.User.update = jest.fn().mockReturnValue(1);


  });

  test('get allProfiles must return 200', async () => {

    await profileController.v1.getAll(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });

  test('get a profile by Id  must return 200', async () => {

    await profileController.v1.getOneByid(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });

  test('delete Profile must return 200', async () => {
    await profileController.v1.deleteProfile(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });


  test('post createProfile must return 200', async () => {
    await profileController.v1.createProfile(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });

  test('put upddateProfile must return 200', async () => {
    await profileController.v1.updateProfile(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });
  test('past assignProfile must return 200', async () => {
    await profileController.v1.assignprofile(mockReq, mockRes, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.json).toBeCalled();
  });


});