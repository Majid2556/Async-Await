const fs = require('fs').promises;
const path = require('path');

async function manageFiles() {
  try {
    // نوشتن در فایل
    await fs.writeFile('data.txt', 'سلام از Node.js!\n');
    
    // خواندن فایل
    const data = await fs.readFile('data.txt', 'utf8');
    console.log('محتوای فایل:', data);

    // لیست فایل‌های پوشه
    const files = await fs.readdir(__dirname);
    console.log('فایل‌های پوشه:', files);

  } catch (err) {
    console.error('خطا:', err);
  }
}

manageFiles();