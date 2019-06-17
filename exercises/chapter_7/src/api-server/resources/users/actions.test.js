'use strict';

const userData = require('../../../test-helpers/users');
const model = require('../../models');
const actions = require('./actions');


describe('User actions', () => { 
    beforeEach(() => {
        model.User.findAll = jest.fn().mockReturnValue(Promise.resolve(userData.ALL_USERS));
        model.User.findByPk = jest.fn().mockReturnValue(Promise.resolve(userData.ALL_USERS[0]));
        model.User.create = jest.fn().mockReturnValue(Promise.resolve(model.User));
        model.User.update = jest.fn().mockReturnValue(Promise.resolve(model.User));
        model.User.delete = jest.fn().mockReturnValue(Promise.resolve(model.User));
    });

    test('getAll, returns all users in the database', () => {
        return actions.getAll().then(data => {
            expect(data.length).toBe(3);
            //added conditions
        });
    });

    test('getById, return user by Id', () => {
        const expected = {
            username: 'gmarquez',
            pass: 'aPassword',
            name: 'Germán',
            lastname: 'Márquez',
            email: 'gmarquez@globant.com'
        };
        
        return actions.getById(1).then(data => {
            expect(data).toEqual(expect.objectContaining(expected));
        });
    });

    test('postUser, create user', () => {
        const newUser = {
            username: "lbenito", 
            pass: "apass", 
            name: "Lucia Andrea", 
            lastname: "Benito",
            email: "lbenito@pepe.com"
        };
        
        return actions.postUser(newUser).then(data => {
            expect(data).toBeTruthy();
        });
    });

    test('Update a user by ID', () => {
        const updateUser = {name: "Lucía A."};
        return actions.updateById(1, updateUser).then(data => {
            expect(data).toBeTruthy();
        });
    });

    test('delete a user by ID', () => {
        return actions.deleteById(1).then(data => {
            return actions.getById(1).then(user => {
                expect(user).toBeTruthy();
            });    
        });
    });
});
