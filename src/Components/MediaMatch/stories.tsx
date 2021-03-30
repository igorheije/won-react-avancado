import { Meta, Story } from '@storybook/react'

import MediaMatch from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: Story = (args) => (
  <MediaMatch {...args} greaterThan="medium">
    Only on Desktop
  </MediaMatch>
)
export const Mobile: Story = (args) => (
  <MediaMatch {...args} lessThan="medium">
    Only on Mobile
  </MediaMatch>
)
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1'
  }
}
