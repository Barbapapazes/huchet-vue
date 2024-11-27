import { expect, it } from 'vitest'
import { components } from './components'
import * as Huchet from './index'

it('should expose the correct components', () => {
  expect(Object.keys(Huchet)).toEqual(Object.values(components))
})
