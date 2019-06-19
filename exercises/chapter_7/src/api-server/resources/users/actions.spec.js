const model = require("../../models");
const userMock = require('../../../test-helpers/users');
const actions = require("./actions");


describe('User actions happy path', () => { 
    beforeEach(() => {
        model.User.findAll = jest.fn().mockReturnValue(Promise.resolve(userMock.ALL_USERS));
        model.User.findByPk = jest.fn().mockReturnValue(Promise.resolve(userMock.ALL_USERS[0]));
        model.User.create = jest.fn().mockReturnValue(Promise.resolve(model.User));
        model.User.update = jest.fn().mockReturnValue(Promise.resolve(model.User));
        model.User.delete = jest.fn().mockReturnValue(Promise.resolve(model.User));
    });

    test('getAll must return all userMock',async () => {
       let users = await actions.v1.getAll();
       expect(users).toBe(userMock.ALL_USERS);
    });
    
    test('getUserById must return one user',async () => {
        let userId=1;
        let user = await actions.v1.getUserById(userId);
        expect(user).toBe(userMock.ALL_USERS[0]);
     });

         
    test('createUser must return a user',async () => {
        let user={
            name: "nombre",
            lastname: "lastname",
            email: "email@magi",
            password: "passss",
            ProfileId: 1
        };
        let newUser = await actions.v1.createUser(user);
        expect(newUser).toBe(model.User);
     });
         
     test('updateUser must return a user',async () => {
        let user={
            name: "nombre nuevo",
            lastname: "lastname new",
            email: "email@magi",
            password: "passss",
            ProfileId: 1
        };
        model.User.findByPk = jest.fn().mockReturnValue(Promise.resolve(model.User));
        let newUser = await actions.v1.updateUser(1, user);
        expect(newUser).toBe(model.User);
     });


})