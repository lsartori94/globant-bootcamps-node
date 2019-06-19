'use strict';
const middlewares = require('./middlewares');

describe('Role Midldlewares', () => {
    describe('Role Middlewares - 200', () => {
        let reqMock, resMock, nextMock;

        beforeEach(() => {
            reqMock = {
                params: {},
                body: {
                    name: "A name"
                }
            };
            resMock = {
                status: jest.fn(),
                send: jest.fn(),
                json: jest.fn()
            };
            resMock.status.mockReturnValue(resMock);
            nextMock = jest.fn();
        });

        test('validate Create Role', async () => {
            await middlewares.validateCreateRole(reqMock, resMock, nextMock);
            expect(nextMock).toBeCalled();
        });
    });
    
    describe('Role Middlewares - 400', () => {
        let reqMock, resMock, nextMock;

        beforeEach(() => {
            reqMock = {
                params: {},
                body: {}
            };
            resMock = {
                status: jest.fn(),
                send: jest.fn(),
                json: jest.fn()
            };
            resMock.status.mockReturnValue(resMock);
            nextMock = jest.fn();
        });

        test('validate Create Role', async () => {
            await middlewares.validateCreateRole(reqMock, resMock, nextMock);
            expect(nextMock).not.toBeCalled();
            expect(resMock.status).toBeCalledWith(400);
        });
    });
});
