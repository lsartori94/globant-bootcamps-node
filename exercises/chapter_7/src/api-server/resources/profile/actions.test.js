'use strict';

const profileData = require('../../../test-helpers/profiles');
const model = require('../../models');
const actions = require('./actions');


describe('Profile actions', () => {
    beforeEach(() => {
        model.Profile.findAll = jest.fn().mockReturnValue(Promise.resolve(profileData.ALL_PROFILES));
        model.Profile.findByPk = jest.fn().mockReturnValue(Promise.resolve(profileData.ALL_PROFILES[0]));
        model.Profile.create = jest.fn().mockReturnValue(Promise.resolve(model.Profile));
        model.Profile.update = jest.fn().mockReturnValue(Promise.resolve(model.Profile));
        model.Profile.delete = jest.fn().mockReturnValue(Promise.resolve(model.Profile));
    });

    test('getAll, returns all profiles in the database', () => {
        return actions.getAll().then(data => {
            expect(data.length).toBe(3);
            //added conditions
        });
    });

    test('getById, return profile by ID', () => {
        const expected = {name: "A name", description: "A generic description"};
        return actions.getById(1).then(data => {
            expect(data).toEqual(expect.objectContaining(expected));
        });
    });

    test('postProfile, create profile', () => {
        const newProfile = {name: "A name 2", description: "A generic description 2"};
        return actions.postProfile(newProfile).then(data => {
            expect(data).toBeTruthy();
        });
    });

    test('Update a profile by ID', () => {
        const updateProfile = {name: "A name for update", description: "A generic description"};
        return actions.updateById(1, updateProfile).then(data => {
            expect(data).toBeTruthy();
        });
    });

    test('delete a profile by ID', () => {
        return actions.deleteById(2).then(data => {
            return actions.getById(2).then(profile => {
                expect(profile).toBeTruthy();
            });    
        });
    });
});
