'use strict';

const usersData = require('../../../test-helpers/users');
const model = require('../../models');
const controllers = require('./controllers');
const actions = require('./actions');


describe('User controllers', () => {
    describe('User controllers - 200', () => { 
        let reqMock, resMock;

        beforeEach(() => {
            reqMock = {
                params: {},
                body: {
                    username: '',
                    pass: '',
                    name: '',
                    lastname: '',
                    email: ''
                }
            };
            resMock = {
                status: jest.fn(),
                send: jest.fn(),
                json: jest.fn()
            };
            resMock.status.mockReturnValue(resMock);

            actions.getAll = jest.fn().mockReturnValue(Promise.resolve(usersData.ALL_USERS));
            actions.getById = jest.fn().mockReturnValue(Promise.resolve(usersData.ALL_USERS[0]));
            actions.postUser = jest.fn().mockReturnValue(Promise.resolve(model.User));
            actions.updateById = jest.fn().mockReturnValue(Promise.resolve(model.User));
            actions.deleteById = jest.fn().mockReturnValue(Promise.resolve(model.User));
        });

        test('getAll, return state 200', async () => {
            await controllers.v1.getAll(reqMock, resMock);
            //async-await para esperar a que se terminen de ejecutar el controller.
            expect(resMock.status).toHaveBeenCalledWith(200);
            expect(resMock.send).toHaveBeenCalledWith(usersData.ALL_USERS);
        }); 

        test('getById, return state 200', async () => {
            await controllers.v1.getById(reqMock, resMock);
            expect(resMock.status).toHaveBeenCalledWith(200);
            expect(resMock.send).toHaveBeenCalledWith(usersData.ALL_USERS[0]);
        }); 

        test('postUser, return state 200', async () => {
            await controllers.v1.postUser(reqMock, resMock);
            expect(resMock.status).toHaveBeenCalledWith(200);
            expect(resMock.send).toHaveBeenCalledWith(model.User);
        });

        test('UpdateById, return state 200', async () => {
            await controllers.v1.updateById(reqMock, resMock);
            expect(resMock.status).toHaveBeenCalledWith(200);
            expect(resMock.send).toHaveBeenCalledWith(model.User);
        });

        test('deleteById, return state 204', async () => {
            await controllers.v1.deleteById(reqMock, resMock);
            expect(resMock.status).toHaveBeenCalledWith(204);
        });
    });

    describe('User controllers - 40X', () => { 
        let reqMock, resMock;

        beforeEach(() => {
            reqMock = {
                params: {},
                body: {
                    username: '',
                    pass: '',
                    name: '',
                    lastname: '',
                    email: ''
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
