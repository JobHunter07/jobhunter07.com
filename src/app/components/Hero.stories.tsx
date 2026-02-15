import type { Meta, StoryObj } from '@storybook/react';
import { Hero } from './Hero';

/**
 * Hero Section Component
 * 
 * The main landing section with cinematic forest background, compass decoration,
 * and call-to-action. Implements the hunter/journey visual theme.
 * 
 * **Constitutional Compliance**: 
 * - Principle I: Component-First Architecture with Storybook documentation
 * - Principle II: Performance optimized with modern image formats
 * - Principle III: Semantic HTML with accessible structure
 * - Principle IV: Faithful Figma implementation with responsive design
 */
const meta = {
  title: 'Sections/Hero',
  component: Hero,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The hero section is the first thing users see. Features a fullscreen forest background with vintage compass decoration and primary CTA button.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default hero section as it appears on the homepage.
 * Full viewport height with responsive scaling.
 */
export const Default: Story = {};

/**
 * Mobile view (375px width) - shows how the hero adapts to small screens.
 * Demonstrates responsive typography and spacing.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/**
 * Tablet view (768px width) - shows medium breakpoint styling.
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

/**
 * Desktop view (1440px width) - shows full desktop experience.
 */
export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
