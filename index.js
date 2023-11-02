const fs = require('fs');

// read file
fs.readFile('home.html', function(err, data) {
    if (err) {
        return console.error(err);
    }
    console.log('data', data.toString());
});

// create - appendFile
fs.appendFile('mynewfile.txt', 'Hello New File added', function(err) {
    if (err) throw err;
    console.log('appendFile!');
});

// create - open
fs.open('mynewfile2.txt', 'w', function(error, data) {
    if (error) console.log('error');
    console.log('open');
});

// create - writeFile
fs.writeFile('mynewfile3.txt', 'hello there changed!!', function(err, data) {
    if(err) throw err;
    console.log('writefile');
});

// delete
fs.unlink('mynewfile3.txt', function(error, data) {
    if(error) throw error;
    console.log('file deleted');
});

//rename
fs.rename('mynewfile4.txt', 'mynewfile5.txt', function(error, data) {
    if(error) throw error;
    console.log('renamed');
})

