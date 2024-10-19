import { PlaywrightLauncher } from "crawlee";

const runCrawler = async () => {
  const launcher = new PlaywrightLauncher({
    useChrome: true,

    launchOptions: {
      viewport: { width: 1280, height: 720 }, // Set valid viewport size
      headless: false,
      timeout: 0,
    },
  });

  const browser = await launcher.launch();
  const page = await browser.newPage();

  await page.goto("https://www.kotobati.com/book/رواية-روح-داوود", {
    timeout: 0,
  });
  const info = await page.locator(".media-body").allInnerTexts();
  const image = await page.locator(".lazyloaded");
  const download = await page.locator("download");
  const data = await page.locator(".col-md-12").allInnerTexts();
  console.log(info);
};

await runCrawler();
