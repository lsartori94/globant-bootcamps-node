const model = require("../../models");
const profileMock = require('../../../test-helpers/profiles');
const actions = require("./actions");


describe('profile actions happy path', () => { 
    beforeEach(() => {
        model.Profile.findAll = jest.fn().mockReturnValue(Promise.resolve(profileMock.ALL_PROFILES));
        model.Profile.findByPk = jest.fn().mockReturnValue(Promise.resolve(profileMock.ALL_PROFILES[0]));
        model.Profile.create = jest.fn().mockReturnValue(Promise.resolve(model.Profile));
        model.Profile.update = jest.fn().mockReturnValue(Promise.resolve(model.Profile));
        model.Profile.delete = jest.fn().mockReturnValue(Promise.resolve(model.Profile));
    });

    test('getAll must return all profileMock',async () => {
       let profiles = await actions.v1.getAll();
       expect(profiles).toBe(profileMock.ALL_PROFILES);
    });
    
    test('getProfileById must return one profile',async () => {
        let profileId=1;
        let profile = await actions.v1.getProfileById(profileId);
        expect(profile).toBe(profileMock.ALL_PROFILES[0]);
     });

         
    test('createprofile must return a profile',async () => {
        let profile={
            name: "nombre"
        };
        let newProfile = await actions.v1.createProfile(profile);
        expect(newProfile).toBe(model.Profile);
     });
         
     test('updateProfile must return a profile',async () => {
        let profile={
            name: "nombre nuevo"
        };
        model.Profile.findByPk = jest.fn().mockReturnValue(Promise.resolve(model.Profile));
        let newProfile = await actions.v1.updateProfile(1, profile);
        expect(newProfile).toBe(model.Profile);
     });


})