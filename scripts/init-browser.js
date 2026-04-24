const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false // Set to true for production
  });
  
  const page = await browser.newPage();
  
  // Navigate to the target URL
  await page.goto('https://godly.website/website/unveil-1016', {
    waitUntil: 'networkidle',
    timeout: 60000
  });
  
  console.log('Page loaded successfully');
  
  // Get page title
  const title = await page.title();
  console.log(`Page title: ${title}`);
  
  // Get viewport dimensions
  const dimensions = await page.evaluate(() => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
      deviceScaleFactor: window.devicePixelRatio
    };
  });
  console.log(`Viewport dimensions: ${JSON.stringify(dimensions)}`);
  
  // Take full-page screenshot at desktop width
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.screenshot({ path: 'docs/design-references/unveil-1016-desktop-full.png', fullPage: true });
  console.log('Desktop full-page screenshot saved');
  
  // Take full-page screenshot at mobile width
  await page.setViewportSize({ width: 390, height: 844 }); // iPhone 12 dimensions
  await page.screenshot({ path: 'docs/design-references/unveil-1016-mobile-full.png', fullPage: true });
  console.log('Mobile full-page screenshot saved');
  
  // Reset to desktop for further analysis
  await page.setViewportSize({ width: 1440, height: 900 });
  
  // Extract basic page information
  const pageInfo = await page.evaluate(() => {
    // Get font families used
    const fontFamilies = new Set();
    document.querySelectorAll('*').forEach(el => {
      const style = window.getComputedStyle(el);
      if (style.fontFamily) {
        fontFamilies.add(style.fontFamily);
      }
    });
    
    // Get colors used
    const colors = new Set();
    document.querySelectorAll('*').forEach(el => {
      const style = window.getComputedStyle(el);
      if (style.color && style.color !== 'rgba(0, 0, 0, 0)') {
        colors.add(style.color);
      }
      if (style.backgroundColor && style.backgroundColor !== 'rgba(0, 0, 0, 0)' && style.backgroundColor !== 'transparent') {
        colors.add(style.backgroundColor);
      }
    });
    
    // Get all images
    const images = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src,
      alt: img.alt,
      width: img.naturalWidth,
      height: img.naturalHeight
    }));
    
    // Get all videos
    const videos = Array.from(document.querySelectorAll('video')).map(video => ({
      src: video.src || (video.querySelector('source') ? video.querySelector('source').src : ''),
      poster: video.poster,
      autoplay: video.autoplay,
      loop: video.loop,
      muted: video.muted
    }));
    
    return {
      fontFamilies: Array.from(fontFamilies),
      colors: Array.from(colors),
      images: images,
      videos: videos
    };
  });
  
  console.log('Page info extracted:', JSON.stringify(pageInfo, null, 2));
  
  // Save page info to file
  const fs = require('fs');
  fs.writeFileSync('docs/research/page-info.json', JSON.stringify(pageInfo, null, 2));
  console.log('Page info saved to docs/research/page-info.json');
  
  await browser.close();
})();