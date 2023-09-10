//initialize file sytem and path module
const fs = require('fs').promises;
const path = require('path');

const scaffoldDir = 'frontend-scaffold';

//function to create folder
async function createFolder(folderPath) {
  try {
    await fs.mkdir(folderPath);
  } 
  catch (err) {
    if (err.code !== 'EEXIST') {
      throw err;
    }
  }
}

//function to create file
async function createFile(filePath, content) {
  await fs.writeFile(filePath, content);
}

//main function 
async function main() {
  await createFolder(scaffoldDir); //creates scaffold-folder

  //initialize index file and folder paths
  const indexPath = path.join(scaffoldDir, 'index.html');
  const cssPath = path.join(scaffoldDir, 'css');
  const jsPath = path.join(scaffoldDir, 'js');
  const imagesPath = path.join(scaffoldDir, 'images');

  //create index.html file and add the content
  await createFile(
    indexPath,
    `<!DOCTYPE html>

    <html lang="en">
    
    <head>
    
    <meta charset="UTF-8">
    
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="stylesheet" href="./css/style.css">
    
    <title>Document</title>
    
    </head>
    
    <body>
    
    <h1>Welcome</h1>
    
    <script src="./js/script.js"></script>
    
    </body>
    
    </html>`
  );

  //call create folder and file function for css and style.css
  await createFolder(cssPath);
  await createFile(
    path.join(cssPath, 'style.css'),
    `h1 {
  text-align: center;
}`
  );
  //call create folder and file function for js and script.js
  await createFolder(jsPath);
  await createFile(
    path.join(jsPath, 'script.js'),
    'alert("Welcome");'
  );

 //create image folder  
  await createFolder(imagesPath);

  console.log('Frontend scaffold created successfully!');
}

//call main function 
main().catch((err) => {
  console.error('Error:', err);
});
