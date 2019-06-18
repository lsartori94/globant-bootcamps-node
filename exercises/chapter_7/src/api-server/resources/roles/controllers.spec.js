const roleMock = require('../../../test-helpers/roles');
const models = require('../../models');
const roleController = require('./controllers');

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
      
      models.Role.findAll = jest.fn();
      models.Role.findByPk = jest.fn();
      models.Role.create = jest.fn();
      models.Role.update = jest.fn();
      models.Role.destroy = jest.fn();
    });

    test('getAllRoles must return 200', async () => {
      models.Role.findAll.mockResolvedValue(roleMock.ALL_ROLES);
      await roleController.v1.getAll(mockReq, mockRes);
      expect(mockRes.send).toBeCalled();
      expect(mockRes.status).toHaveBeenCalledWith(200);
      
    });
    
    test('getRoleByid must return 200', async() => {
      models.Role.findByPk.mockResolvedValueOnce(roleMock.ALL_ROLES[0]);
      await roleController.v1.getById(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(200);
      expect(mockRes.send).toBeCalled();
    });

    test('createRole must return 201', async() => {
      mockReq.body.name = 'A role';
      models.Role.create.mockResolvedValue(mockReq.body);
      await roleController.v1.createRole(mockReq, mockRes);
      expect(mockRes.status).toHaveBeenCalledWith(201);
      expect(mockRes.send).toBeCalled();
    });


     test('updateRole must return 201', async() => {
       mockReq.params = 1 ;
       models.Role.update.mockResolvedValue(mockReq.params);
       await roleController.v1.updateRole(mockReq, mockRes);
       expect(mockRes.status).toHaveBeenCalledWith(201);
       expect(mockRes.send).toBeCalled();
     });


     test('deleteRole must return 204', async() => {
       mockReq.params = 1 ;
       models.Role.destroy.mockResolvedValue(mockReq.params);
       await roleController.v1.deleteRole(mockReq, mockRes);
       expect(mockRes.status).toHaveBeenCalledWith(204);
       expect(mockRes.send).toBeCalled();
     });

 

});