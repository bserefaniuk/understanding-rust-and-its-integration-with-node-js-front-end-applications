import test from 'ava'

import { sum } from '../index.d.ts'

test('sum from native', (t) => {
  t.is(sum(1, 2), 3)
})
