const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
import { ipcMain } from 'electron';
export const runPuppeteer = () => {
  puppeteer.use(StealthPlugin());
  puppeteer.launch({ headless: false }).then(async (browser) => {
    console.log('Running tests..');
    const page = await browser.newPage();
    await page.goto('https://bot.sannysoft.com');
    await page.waitFor(5000);
    await page.screenshot({ path: 'testresult.png', fullPage: true });
    await browser.close();
    console.log(`All done, check the screenshot. ✨`);
  });
};

export const registerEvents = () => {
  ipcMain.handle('OPEN:PUPPETEER', runPuppeteer);
};
