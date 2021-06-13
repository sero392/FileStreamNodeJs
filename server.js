const fs = require('fs');

const file = 'video.mp4';


const readStream = fs.createReadStream(file);
let progress = 0;

fs.stat(file, function (err, data) {
    const totalSize = data.size;

    readStream.on('data', function (chunk) {
        progress += chunk.length;
        console.log(Math.round((100 * progress) / totalSize) + '%');
    });

    readStream.on('end', function () {
        console.log("Veri Okunması Bitti.");
    });
});
