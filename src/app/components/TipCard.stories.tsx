import type { Meta, StoryObj } from '@storybook/react';
import { TipCard } from './TipCard';

/**
 * TipCard Component
 * 
 * Displays a job hunting tip with image, title, and description.
 * Used in the Hunt Tips section to provide actionable advice.
 * 
 * **Constitutional Compliance**: 
 * - Principle I: Reusable component accepting props for customization
 * - Principle III: Semantic HTML with proper heading hierarchy and alt text
 * - Principle IV: Vintage paper aesthetic matching design system
 * - Principle V: TypeScript interface for type safety
 */
const meta = {
  title: 'Components/TipCard',
  component: TipCard,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A card component for displaying job hunting tips with an image, title, and description. Features hover effects and responsive sizing.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    image: {
      control: 'text',
      description: 'URL of the tip card image',
    },
    title: {
      control: 'text',
      description: 'Title of the job hunting tip',
    },
    description: {
      control: 'text',
      description: 'Detailed description of the tip',
    },
  },
} satisfies Meta<typeof TipCard>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default tip card with sample content.
 */
export const Default: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    title: 'Research Your Target',
    description: 'Just like a hunter studies their prey, you should thoroughly research companies before applying. Understand their culture, values, and recent news to tailor your approach.',
  },
};

/**
 * Networking tip example with different content.
 */
export const NetworkingTip: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    title: 'Network Strategically',
    description: 'Build meaningful connections with professionals in your target industry. Attend events, engage on LinkedIn, and seek informational interviews to expand your network.',
  },
};

/**
 * Resume tip with emphasis on preparation.
 */
export const ResumeTip: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1586281380614-5a2d7e0c4afa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    title: 'Tailor Your Resume',
    description: 'Customize your resume for each application. Highlight relevant skills and experiences that match the job description to increase your chances of landing an interview.',
  },
};

/**
 * Long content example to test text overflow and spacing.
 */
export const LongContent: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    title: 'Master the Interview Process with Confidence and Preparation',
    description: 'Preparation is key to success in interviews. Research common questions, practice your answers, understand the STAR method for behavioral questions, prepare thoughtful questions for the interviewer, and always follow up with a thank you note. Remember to dress appropriately and arrive early to make a great first impression.',
  },
};

/**
 * Short content example to test minimum spacing.
 */
export const ShortContent: Story = {
  args: {
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    title: 'Stay Focused',
    description: 'Keep your goals in sight.',
  },
};

/**
 * Mobile view (320px width) - smallest responsive breakpoint.
 */
export const Mobile: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

/**
 * Tablet view (768px width) - medium breakpoint.
 */
export const Tablet: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
};
