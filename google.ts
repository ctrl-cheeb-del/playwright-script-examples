// File: google-search.ts

import type { ScriptDefinition } from '../core/types';

const script: ScriptDefinition = {
  id: 'google-search',
  name: 'Google Search',
  description: 'Navigate to Google and perform a search',
  useCurrentTab: true,
  async run(ctx) {
    const { page, log } = ctx;
    
    log('Navigating to Google...');
    await page.goto('https://www.google.com');
    
    log('Navigated successfully!');
  }
};

export default script;
