const { describe, it } = require('mocha')
const assert = require('assert')
const sinon = require('sinon')
const handler = require('../src/handler')

describe('testing hello function', function () {
  it('should return hello world', async () => {
    sinon.stub(handler, 'hello').returns('Hello, world!')
    const resp = handler.hello()
    console.log(resp)
    assert.equal(resp, 'Hello, world!')
  })
})
