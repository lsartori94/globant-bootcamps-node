const model = require("../../models");
const roleMock = require('../../../test-helpers/roles');
const actions = require("./actions");


describe('role actions happy path', () => { 
    beforeEach(() => {
        model.Role.findAll = jest.fn().mockReturnValue(Promise.resolve(roleMock.ALL_ROLES));
        model.Role.findByPk = jest.fn().mockReturnValue(Promise.resolve(roleMock.ALL_ROLES[0]));
        model.Role.create = jest.fn().mockReturnValue(Promise.resolve(model.Role));
        model.Role.update = jest.fn().mockReturnValue(Promise.resolve(model.Role));
        model.Role.delete = jest.fn().mockReturnValue(Promise.resolve(model.Role));
    });

    test('getAll must return all roleMock',async () => {
       let roles = await actions.v1.getAll();
       expect(roles).toBe(roleMock.ALL_ROLES);
    });
    
    test('getRoleById must return one role',async () => {
        let roleId=1;
        let role = await actions.v1.getRoleById(roleId);
        expect(role).toBe(roleMock.ALL_ROLES[0]);
     });

         
    test('createRole must return a role',async () => {
        let role={
            name: "nombre"
        };
        let newRole = await actions.v1.createRole(role);
        expect(newRole).toBe(model.Role);
     });
         
     test('updateRole must return a role',async () => {
        let role={
            name: "nombre nuevo"
        };
        model.Role.findByPk = jest.fn().mockReturnValue(Promise.resolve(model.Role));
        let newRole = await actions.v1.updateRole(1, role);
        expect(newRole).toBe(model.Role);
     });


})