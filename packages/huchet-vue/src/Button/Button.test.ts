import { fireEvent, render, screen } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import Button from './Button.vue'

describe('button', () => {
  it('should emit a click event when clicked', async () => {
    const { emitted } = render(Button, {
      props: {
        label: 'Hello',
      },
    })

    await fireEvent.click(screen.getByText('Hello'))

    expect(emitted()).toMatchInlineSnapshot(`
      {
        "click": [
          [
            MouseEvent {
              "isTrusted": false,
            },
          ],
        ],
      }
    `)
  })

  describe('solid', () => {
    it('should render a solid button', () => {
      const button = render(Button, {
        props: {
          label: 'Hello',
          variant: 'solid',
        },
      })

      expect(button.html()).toMatchSnapshot()
    })
  })

  describe('outline', () => {
    it('should render an outline button', () => {
      const button = render(Button, {
        props: {
          label: 'Hello',
          variant: 'outline',
        },
      })

      expect(button.html()).toMatchSnapshot()
    })
  })
})
