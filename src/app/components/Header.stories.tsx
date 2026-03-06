import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router';
import { Header } from './Header';

/**
 * Header Navigation Component
 * 
 * Global navigation header with logo, menu items, search, and CTA button.
 * Features responsive design with mobile hamburger menu.
 * 
 * **Constitutional Compliance**: 
 * - Principle I: Modular component with clear responsibility
 * - Principle III: Keyboard navigable with semantic nav elements
 * - Principle IV: Maintains hunter/journey theme with compass icon
 */
const meta = {
  title: 'Sections/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Site-wide navigation header with responsive mobile menu, search functionality, and call-to-action button.',
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ minHeight: '500px', background: 'linear-gradient(to bottom, #2a3a2b, #6a7a6b)' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default header as it appears on all pages.
 */
export const Default: Story = {};

/**
 * Mobile view showing hamburger menu button.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/**
 * Tablet view showing intermediate responsive state.
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

/**
 * Desktop view with full navigation visible.
 */
export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
