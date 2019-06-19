const profileMock = require('../../../test-helpers/profiles');
const userMock = require('../../../test-helpers/users');
const models = require('../../models');
const profileController = require('./controllers');

describe('profile controller', () => {
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
        body: {}
      };
      
      models.Profile.findAll = jest.fn();
      models.Profile.findByPk= jest.fn().mockReturnValue(Promise.resolve(profileMock.ALL_PROFILES[0]));
      models.Profile.assignUsers = jest.fn();
      models.User.findAll= jest.fn().mockReturnValue(Promise.resolve(userMock.ALL_USERS));
      models.Profile.create = jest.fn();
      models.Profile.update = jest.fn();
      models.Profile.destroy = jest.fn();
    });

    test('getAllProfiles must return 200', async () => {
      models.Profile.findAll.mockResolvedValue(profileMock.ALL_PROFILES);
      await profileController.v1.getAll(mockReq, mockRes);
      expect(mockRes.send).toBeCalled();
      expect(mockRes.status).toHaveBeenCalledWith(200);
      
    });
    
    test('getProfileByid must return 200', async() => {
      models.Profile.findByPk.mockResolvedValue(profileMock.ALL_PROFILES[0]);
      await profileController.v1.getById(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.send).toBeCalled();
    });

    test('AssignUsers must return 200', async() => {
        mockReq.params = 1 ;
        mockReq.body = [{id:1}];
        models.Profile.findByPk.mockResolvedValue(profileMock.ALL_PROFILES[0]);
        models.User.findAll.mockResolvedValue(userMock.ALL_USERS[0]);
        await profileController.v1.assignUsers(mockReq, mockRes);
        expect(mockRes.status).toHaveBeenCalledWith(200);
        expect(mockRes.send).toBeCalled();
      });

    test('createProfile must return 201', async() => {
      mockReq.body.name = 'A name';
      mockReq.body.description = 'A generic description';
      models.Profile.create.mockResolvedValue(mockReq.body);
      await profileController.v1.createProfile(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.send).toBeCalled();
    });


     test('updateProfile must return 201', async() => {
       mockReq.params = 1 ;
       models.Profile.update.mockResolvedValue(mockReq.params);
       await profileController.v1.updateProfile(mockReq, mockRes);
       expect(mockRes.status).toHaveBeenCalledWith(201);
       expect(mockRes.send).toBeCalled();
     });


     test('deleteProfile must return 204', async() => {
       mockReq.params = 1 ;
       models.Profile.destroy.mockResolvedValue(mockReq.params);
       await profileController.v1.deleteProfile(mockReq, mockRes);
       expect(mockRes.status).toHaveBeenCalledWith(204);
       expect(mockRes.send).toBeCalled();
     });

     describe('Profile controller errors', () => {
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
            body: {}
          };
          models.Profile.findByPk = jest.fn();
          models.Profile.findAll = jest.fn();
          models.Profile.assignUsers = jest.fn();
          models.Profile.create = jest.fn();
          models.Profile.update = jest.fn();
          models.Profile.destroy = jest.fn();
          
        });
    
    
        test("getAllProfiles must return 500 ", async () => {
          models.Profile.findAll.mockRejectedValue();
          await profileController.v1.getAll(mockReq, mockRes);
          expect(mockRes.status).toHaveBeenCalledWith(500);
          expect(mockRes.send).toBeCalled();
        });

    
        test('getProfileByid must return 404', async() => {
          models.Profile.findByPk.mockResolvedValue();
          await profileController.v1.getById(mockReq, mockRes);
          expect(mockRes.send).toBeCalled();
          expect(mockRes.status).toHaveBeenCalledWith(404);
         
        });
        test('getProfileByid must return 500', async() => {
          models.Profile.findByPk.mockRejectedValue();
          await profileController.v1.getById(mockReq, mockRes);
          expect(mockRes.send).toBeCalled();
          expect(mockRes.status).toHaveBeenCalledWith(500);
         
        });
    
        
        test('createProfile must return 500', async() => {
          models.Profile.create.mockRejectedValue();
          await profileController.v1.createProfile(mockReq, mockRes);
          expect(mockRes.status).toHaveBeenCalledWith(500);
          expect(mockRes.send).toBeCalled();
        });
    
    
         test('updateProfile must return 500', async() => {
           mockReq.params = 1 ;
           models.Profile.update.mockRejectedValue(mockReq.params);
           await profileController.v1.updateProfile(mockReq, mockRes);
           expect(mockRes.status).toHaveBeenCalledWith(500);
           expect(mockRes.send).toBeCalled();
         });
    
    
         test('deleteRole must return 500', async() => {
           mockReq.params = 1 ;
           models.Profile.destroy.mockRejectedValue(mockReq.params);
           await profileController.v1.deleteProfile(mockReq, mockRes);
           expect(mockRes.status).toHaveBeenCalledWith(500);
           expect(mockRes.send).toBeCalled();
         });
 
        });

});