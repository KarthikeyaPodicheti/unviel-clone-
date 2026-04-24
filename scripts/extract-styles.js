const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  
  const page = await browser.newPage();
  
  // Navigate to the target URL
  await page.goto('https://godly.website/website/unveil-1016', {
    waitUntil: 'networkidle',
    timeout: 60000
  });
  
  console.log('Page loaded successfully');
  
  // Set viewport to desktop size
  await page.setViewportSize({ width: 1440, height: 900 });
  
  // Function to extract styles from an element
  const extractStyles = async (selector, elementName) => {
    try {
      const element = await page.$(selector);
      if (!element) {
        console.log(`Element not found: ${selector}`);
        return null;
      }
      
      const styles = await page.evaluate((el) => {
        const computedStyle = window.getComputedStyle(el);
        const styleObject = {};
        
        // List of CSS properties to extract
        const properties = [
          'fontSize','fontWeight','fontFamily','lineHeight','letterSpacing','color',
          'textTransform','textDecoration','backgroundColor','background',
          'padding','paddingTop','paddingRight','paddingBottom','paddingLeft',
          'margin','marginTop','marginRight','marginBottom','marginLeft',
          'width','height','maxWidth','minWidth','maxHeight','minHeight',
          'display','flexDirection','justifyContent','alignItems','gap',
          'gridTemplateColumns','gridTemplateRows',
          'borderRadius','border','borderTop','borderBottom','borderLeft','borderRight',
          'boxShadow','overflow','overflowX','overflowY',
          'position','top','right','bottom','left','zIndex',
          'opacity','transform','transition','cursor',
          'objectFit','objectPosition','mixBlendMode','filter','backdropFilter',
          'whiteSpace','textOverflow','WebkitLineClamp'
        ];
        
        properties.forEach(p => {
          const value = computedStyle[p];
          if (value && value !== 'none' && value !== 'normal' && value !== 'auto' && 
              value !== '0px' && value !== 'rgba(0, 0, 0, 0)' && value !== 'transparent') {
            styleObject[p] = value;
          }
        });
        
        return styleObject;
      }, element);
      
      // Get element dimensions and position
      const box = await element.boundingBox();
      
      return {
        selector,
        elementName,
        styles,
        dimensions: box ? {
          x: box.x,
          y: box.y,
          width: box.width,
          height: box.height
        } : null
      };
    } catch (error) {
      console.log(`Error extracting styles for ${selector}: ${error}`);
      return null;
    }
  };
  
  // Extract styles for key components
  const components = [
    { selector: '.root', name: 'Root Container' },
    { selector: '.fixed.top-3.left-5', name: 'Header Logo Container' },
    { selector: '.fixed.top-3.right-5', name: 'Header Subscribe Container' },
    { selector: '.fixed.top-3.left-5 svg', name: 'Logo SVG' },
    { selector: '.fixed.top-3.left-5 a', name: 'Logo Link' },
    { selector: '.fixed.top-3 .nav', name: 'Header Nav' },
    { selector: '.fixed.top-3 .nav a', name: 'Header Nav Links' },
    { selector: '.fixed.top-3.right-5 button', name: 'Subscribe Button' },
    { selector: '.fixed.top-3.right-5 button svg', name: 'Subscribe Button Icon' },
    { selector: '.w-full.bg-neutral-50.pt-24.pb-16.md\\:py-32.px-5', name: 'Hero Section Container' },
    { selector: '.w-full.max-w-6xl.mx-auto', name: 'Hero Content Container' },
    { selector: '.overflow-hidden.shadow-2xl.relative.w-full', name: 'Video Container' },
    { selector: 'video[src*="28bc38d8-d36a-426a-a48b-2cf94c5ded8b"]', name: 'Background Video' },
    { selector: '.absolute.inset-0.flex.items-center.justify-center', name: 'Video Overlay Container' },
    { selector: '.absolute.inset-0.flex.items-center.justify-center svg', name: 'Play Button Icon' },
    { selector: '.w-full.flex.flex-col.gap-24 > div:nth-child(2)', name: 'Hero Content Wrapper' },
    { selector: '.flex.flex-col.items-center.gap-4', name: 'Hero Header Content' },
    { selector: '.text-sm.text-neutral-400', name: 'FT Badge' },
    { selector: 'h1.text-3xl.font-medium', name: 'Main Title' },
    { selector: 'a[href="https://unveil.fr?ref=godly"]', name: 'Visit Button' },
    { selector: '.flex.flex-col.items-center.gap-1.text-sm.text-neutral-400', name: 'Stats Text' },
    { selector: '.w-full.py-16.flex.justify-center', name: 'Loading Indicator Container' },
    { selector: '.w-full.py-16.flex.justify-center svg', name: 'Loading Spinner' },
    { selector: '.w-full.px-8', name: 'Filter Section Container' },
    { selector: '.w-full.flex.justify-center.items-center.max-w-lg.mx-auto', name: 'Filter Content Wrapper' },
    { selector: '.flex.flex-wrap.justify-center.gap-2 a', name: 'Filter Pills' }
  ];
  
  const results = [];
  
  for (const component of components) {
    console.log(`Extracting styles for: ${component.name}`);
    const result = await extractStyles(component.selector, component.name);
    if (result) {
      results.push(result);
    }
    // Small delay to avoid overwhelming the page
    await page.waitForTimeout(100);
  }
  
  // Save results to file
  fs.writeFileSync('docs/research/component-styles.json', JSON.stringify(results, null, 2));
  console.log('Component styles saved to docs/research/component-styles.json');
  
  // Also extract some interactive behaviors
  const behaviors = await page.evaluate(() => {
    const behaviors = [];
    
    // Check for hover states on filter pills
    const filterPills = document.querySelectorAll('.flex.flex-wrap.justify-center.gap-2 a');
    filterPills.forEach((pill, index) => {
      const originalStyles = window.getComputedStyle(pill);
      behaviors.push({
        element: `Filter pill ${index}`,
        selector: '.flex.flex-wrap.justify-center.gap-2 a',
        property: 'backgroundColor',
        originalValue: originalStyles.backgroundColor,
        // We'll determine hover value by actually hovering
        interactionType: 'hover'
      });
    });
    
    // Check for click behaviors
    const visitButton = document.querySelector('a[href="https://unveil.fr?ref=godly"]');
    if (visitButton) {
      behaviors.push({
        element: 'Visit Button',
        selector: 'a[href="https://unveil.fr?ref=godly"]',
        interactionType: 'click',
        action: 'navigate to https://unveil.fr?ref=godly'
      });
    }
    
    const logoLink = document.querySelector('.fixed.top-3.left-5 a');
    if (logoLink) {
      behaviors.push({
        element: 'Logo Link',
        selector: '.fixed.top-3.left-5 a',
        interactionType: 'click',
        action: 'navigate to homepage'
      });
    }
    
    return behaviors;
  });
  
  fs.writeFileSync('docs/research/component-behaviors.json', JSON.stringify(behaviors, null, 2));
  console.log('Component behaviors saved to docs/research/component-behaviors.json');
  
  await browser.close();
})();