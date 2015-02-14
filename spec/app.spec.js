describe("App", function() {

  describe('Registration form', function() {

    describe('Username', function() {
      it('username should exist', function() {
        expect(checkUsername()).toEqual('error');
      });

      it('username should be between 6 and 20 chars', function() {
        expect(checkUsername('bojana')).toBeTruthy();
        expect(checkUsername('sloba')).toBeFalsy();
      });
    });

  });

});
