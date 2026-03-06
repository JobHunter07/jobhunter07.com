import type { Meta, StoryObj } from '@storybook/react';
import { ImageWithFallback } from './ImageWithFallback';

/**
 * ImageWithFallback Component
 * 
 * A resilient image component that displays a placeholder icon when image loading fails.
 * Provides graceful degradation for broken image URLs.
 * 
 * **Constitutional Compliance**: 
 * - Principle I: Utility component with single responsibility
 * - Principle III: Accessible alt text and error handling
 * - Principle V: TypeScript strict mode with proper type inheritance
 * - Principle VI: Simple, readable error handling (no magic)
 */
const meta = {
  title: 'Utilities/ImageWithFallback',
  component: ImageWithFallback,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A wrapper around the native <img> element that automatically displays a fallback placeholder when the image fails to load. Useful for external images that may not always be available.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'URL of the image to display',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image',
    },
    className: {
      control: 'text',
      description: 'CSS classes to apply to the image',
    },
    style: {
      control: 'object',
      description: 'Inline styles to apply',
    },
  },
} satisfies Meta<typeof ImageWithFallback>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Successfully loaded image.
 */
export const Success: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Forest trail with mist',
    style: { width: '400px', height: '300px', objectFit: 'cover', borderRadius: '8px' },
  },
};

/**
 * Failed image load showing fallback placeholder.
 */
export const ErrorFallback: Story = {
  args: {
    src: 'https://invalid-url-that-will-fail.com/image.jpg',
    alt: 'Broken image',
    style: { width: '400px', height: '300px', borderRadius: '8px' },
  },
  parameters: {
    docs: {
      description: {
        story: 'When the image fails to load, a gray placeholder with an icon is displayed instead.',
      },
    },
  },
};

/**
 * Small thumbnail size (100x100).
 */
export const SmallThumbnail: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=100',
    alt: 'Small thumbnail',
    style: { width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%' },
  },
};

/**
 * Large banner size (800x200).
 */
export const LargeBanner: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    alt: 'Large banner',
    style: { width: '800px', height: '200px', objectFit: 'cover', borderRadius: '8px' },
  },
};

/**
 * With custom className styling.
 */
export const WithClassName: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400',
    alt: 'Styled image',
    className: 'shadow-xl rounded-lg opacity-80 hover:opacity-100 transition-opacity',
    style: { width: '400px', height: '300px', objectFit: 'cover' },
  },
};

/**
 * Error state with small size to show icon scaling.
 */
export const ErrorSmall: Story = {
  args: {
    src: 'https://invalid-url.com/fail.jpg',
    alt: 'Failed small image',
    style: { width: '100px', height: '100px', borderRadius: '8px' },
  },
};
