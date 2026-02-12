import type { Meta, StoryObj } from '@storybook/react';
import { BrowserRouter } from 'react-router';
import { ToolCard } from './ToolCard';

/**
 * ToolCard Component
 * 
 * Displays a tool offering with image, title, description, and navigation link.
 * Used in the Tools section to showcase the three main tools (Job Tracker, Company Scout, Resume).
 * 
 * **Constitutional Compliance**: 
 * - Principle I: Reusable component with props-based customization
 * - Principle III: Accessible link with proper alt text and semantic HTML
 * - Principle IV: Vintage paper aesthetic with hover animations
 * - Principle V: Strongly typed with TypeScript interface
 */
const meta = {
  title: 'Components/ToolCard',
  component: ToolCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A clickable card component for displaying tool offerings. Features image, title, description, and hover effects with smooth transitions.',
      },
    },
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <div style={{ width: '400px' }}>
          <Story />
        </div>
      </BrowserRouter>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
      description: 'URL of the tool card image',
    },
    title: {
      control: 'text',
      description: 'Title of the tool',
    },
    description: {
      control: 'text',
      description: 'Description of what the tool does',
    },
    link: {
      control: 'text',
      description: 'Route path for the tool page',
    },
  },
} satisfies Meta<typeof ToolCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Job Tracker tool card.
 */
export const JobTracker: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Job Tracker',
    description: 'Keep track of all your job applications in one organized place. Monitor status, deadlines, and follow-ups effortlessly.',
    link: '/job-tracker',
  },
};

/**
 * Company Scout tool card.
 */
export const CompanyScout: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Company Scout',
    description: 'Research companies thoroughly before applying. Access insights, culture details, and key information to target your job search.',
    link: '/company-scout',
  },
};

/**
 * Resume Builder tool card.
 */
export const ResumeBuilder: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1586281380614-5a2d7e0c4afa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Resume Builder',
    description: 'Create professional, ATS-friendly resumes tailored to each job application. Stand out from the competition.',
    link: '/resume',
  },
};

/**
 * Long content example to test text wrapping.
 */
export const LongContent: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    title: 'Advanced Job Application Management System',
    description: 'This is an extremely comprehensive tool for managing every aspect of your job search journey, from initial research and application submission to interview scheduling and offer negotiation. Track every detail with precision and never miss an opportunity.',
    link: '/advanced-tool',
  },
};

/**
 * Mobile view (375px width).
 */
export const Mobile: Story = {
  args: {
    ...JobTracker.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/**
 * Hover state demonstration (requires interaction).
 */
export const HoverState: Story = {
  args: {
    ...JobTracker.args,
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover over the card to see the lift animation and shadow enhancement.',
      },
    },
  },
};
