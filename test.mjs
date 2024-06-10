import test from 'node:test'
import assert from 'node:assert'
import './index.mjs'

const arr = [1, 4, 6, 7, 10, 12]

test('it should sort right', t => {
  assert.equal(arr.interpolationSearch(4), 1)
  assert.equal(arr.interpolationSearch(1), 0)
  assert.equal(arr.interpolationSearch(6), 2)
  assert.equal(arr.interpolationSearch(7), 3)
  assert.equal(arr.interpolationSearch(10), 4)
  assert.equal(arr.interpolationSearch(12), 5)
})
