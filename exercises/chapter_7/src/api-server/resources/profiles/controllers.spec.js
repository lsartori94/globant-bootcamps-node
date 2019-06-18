const profileMock = require('../../../test-helpers/profiles');
const model = require('../../models');
const profileController = require('./controllers');



describe('Profile controller happy path', () => {
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
        description: ""
      }
    };
    model.Profile.destroy = jest.fn().mockReturnValue(Promise.resolve());
    model.Profile.update = jest.fn().mockReturnValue(Promise.resolve(model.profile));
    model.Profile.findAll = jest.fn().mockReturnValue(Promise.resolve(profileMock.ALL_PROFILES));
    model.Profile.findByPk = jest.fn().mockReturnValue(Promise.resolve(profileMock.ALL_PROFILES[0].id));
    model.Profile.create = jest.fn().mockReturnValue(Promise.resolve(model.profile));
    model.User.update = jest.fn().mockReturnValue(Promise.resolve(model.profile));

  });

  test('get Allprofiles must return 200', async () => {
    await profileController.v1.getAll(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toBeCalled();
  });

  test('getprofileById must return 200', async () => {
    await profileController.v1.getProfileById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toBeCalled();
  });

  test('create profile must return 200', async () => {
    await profileController.v1.createProfile(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toBeCalled();
  });

  test('setProfileToUsers must return 200', async()=>{
    mockReq.params= {profileId: 1}
    mockReq.body= {usersId: [1,2,3]}
    await profileController.v1.setProfileToUsers(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(200);
    expect(mockRes.send).toBeCalled();
  })

});

describe('Profile controller bad path', () => {
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
    model.Profile.findByPk = jest.fn().mockReturnValue(Promise.resolve());
  });

  test('getAll must return 404', async ()=>{
    model.Profile.findAll = jest.fn().mockReturnValue(Promise.reject());
    await profileController.v1.getProfileById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });

  test('get profileById must return 404', async () => {
    await profileController.v1.getProfileById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });

  test('get profileById must return 500', async () => {
    model.Profile.findByPk = jest.fn().mockReturnValue(Promise.reject());
    await profileController.v1.getProfileById(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });
  
  test('create profile must return 500', async () => {
    model.Profile.create = jest.fn().mockReturnValue(Promise.reject());
    await profileController.v1.createProfile(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test('delete profile must return 404', async () => {
    model.Profile.destroy = jest.fn().mockReturnValue(Promise.reject());
    await profileController.v1.deleteProfile(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });
  
  test('delete profile must return 500', async () => {
    model.Profile.findByPk = jest.fn().mockReturnValue(Promise.reject());
    await profileController.v1.deleteProfile(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test('update profile must return 404', async () => {
    model.Profile.update = jest.fn().mockReturnValue(Promise.reject());
    await profileController.v1.updateProfile(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toBeCalled();
  });

  test('update profile must return 500', async () => {
    model.Profile.findByPk = jest.fn().mockReturnValue(Promise.reject());
    await profileController.v1.updateProfile(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toBeCalled();
  });

  test('setProfileToUsers must return 404', async()=>{
    model.User.update = jest.fn().mockReturnValue(Promise.resolve(model.profile));
    mockReq.body= {usersId: [1,2,3]}
    await profileController.v1.setProfileToUsers(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.send).toBeCalled();
    model.Profile.findByPk = jest.fn().mockReturnValue(Promise.reject());
    await profileController.v1.setProfileToUsers(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.send).toBeCalled();

  })

});