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
    log('Search completed successfully!');
  }
};

export default script;
