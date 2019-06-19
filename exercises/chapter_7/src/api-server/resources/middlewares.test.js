'use strict';
const middlewares = require('./middlewares');


describe('Midldlewares', () => {
    let reqMock, resMock, nextMock;

    beforeEach(() => {
        reqMock = {
            params: {
                id: '1'
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

    test('validate Id - OK', async () => {
        await middlewares.validateId(reqMock, resMock, nextMock);
        expect(nextMock).toBeCalled();
    });

    test('validate Id - Invalid', async () => {
        reqMock.params.id = 'Lucia';
        await middlewares.validateId(reqMock, resMock, nextMock);
        expect(nextMock).not.toBeCalled();
        expect(resMock.status).toBeCalledWith(400);

        reqMock.params.id = '-1';
        await middlewares.validateId(reqMock, resMock, nextMock);
        expect(nextMock).not.toBeCalled();
        expect(resMock.status).toBeCalledWith(400);
        
        reqMock.params.id = '';
        await middlewares.validateId(reqMock, resMock, nextMock);
        expect(nextMock).not.toBeCalled();
        expect(resMock.status).toBeCalledWith(400);
    }); 
});
