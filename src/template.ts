// Represents a single transition or display step
export type Step = {
  image: string;
  duration: number; // in seconds
  effect?: 'fade' | 'zoom' | 'none';
};

// The structure of the slideshow template
export interface SlideshowTemplate {
  name: string;
  description: string;
  steps: Step[];
};

/**
 * Creates a list of steps that loop through all images multiple times.
 * Each loop increases the duration per image, up to a maximum.
 */
function createLoopingDecaySteps(
  images: string[],
  start: number,
  increment: number,
  max: number
): Step[] {
  const steps: Step[] = []
  let current = start

  // Loop until the duration exceeds max
  while (current <= max) {
    // Add one full round of images using the current duration
    for (const img of images) {
      steps.push({ image: img, duration: current, effect: 'fade' })
    }
    current += increment
  }

  return steps
}

// Slideshow configuration using looping-decay effect
export const videoTemplate: SlideshowTemplate = {
  name: 'Looping Speed-Decaying Slideshow',
  description: 'Loops through images, increasing duration each round.',
  steps: createLoopingDecaySteps(
    [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg',
      'image5.jpg',
    ],
    0.3, // initial duration per image (seconds)
    0.3, // how much to increase each round
    2    // maximum duration per image
  )
};

// Simulates rendering the slideshow (console output)
export function simulateRender(template: SlideshowTemplate) {
  console.log(`\nRendering: ${template.name}`)
  for (const step of template.steps) {
    console.log(`Display ${step.image} for ${step.duration}s with ${step.effect} effect.`)
  }
}