'use strict';

/****************************
*        USER MOCK         *
***************************/
const ALL_USERS = [
    {
        id: 1,
        username: 'gmarquez',
        password: 'aPassword',
        name: 'Germán',
        lastname: 'Márquez',
        email: 'gmarquez@globant.com',
        ProfileId: 1,
        createdAt: '2019-02-20T18:49:27'
    },
    {
        id: 2,
        username: 'nherrera',
        password: 'aPassword',
        name: 'Nicolas',
        lastname: 'Herrera',
        email: 'nherrera@globant.com',
        ProfileId: 1,
        createdAt: '2019-02-20T18:49:27'
    },
    {
        id: 3,
        username: 'ttest',
        password: 'aPassword',
        name: 'test',
        lastname: 'test',
        email: 'ttest@globant.com',
        ProfileId: 2,
        createdAt: '2019-02-20T18:49:27'
    }
];

module.exports = {
    ALL_USERS: ALL_USERS
};
