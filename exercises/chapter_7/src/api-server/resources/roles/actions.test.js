'use strict';

const roleData = require('../../../test-helpers/roles');
const model = require('../../models');
const actions = require('./actions');


describe('Role actions', () => { 
    beforeEach(() => {
        model.Role.findAll = jest.fn().mockReturnValue(Promise.resolve(roleData.ALL_ROLES));
        model.Role.findByPk = jest.fn().mockReturnValue(Promise.resolve(roleData.ALL_ROLES[0]));
        model.Role.create = jest.fn().mockReturnValue(Promise.resolve(model.Role));
        model.Role.update = jest.fn().mockReturnValue(Promise.resolve(model.Role));
        model.Role.delete = jest.fn().mockReturnValue(Promise.resolve(model.Role));
    });

    test('getAll, returns all roles in the database', () => {
        return actions.getAll().then(data => {
            expect(data.length).toBe(3);
            //added conditions
        });
    });

    test('getById, return role by Id', () => {
        const expected = {name: "A role"};
        return actions.getById(1).then(data => {
            expect(data).toEqual(expect.objectContaining(expected));
        });
    });

    test('postRole, create role', () => {
        const newRole = {name: "A Role"};
        return actions.postRole(newRole).then(data => {
            expect(data).toBeTruthy();
        });
    });

    test('Update a role by ID', () => {
        const updateRole = {name: "A name for update"};
        return actions.updateById(1, updateRole).then(data => {
            expect(data).toBeTruthy();
        });
    });

    test('delete a role by ID', () => {
        return actions.deleteById(1).then(() => {
            return actions.getById(1).then(role => {
                expect(role).toBeTruthy();
            });    
        });
    });
});
