var assert = require('assert');
var expect = require("chai").expect;
var request = require('request');

describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});

// Home Page test

describe("Home Page Loading Test", function() {

    var url = "http://localhost:3100/";

    it("returns status 200", function() {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
        });
    });
});

// Sign-Up page test

describe("Sign-Up Page Loading Test", function() {

    var url = "http://localhost:3100/signup";

    it("returns status 200", function() {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
        });
    });
});

// Sign-In page test

describe("Sign-In Page Loading Test", function() {

    var url = "http://localhost:3100/signin";

    it("returns status 200", function() {
        request(url, function(error, response, body) {
            expect(response.statusCode).to.equal(200);
        });
    });
});

describe("User sign up", function() {
    var url = "http://localhost:3100/signup";
    it("signs up a user", function() {
        request({
            uri: url,
            method: 'POST',
            json: {
                username: "Rowinn",
                password: "password",
                email: "rowinn@gmail.com",
                age: "23",
                gender: "male"
            }
        }, function(error, body, response) {
            if (error) throw error;
            expect(response.statusCode).to.equal(302);
        });
    });
});