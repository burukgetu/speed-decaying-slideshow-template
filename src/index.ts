import { simulateRender, Step, SlideshowTemplate } from './template';

// User-defined 5 images
const userImages = [
  'photo1.jpg',
  'photo2.jpg',
  'photo3.jpg',
  'photo4.jpg',
  'photo5.jpg'
];

// Correctly typed function to generate steps with increasing duration
function createLoopingDecaySteps(
  images: string[],
  start: number,
  increment: number,
  max: number
): Step[] {
  const steps: Step[] = [];
  let current = start;

  while (current <= max) {
    for (const img of images) {
      // 'fade' is now explicitly typed, not just a string
      steps.push({ image: img, duration: current, effect: 'fade' });
    }
    current += increment;
  }

  return steps;
}

// Build slideshow template using user's images
const userTemplate: SlideshowTemplate = {
  name: 'Custom User Slideshow',
  description: 'Loops images with increasing duration each round.',
  steps: createLoopingDecaySteps(userImages, 0.3, 0.3, 2)
};

// Run the simulation
simulateRender(userTemplate);