import type { Meta, StoryObj } from '@storybook/react';
import { AboutSection } from './AboutSection';

/**
 * AboutSection Component
 * 
 * Footer-like section displaying company mission, offerings, quick links, and social media.
 * Provides comprehensive overview of the Jobhunter07 platform.
 * 
 * **Constitutional Compliance**: 
 * - Principle I: Self-contained section component
 * - Principle III: Accessible links with hover states and semantic structure
 * - Principle IV: Dark forest theme matching design system
 */
const meta = {
  title: 'Sections/AboutSection',
  component: AboutSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'About/Footer section with mission statement, feature list, quick links, and social media connections. Features responsive grid layout.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AboutSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default about section as it appears on pages.
 */
export const Default: Story = {};

/**
 * Mobile view (375px width) - stacked single column layout.
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
 * Desktop view (1440px width) - four column grid.
 */
export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
