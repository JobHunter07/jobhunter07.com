import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router';
import { ToolsSection } from './ToolsSection';

/**
 * ToolsSection Component
 * 
 * Showcases the three main tools: Job Tracker, Company Scout, and Resume.
 * Uses ToolCard components in a responsive grid layout.
 * 
 * **Constitutional Compliance**: 
 * - Principle I: Composed of reusable ToolCard components
 * - Principle III: Accessible navigation to tool pages
 * - Principle IV: Forest green background matching hunter theme
 */
const meta = {
  title: 'Sections/ToolsSection',
  component: ToolsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Tools showcase section displaying three main product features. Features responsive grid from one to three columns.',
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof ToolsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default tools section with all three tools.
 */
export const Default: Story = {};

/**
 * Mobile view (375px width) - single column stacked cards.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/**
 * Tablet view (768px width) - two column grid.
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

/**
 * Desktop view (1440px width) - three column grid.
 */
export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
