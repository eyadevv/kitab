import { PlaywrightLauncher } from "crawlee";
import { chromium } from "playwright";
import grab from "./grab.mjs";

const runCrawler = async () => {
  const launcher = new PlaywrightLauncher({
    useChrome: true,

    launchOptions: {
      viewport: { width: 1280, height: 720 }, // Set valid viewport size
      headless: false,
      timeout: 0,
    },
  });
  let pageId = 1;

  try {
    const browser = await launcher.launch();
    const page = await browser.newPage();
    await page.goto("https://www.kotobati.com", {
      timeout: 0,
    });

    const footer = await page.$(".site-footer");
    await footer?.scrollIntoViewIfNeeded();
    console.log("Starting Recursion");

    async function load() {
      const bookTeasers = await page.$$(".book-teaser");
      const data = [];
      for (const teaser of bookTeasers) {
        const anchor = await teaser.$("a");
        if (anchor) {
          const href = await anchor.getAttribute("href"); // Get the href attribute
          // data.push(href);
          await grab(page, href);
          // console.log(decodeURI(href));
        }
      }
      await page.waitForLoadState("networkidle");
      console.log(data);
      pageId++;
      setTimeout(() => load(), 5000);
    }

    await load();
  } catch (error) {
    console.error("There was an error:", error);
  }
};

runCrawler().catch(console.error);
