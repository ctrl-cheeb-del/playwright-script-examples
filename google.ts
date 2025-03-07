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
    
    log('Waiting for page to load...');
    await page.waitForTimeout(1000);
    
    log('Typing search query...');
    await page.fill('input[name="q"]', 'playwright automation');
    
    log('Pressing Enter to search...');
    await page.press('input[name="q"]', 'Enter');
    
    log('Waiting for search results...');
    await page.waitForTimeout(2000);
    
    log('Search completed successfully!');
  }
};

export default script;
