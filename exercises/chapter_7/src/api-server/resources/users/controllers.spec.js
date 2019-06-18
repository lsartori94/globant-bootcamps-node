const userMock = require('../../../test-helpers/users');
const models = require('../../models');
const userController = require('./controllers');

describe('User controller', () => {
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
      
      models.User.findAll = jest.fn();
      models.User.findByPk = jest.fn();
      models.User.create = jest.fn();
      models.User.update = jest.fn();
      models.User.destroy = jest.fn();
    });

    test('getAllUsers must return 200', async () => {
      models.User.findAll.mockResolvedValue(userMock.ALL_USERS);
      await userController.v1.getAll(mockReq, mockRes);
      expect(mockRes.send).toBeCalled();
      expect(mockRes.status).toHaveBeenCalledWith(200);
      
    });
    
    test('getUserByid must return 200', async() => {
      models.User.findByPk.mockResolvedValueOnce(userMock.ALL_USERS[0]);
      await userController.v1.getById(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.send).toBeCalled();
    });

    test('createUser must return 201', async() => {
      mockReq.body.username= 'gmarquez';
      mockReq.body.pass = 'aPassword';
      mockReq.body.name = 'Germán';
      mockReq.body.lastname = 'Márquez';
      mockReq.body.email = 'gmarquez@globant.com'  ;
      models.User.create.mockResolvedValue(mockReq.body);
      await userController.v1.createUser(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.send).toBeCalled();
    });


     test('updateUser must return 201', async() => {
       mockReq.params = 1 ;
       models.User.update.mockResolvedValue(mockReq.params);
       await userController.v1.updateUser(mockReq, mockRes);
       expect(mockRes.status).toHaveBeenCalledWith(201);
       expect(mockRes.send).toBeCalled();
     });


     test('deleteUser must return 204', async() => {
       mockReq.params = 1 ;
       models.User.destroy.mockResolvedValue(mockReq.params);
       await userController.v1.deleteUser(mockReq, mockRes);
       expect(mockRes.status).toHaveBeenCalledWith(204);
       expect(mockRes.send).toBeCalled();
     });

 

});

describe('User controller errors', () => {
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
      models.User.findByPk = jest.fn();
      models.User.findAll = jest.fn();
      models.User.create = jest.fn();
      models.User.update = jest.fn();
      models.User.destroy = jest.fn();
      
    });


    test("getAll must return 412 ", async () => {
      models.User.findAll.mockRejectedValue();
      await userController.v1.getAll(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(412);
      expect(mockRes.send).toBeCalled();
    });

    test('getUserByid must return 404', async() => {
      models.User.findByPk.mockResolvedValue();
      await userController.v1.getById(mockReq, mockRes);
      expect(mockRes.send).toBeCalled();
      expect(mockRes.status).toHaveBeenCalledWith(404);
     
    });
    test('getUserByid must return 412', async() => {
      models.User.findByPk.mockRejectedValue();
      await userController.v1.getById(mockReq, mockRes);
      expect(mockRes.send).toBeCalled();
      expect(mockRes.status).toHaveBeenCalledWith(412);
     
    });

    
    test('createUser must return 412', async() => {
      models.User.create.mockRejectedValue();
      await userController.v1.createUser(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(412);
      expect(mockRes.send).toBeCalled();
    });


     test('updateUser must return 412', async() => {
       mockReq.params = 1 ;
       models.User.update.mockRejectedValue(mockReq.params);
       await userController.v1.updateUser(mockReq, mockRes);
       expect(mockRes.status).toHaveBeenCalledWith(412);
       expect(mockRes.send).toBeCalled();
     });


     test('deleteUser must return 412', async() => {
       mockReq.params = 1 ;
       models.User.destroy.mockRejectedValue(mockReq.params);
       await userController.v1.deleteUser(mockReq, mockRes);
       expect(mockRes.status).toHaveBeenCalledWith(412);
       expect(mockRes.send).toBeCalled();
     });
  
});
