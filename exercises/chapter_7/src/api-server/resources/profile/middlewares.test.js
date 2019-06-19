'use strict';
const middlewares = require('./middlewares');

describe('Profile Midldlewares', () => {
    describe('Profile Middlewares - 200', () => {
        let reqMock, resMock, nextMock;

        beforeEach(() => {
            reqMock = {
                params: {},
                body: {
                    name: "A name",
                    description: "A description"
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

        test('validate Create Profile', async () => {
            await middlewares.validateCreateProfile(reqMock, resMock, nextMock);
            expect(nextMock).toBeCalled();
        });
    });
    
    describe('Profile Middlewares - 400', () => {
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

        test('validate Create Profile', async () => {
            await middlewares.validateCreateProfile(reqMock, resMock, nextMock);
            expect(nextMock).not.toBeCalled();
            expect(resMock.status).toBeCalledWith(400);
        });
    });
});
