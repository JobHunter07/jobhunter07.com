import type { Meta, StoryObj } from '@storybook/react';
import { ContactSection } from './ContactSection';

/**
 * ContactSection Component
 * 
 * Contact form with company location, email, and phone information.
 * Features form validation, decorative background, and responsive layout.
 * 
 * **Constitutional Compliance**: 
 * - Principle I: Self-contained section with form state management
 * - Principle III: Accessible form with proper labels, required fields, and focus states
 * - Principle IV: Vintage compass background matching design theme
 */
const meta = {
  title: 'Sections/ContactSection',
  component: ContactSection,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Contact section with submission form and company contact details. Includes client-side validation and responsive two-column layout.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ContactSection>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default contact section with empty form.
 */
export const Default: Story = {};

/**
 * Mobile view (375px width) - stacked layout.
 */
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/**
 * Tablet view (768px width) - transitional layout.
 */
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};

/**
 * Desktop view (1440px width) - side-by-side layout.
 */
export const Desktop: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop',
    },
  },
};

/**
 * Interactive demo - shows form validation on submit.
 */
export const InteractiveForm: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Try filling out and submitting the form to see validation and success message.',
      },
    },
  },
};
