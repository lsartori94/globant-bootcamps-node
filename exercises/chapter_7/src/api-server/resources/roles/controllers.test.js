'use strict';

const rolesData = require('../../../test-helpers/roles');
const model = require('../../models');
const controllers = require('./controllers');
const actions = require('./actions');


describe('Role controllers', () => {
    describe('Role controllers - 200', () => { 
        let reqMock, resMock;

        beforeEach(() => {
            reqMock = {
                params: {},
                body: {
                    name: ""
                }
            };
            resMock = {
                status: jest.fn(),
                send: jest.fn(),
                json: jest.fn()
            };
            resMock.status.mockReturnValue(resMock);

            actions.getAll = jest.fn().mockReturnValue(Promise.resolve(rolesData.ALL_ROLES));
            actions.getById = jest.fn().mockReturnValue(Promise.resolve(rolesData.ALL_ROLES[0]));
            actions.postRole = jest.fn().mockReturnValue(Promise.resolve(model.Role));
            actions.updateById = jest.fn().mockReturnValue(Promise.resolve(model.Role));
            actions.deleteById = jest.fn().mockReturnValue(Promise.resolve(model.Role));
        });

        test('getAll, return state 200', async () => {
            await controllers.v1.getAll(reqMock, resMock);
            //async-await para esperar a que se terminen de ejecutar el controller.
            expect(resMock.status).toHaveBeenCalledWith(200);
            expect(resMock.send).toHaveBeenCalledWith(rolesData.ALL_ROLES);
        }); 

        test('getById, return state 200', async () => {
            await controllers.v1.getById(reqMock, resMock);
            expect(resMock.status).toHaveBeenCalledWith(200);
            expect(resMock.send).toHaveBeenCalledWith(rolesData.ALL_ROLES[0]);
        }); 

        test('postRole, return state 200', async () => {
            await controllers.v1.postRole(reqMock, resMock);
            expect(resMock.status).toHaveBeenCalledWith(200);
            expect(resMock.send).toHaveBeenCalledWith(model.Role);
        });

        test('UpdateById, return state 200', async () => {
            await controllers.v1.updateById(reqMock, resMock);
            expect(resMock.status).toHaveBeenCalledWith(200);
            expect(resMock.send).toHaveBeenCalledWith(model.Role);
        });

        test('deleteById, return state 204', async () => {
            await controllers.v1.deleteById(reqMock, resMock);
            expect(resMock.status).toHaveBeenCalledWith(204);
        });
    });

    describe('Role controllers - 40X', () => { 
        let reqMock, resMock;

        beforeEach(() => {
            reqMock = {
                params: {},
                body: {
                    name: "",
                }
            }
            resMock = {
                status: jest.fn(),
                send: jest.fn(),
                json: jest.fn()
            }
            resMock.status.mockReturnValue(resMock);

            actions.getAll = jest.fn().mockReturnValue(Promise.resolve(undefined));
            actions.getById = jest.fn().mockReturnValue(Promise.resolve(null));
        });

        test('getAll, return state 404', async () => {
            await controllers.v1.getAll(reqMock, resMock);
            expect(resMock.status).toHaveBeenCalledWith(404);
            expect(resMock.send).toHaveBeenCalled();
        });

        test('getById, return state 404', async () => {
            await controllers.v1.getById(reqMock, resMock);
            expect(resMock.status).toHaveBeenCalledWith(404);
            expect(resMock.send).toHaveBeenCalled();
        }); 
    });
});
