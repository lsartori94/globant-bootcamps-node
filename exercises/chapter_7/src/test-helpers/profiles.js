'use strict';

/****************************
*        PROFILE MOCK         *
***************************/
const ALL_PROFILES = [
    {
        id: 1,
        name: 'A name',
        description: 'A generic description',
        createdAt: '2019-02-20T18:49:27',
        update: function() {
            return {};
        },
        destroy: function() {
            return {};
        }
    },
    {
        id: 2,
        name: 'Another name',
        description: 'Another description',
        createdAt: '2019-02-20T18:49:27'
    },
    {
        id: 3,
        name: 'Any another name',
        description: 'A generic description',
        createdAt: '2019-02-20T18:49:27'
    }
];

module.exports = {
    ALL_PROFILES: ALL_PROFILES
};
