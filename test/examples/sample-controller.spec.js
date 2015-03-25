'use strict';

/*
 * Description defining what we are testing as a whole...
 */
describe('My Unit', function () {

    /**
     * Define local variables
     */
    var createController, $rootScope;

    /**
     * Mocks
     */
    var mockData = {};

    /*
     * beforeEach: Inject any module dependencies
     */
    beforeEach(module('App.controllers'));

    /*
     * beforeEach: Inject private variables
     * Description: Logic in this block is executed before each iteration/sub describe. This can include
     * (assign priv vars to local vars, creating controllers, _$rootScope_ digest, spyOns, etc)
     */
    beforeEach(inject(function (_$rootScope_) {
        $rootScope = _$rootScope_;

        /*
         * Create controller to test against
         */
        createController = helpers.getControllerCompiler($controller, 'ControllerName', {
            $rootScope: $rootScope
        });


    }));

    /*
     * Description: Logic in this block is executed after each iteration has completed. Mainly used to clean up
     * any logic created by the beforeEach method.
     */
    afterEach(function () {
        $rootScope = _$rootScope_.new();
    })

    /*
     * Iteration Blocks should test a single functionality.
     */
    it('should exist', function () {
        var ctrl = createController();
        expect(ctrl).toBeTruthy();
    });

    /*
     * Describe blocks can be nested within other describe blocks.
     */
    describe('Add2 Method', function () {
        it('should return 4 when 2 is passed as parameter', function () {});
    });

});