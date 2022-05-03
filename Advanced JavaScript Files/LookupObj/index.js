// Check output in the browser's console

const extension = '.css';
let contentType;

switch (extension) {
    case '.css':
        contentType = 'text/css';
        break;
    case '.js':
        contentType = 'text/javascript';
        break;
    case '.json':
        contentType = 'application/json';
        break;
    case '.jpg':
        contentType = 'image/jpg';
        break;
    case '.png':
        contentType = 'text/png';
        break;
    case '.txt':
        contentType = 'text/plain';
        break;
    default:
        contentType = 'text/html';
}


const extension1 = '.css';

const extensionObj = {
    '.css' : 'text/css',
    '.js' : 'text/javascript',
    '.json' : 'application/json',
    '.jpg' : 'image/jpeg',
    '.png' : 'image/png',
    '.txt' : 'text/plain'
}

console.log(extensionObj[extension1] || 'text/html')


const myMap = new Map();
myMap.set('.css', 'text/css');
myMap.set('.json', 'application/json');

console.log(myMap.get(extension1) || 'text/html');