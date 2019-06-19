'use strict';
const middlewares = require('./middlewares');


describe('User Midldlewares', () => {
    describe('User Middlewares - 200', () => {
        let reqMock, resMock, nextMock;

        beforeEach(() => {
            reqMock = {
                params: {},
                body: {
                    username: 'lucia',
                    pass: 'apss34rr',
                    name: 'Lucia',
                    lastname: 'Benito',
                    email: 'lbe@gmail.com'
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

        test('validate Create User', async () => {
            await middlewares.validateCreateUser(reqMock, resMock, nextMock);
            expect(nextMock).toBeCalled();
        });
    });
    
    describe('User Middlewares - 400', () => {
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

        test('validate Create User', async () => {
            await middlewares.validateCreateUser(reqMock, resMock, nextMock);
            expect(nextMock).not.toBeCalled();
            expect(resMock.status).toBeCalledWith(400);
        });
    });
});
