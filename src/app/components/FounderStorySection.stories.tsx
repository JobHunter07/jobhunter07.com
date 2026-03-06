import type { Meta, StoryObj } from '@storybook/react';
import { FounderStorySection } from './FounderStorySection';

/**
 * FounderStorySection Component
 * 
 * Displays founder's personal story with professional portrait and testimonial.
 * Builds trust and emotional connection with users.
 * 
 * **Constitutional Compliance**: 
 * - Principle I: Self-contained storytelling component
 * - Principle III: Semantic structure with proper heading hierarchy
 * - Principle IV: Vintage paper aesthetic with star ratings
 */
const meta = {
  title: 'Sections/FounderStorySection',
  component: FounderStorySection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: "Founder's origin story section featuring personal narrative, professional image, and customer testimonial. Two-column responsive layout.",
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FounderStorySection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default founder story section.
 */
export const Default: Story = {};

/**
 * Mobile view (375px width) - stacked vertical layout.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/**
 * Tablet view (768px width) - intermediate breakpoint.
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

/**
 * Desktop view (1440px width) - side-by-side image and text.
 */
export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};
