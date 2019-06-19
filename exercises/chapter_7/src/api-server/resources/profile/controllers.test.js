'use strict';

const profilesData = require('../../../test-helpers/profiles');
const model = require('../../models');
const controllers = require('./controllers');
const actions = require('./actions');


describe('Profile controllers', () => {
    describe('Profile controllers - 200', () => {
        let reqMock, resMock;
    
        beforeEach(() => {
            reqMock = {
                params: {},
                body: {
                    name: "",
                    description: ""
                }
            };
            resMock = {
                status: jest.fn(),
                send: jest.fn(),
                json: jest.fn()
            };
            resMock.status.mockReturnValue(resMock);
    
            actions.getAll = jest.fn().mockReturnValue(Promise.resolve(profilesData.ALL_PROFILES));
            actions.getById = jest.fn().mockReturnValue(Promise.resolve(profilesData.ALL_PROFILES[0]));
            actions.postProfile = jest.fn().mockReturnValue(Promise.resolve(model.Profile));
            actions.updateById = jest.fn().mockReturnValue(Promise.resolve(model.Profile));
            actions.deleteById = jest.fn().mockReturnValue(Promise.resolve(model.Profile));
            actions.assingUsersToProfile = jest.fn().mockReturnValue(Promise.resolve(model.User));
        });
    
        test('getAll, return state 200', async () => {
            await controllers.v1.getAll(reqMock, resMock);
            //async-await para esperar a que se terminen de ejecutar el controller.
            expect(resMock.status).toHaveBeenCalledWith(200);
            expect(resMock.send).toHaveBeenCalledWith(profilesData.ALL_PROFILES);
        }); 
    
        test('getById, return state 200', async () => {
            await controllers.v1.getById(reqMock, resMock);
            //async-await para esperar a que se terminen de ejecutar el controller.
            expect(resMock.status).toHaveBeenCalledWith(200);
            expect(resMock.send).toHaveBeenCalledWith(profilesData.ALL_PROFILES[0]);
        }); 
    
        test('postProfile, return state 200', async () => {
            await controllers.v1.postProfile(reqMock, resMock);
            expect(resMock.status).toHaveBeenCalledWith(200);
            expect(resMock.send).toHaveBeenCalledWith(model.Profile);
        });
    
        test('UpdateById, return state 204', async () => {
            await controllers.v1.updateById(reqMock, resMock);
            expect(resMock.status).toHaveBeenCalledWith(204);
            expect(resMock.send).toHaveBeenCalledWith(model.Profile);
        });
    
        test('deleteById, return state 204', async () => {
            await controllers.v1.deleteById(reqMock, resMock);
            expect(resMock.status).toHaveBeenCalledWith(204);
        });
    
        test('assing users to Profile, return state 200', async () => {
            await controllers.v1.assingUsers(reqMock, resMock);
            expect(resMock.status).toHaveBeenCalledWith(200);
        });
    });
    
    /**
     * Endpoint postProfile is not tested here because the middleware avoid calling
     * it if the request data is not valid. 
     */
    describe('Profile controllers - 40X', () => {
        let reqMock, resMock;
    
        beforeEach(() => {
            reqMock = {
                params: {},
                body: {
                    name: "",
                    description: ""
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
            //async-await para esperar a que se terminen de ejecutar el controller.
            expect(resMock.status).toHaveBeenCalledWith(404);
            expect(resMock.send).toHaveBeenCalled();
        }); 
    });
});
