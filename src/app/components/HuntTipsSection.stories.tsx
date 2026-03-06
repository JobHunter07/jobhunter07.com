import type { Meta, StoryObj } from '@storybook/react';
import { HuntTipsSection } from './HuntTipsSection';

/**
 * HuntTipsSection Component
 * 
 * Displays job hunting tips using TipCard components.
 * Provides actionable advice for job seekers.
 * 
 * **Constitutional Compliance**: 
 * - Principle I: Composed of reusable TipCard components
 * - Principle III: Semantic section structure
 * - Principle IV: Light paper background matching design system
 */
const meta = {
  title: 'Sections/HuntTipsSection',
  component: HuntTipsSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Hunt Tips section displaying job search advice cards. Features responsive grid layout adapting from single to two columns.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HuntTipsSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default hunt tips section with two tip cards.
 */
export const Default: Story = {};

/**
 * Mobile view (375px width) - single column layout.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/**
 * Tablet view (768px width) - transitioning to two columns.
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

/**
 * Desktop view (1440px width) - full two-column grid.
 */
export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
