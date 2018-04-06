const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
const request = require('request');
const fs = require('fs');
const bodyParser = require('body-parser')

var predfileName = null;

// Set Storage Engine 
const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function (req, file, callback) {
        predfileName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        callback(null, predfileName);
    }
});

// Init Upload
const upload = multer({
    storage: storage,
    limits: { fileSize: 10000000 },
    fileFilter: function (req, file, callback) {
        checkFileType(file, callback);
    }
}).single('myImage');

// Check File Type
function checkFileType(file, callback) {
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
    //console.log(predfileName);
    if (mimetype && extname) {
        return callback(null, true);
    } else {
        callback('Error: Images Only!');
    }
}

// Init app
const app = express();

// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

// Body Parser
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

//Xception upload
app.get('/', (req, res) => res.render('start'));
app.get('/Xception', (req, res) => res.render('Xception'));
app.post('/Xception/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('Xception', {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.render('Xception', {
                    msg: 'Error: No File to be Uploaded!'
                });
            } else {
                res.render('Xception', {
                    msg: 'File Uploaded!',
                    file: `../uploads/${req.file.filename}`
                });
            }
        }
    });
});

//VGG16 upload
app.get('/', (req, res) => res.render('start'));
app.get('/VGG16', (req, res) => res.render('VGG16'));
app.post('/VGG16/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('VGG16', {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.render('VGG16', {
                    msg: 'Error: No File to be Uploaded!'
                });
            } else {
                res.render('VGG16', {
                    msg: 'File Uploaded!',
                    file: `../uploads/${req.file.filename}`
                });
            }
        }
    });
});

//VGG19 upload
app.get('/', (req, res) => res.render('start'));
app.get('/VGG19', (req, res) => res.render('VGG19'));
app.post('/VGG19/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('VGG19', {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.render('VGG19', {
                    msg: 'Error: No File to be Uploaded!'
                });
            } else {
                res.render('VGG19', {
                    msg: 'File Uploaded!',
                    file: `../uploads/${req.file.filename}`
                });
            }
        }
    });
});

//Resnet50 upload
app.get('/', (req, res) => res.render('start'));
app.get('/ResNet50', (req, res) => res.render('ResNet50'));
app.post('/ResNet50/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('ResNet50', {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.render('ResNet50', {
                    msg: 'Error: No File to be Uploaded!'
                });
            } else {
                res.render('ResNet50', {
                    msg: 'File Uploaded!',
                    file: `../uploads/${req.file.filename}`
                });
            }
        }
    });
});

//InceptionV3 upload
app.get('/', (req, res) => res.render('start'));
app.get('/InceptionV3', (req, res) => res.render('InceptionV3'));
app.post('/InceptionV3/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('InceptionV3', {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.render('InceptionV3', {
                    msg: 'Error: No File to be Uploaded!'
                });
            } else {
                res.render('InceptionV3', {
                    msg: 'File Uploaded!',
                    file: `../uploads/${req.file.filename}`
                });
            }
        }
    });
});

//InceptionResNetV2 upload
app.get('/', (req, res) => res.render('start'));
app.get('/InceptionResNetV2', (req, res) => res.render('InceptionResNetV2'));
app.post('/InceptionResNetV2/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('InceptionResNetV2', {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.render('InceptionResNetV2', {
                    msg: 'Error: No File to be Uploaded!'
                });
            } else {
                res.render('InceptionResNetV2', {
                    msg: 'File Uploaded!',
                    file: `../uploads/${req.file.filename}`
                });
            }
        }
    });
});

//MobileNet upload
app.get('/', (req, res) => res.render('start'));
app.get('/MobileNet', (req, res) => res.render('MobileNet'));
app.post('/MobileNet/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('MobileNet', {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.render('MobileNet', {
                    msg: 'Error: No File to be Uploaded!'
                });
            } else {
                res.render('MobileNet', {
                    msg: 'File Uploaded!',
                    file: `../uploads/${req.file.filename}`
                });
            }
        }
    });
});

//DenseNet121  upload
app.get('/', (req, res) => res.render('start'));
app.get('/DenseNet121', (req, res) => res.render('DenseNet121'));
app.post('/DenseNet121/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('DenseNet121', {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.render('DenseNet121', {
                    msg: 'Error: No File to be Uploaded!'
                });
            } else {
                res.render('DenseNet121', {
                    msg: 'File Uploaded!',
                    file: `../uploads/${req.file.filename}`
                });
            }
        }
    });
});

//DenseNet169  upload
app.get('/', (req, res) => res.render('start'));
app.get('/DenseNet169', (req, res) => res.render('DenseNet169'));
app.post('/DenseNet169/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('DenseNet169', {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.render('DenseNet169', {
                    msg: 'Error: No File to be Uploaded!'
                });
            } else {
                res.render('DenseNet169', {
                    msg: 'File Uploaded!',
                    file: `../uploads/${req.file.filename}`
                });
            }
        }
    });
});

//DenseNet201  upload
app.get('/', (req, res) => res.render('start'));
app.get('/DenseNet201', (req, res) => res.render('DenseNet201'));
app.post('/DenseNet201/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.render('DenseNet201', {
                msg: err
            });
        } else {
            if (req.file == undefined) {
                res.render('DenseNet201', {
                    msg: 'Error: No File to be Uploaded!'
                });
            } else {
                res.render('DenseNet201', {
                    msg: 'File Uploaded!',
                    file: `../uploads/${req.file.filename}`
                });
            }
        }
    });
});


var download = function (uri, filename, callback) {
    request.head(uri, function (err, res, body) {
        console.log('content-type:', res.headers['content-type']);
        console.log('content-length:', res.headers['content-length']);

        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
    });
};

//Xception download
app.get('/Xception/download', (req, res) => {
    console.log("Downloading..");
    console.log(req.query.urlname);
    var url = req.query.urlname;
    var downloadLocation = './public/uploads/';
    predfileName = 'myImage-' + Date.now() + ".jpg";
    var fullimgPath = '../uploads/' + predfileName;
    console.log(fullimgPath);
    download(url, downloadLocation + predfileName, function () {
        res.render('Xception', {
            msg: 'File Downloaded!',
            file: fullimgPath
        });
        console.log('done');
    });
});

//VGG16 download
app.get('/VGG16/download', (req, res) => {
    console.log("Downloading..");
    console.log(req.query.urlname);
    var url = req.query.urlname;
    var downloadLocation = './public/uploads/';
    predfileName = 'myImage-' + Date.now() + ".jpg";
    var fullimgPath = '../uploads/' + predfileName;
    console.log(fullimgPath);
    download(url, downloadLocation + predfileName, function () {
        res.render('VGG16', {
            msg: 'File Downloaded!',
            file: fullimgPath
        });
        console.log('done');
    });
});

//VGG19 download
app.get('/VGG19/download', (req, res) => {
    console.log("Downloading..");
    console.log(req.query.urlname);
    var url = req.query.urlname;
    var downloadLocation = './public/uploads/';
    predfileName = 'myImage-' + Date.now() + ".jpg";
    var fullimgPath = '../uploads/' + predfileName;
    console.log(fullimgPath);
    download(url, downloadLocation + predfileName, function () {
        res.render('VGG19', {
            msg: 'File Downloaded!',
            file: fullimgPath
        });
        console.log('done');
    });
});

//Resnet50 download
app.get('/ResNet50/download', (req, res) => {
    console.log("Downloading..");
    console.log(req.query.urlname);
    var url = req.query.urlname;
    var downloadLocation = './public/uploads/';
    predfileName = 'myImage-' + Date.now() + ".jpg";
    var fullimgPath = '../uploads/' + predfileName;
    console.log(fullimgPath);
    download(url, downloadLocation + predfileName, function () {
        res.render('ResNet50', {
            msg: 'File Downloaded!',
            file: fullimgPath
        });
        console.log('done');
    });
});

//InceptionV3 download
app.get('/InceptionV3/download', (req, res) => {
    console.log("Downloading..");
    console.log(req.query.urlname);
    var url = req.query.urlname;
    var downloadLocation = './public/uploads/';
    predfileName = 'myImage-' + Date.now() + ".jpg";
    var fullimgPath = '../uploads/' + predfileName;
    console.log(fullimgPath);
    download(url, downloadLocation + predfileName, function () {
        res.render('InceptionV3', {
            msg: 'File Downloaded!',
            file: fullimgPath
        });
        console.log('done');
    });
});

//InceptionResNetV2 download
app.get('/InceptionResNetV2/download', (req, res) => {
    console.log("Downloading..");
    console.log(req.query.urlname);
    var url = req.query.urlname;
    var downloadLocation = './public/uploads/';
    predfileName = 'myImage-' + Date.now() + ".jpg";
    var fullimgPath = '../uploads/' + predfileName;
    console.log(fullimgPath);
    download(url, downloadLocation + predfileName, function () {
        res.render('InceptionResNetV2', {
            msg: 'File Downloaded!',
            file: fullimgPath
        });
        console.log('done');
    });
});

//MobileNet download
app.get('/MobileNet/download', (req, res) => {
    console.log("Downloading..");
    console.log(req.query.urlname);
    var url = req.query.urlname;
    var downloadLocation = './public/uploads/';
    predfileName = 'myImage-' + Date.now() + ".jpg";
    var fullimgPath = '../uploads/' + predfileName;
    console.log(fullimgPath);
    download(url, downloadLocation + predfileName, function () {
        res.render('MobileNet', {
            msg: 'File Downloaded!',
            file: fullimgPath
        });
        console.log('done');
    });
});

//DenseNet121  download
app.get('/DenseNet121/download', (req, res) => {
    console.log("Downloading..");
    console.log(req.query.urlname);
    var url = req.query.urlname;
    var downloadLocation = './public/uploads/';
    predfileName = 'myImage-' + Date.now() + ".jpg";
    var fullimgPath = '../uploads/' + predfileName;
    console.log(fullimgPath);
    download(url, downloadLocation + predfileName, function () {
        res.render('DenseNet121', {
            msg: 'File Downloaded!',
            file: fullimgPath
        });
        console.log('done');
    });
});

//DenseNet169 download
app.get('/DenseNet169/download', (req, res) => {
    console.log("Downloading..");
    console.log(req.query.urlname);
    var url = req.query.urlname;
    var downloadLocation = './public/uploads/';
    predfileName = 'myImage-' + Date.now() + ".jpg";
    var fullimgPath = '../uploads/' + predfileName;
    console.log(fullimgPath);
    download(url, downloadLocation + predfileName, function () {
        res.render('DenseNet169', {
            msg: 'File Downloaded!',
            file: fullimgPath
        });
        console.log('done');
    });
});

//DenseNet201  download
app.get('/DenseNet201/download', (req, res) => {
    console.log("Downloading..");
    console.log(req.query.urlname);
    var url = req.query.urlname;
    var downloadLocation = './public/uploads/';
    predfileName = 'myImage-' + Date.now() + ".jpg";
    var fullimgPath = '../uploads/' + predfileName;
    console.log(fullimgPath);
    download(url, downloadLocation + predfileName, function () {
        res.render('DenseNet201', {
            msg: 'File Downloaded!',
            file: fullimgPath
        });
        console.log('done');
    });
});

// initialize the Keras REST API endpoint URL along with the input
// image path

//Xception predict
app.post('/Xception/predict', (req, res) => {

    const ImgfileName = "./public/uploads/" + predfileName;
    var image = fs.createReadStream(ImgfileName);
    var payload = { "image": image }

    var KERAS_REST_API_URL = "http://127.0.0.1:7000/predict"
    var imagePath = "../uploads/" + predfileName
    var str = null
    var r = request.post(KERAS_REST_API_URL, function optionalCallback(err, httpResponse, body) {
        if (err) {
            res.render('Xception', {
                msg: 'Prediction Failed!',
            });
            return console.error('Prediction failed:', err);
        }

        var bodyjson = JSON.parse(body);
        str = bodyjson['predictions'];
        // console.log(str)
        res.render('Xception', {
            msg: 'File Predicted!',
            file: imagePath,
            str: str
        });
        for (i in bodyjson['predictions']) {
            console.log(bodyjson['predictions'][i].label + " : " + bodyjson['predictions'][i].probability);
        }
    });

    var form = r.form();
    form.append('image', image, { filename: 'image' });
    console.log(imagePath);

});

//VGG16 predict
app.post('/VGG16/predict', (req, res) => {

    const ImgfileName = "./public/uploads/" + predfileName;
    var image = fs.createReadStream(ImgfileName);
    var payload = { "image": image }

    var KERAS_REST_API_URL = "http://127.0.0.1:7001/predict"
    var imagePath = "../uploads/" + predfileName
    var str = null
    var r = request.post(KERAS_REST_API_URL, function optionalCallback(err, httpResponse, body) {
        if (err) {
            res.render('VGG16', {
                msg: 'Prediction Failed!',
            });
            return console.error('Prediction failed:', err);
        }

        var bodyjson = JSON.parse(body);
        str = bodyjson['predictions'];
        // console.log(str)
        res.render('VGG16', {
            msg: 'File Predicted!',
            file: imagePath,
            str: str
        });
        for (i in bodyjson['predictions']) {
            console.log(bodyjson['predictions'][i].label + " : " + bodyjson['predictions'][i].probability);
        }
    });

    var form = r.form();
    form.append('image', image, { filename: 'image' });
    console.log(imagePath);

});

//VGG19 predict
app.post('/VGG19/predict', (req, res) => {

    const ImgfileName = "./public/uploads/" + predfileName;
    var image = fs.createReadStream(ImgfileName);
    var payload = { "image": image }

    var KERAS_REST_API_URL = "http://127.0.0.1:7002/predict"
    var imagePath = "../uploads/" + predfileName
    var str = null
    var r = request.post(KERAS_REST_API_URL, function optionalCallback(err, httpResponse, body) {
        if (err) {
            res.render('VGG19', {
                msg: 'Prediction Failed!',
            });
            return console.error('Prediction failed:', err);
        }

        var bodyjson = JSON.parse(body);
        str = bodyjson['predictions'];
        // console.log(str)
        res.render('VGG19', {
            msg: 'File Predicted!',
            file: imagePath,
            str: str
        });
        for (i in bodyjson['predictions']) {
            console.log(bodyjson['predictions'][i].label + " : " + bodyjson['predictions'][i].probability);
        }
    });

    var form = r.form();
    form.append('image', image, { filename: 'image' });
    console.log(imagePath);

});

//Resnet50 predict
app.post('/ResNet50/predict', (req, res) => {

    const ImgfileName = "./public/uploads/" + predfileName;
    var image = fs.createReadStream(ImgfileName);
    var payload = { "image": image }

    var KERAS_REST_API_URL = "http://127.0.0.1:7003/predict"
    var imagePath = "../uploads/" + predfileName
    var str = null
    var r = request.post(KERAS_REST_API_URL, function optionalCallback(err, httpResponse, body) {
        if (err) {
            res.render('ResNet50', {
                msg: 'Prediction Failed!',
            });
            return console.error('Prediction failed:', err);
        }

        var bodyjson = JSON.parse(body);
        str = bodyjson['predictions'];
        // console.log(str)
        res.render('ResNet50', {
            msg: 'File Predicted!',
            file: imagePath,
            str: str
        });
        for (i in bodyjson['predictions']) {
            console.log(bodyjson['predictions'][i].label + " : " + bodyjson['predictions'][i].probability);
        }
    });

    var form = r.form();
    form.append('image', image, { filename: 'image' });
    console.log(imagePath);

});

//InceptionV3 predict
app.post('/InceptionV3/predict', (req, res) => {

    const ImgfileName = "./public/uploads/" + predfileName;
    var image = fs.createReadStream(ImgfileName);
    var payload = { "image": image }

    var KERAS_REST_API_URL = "http://127.0.0.1:7004/predict"
    var imagePath = "../uploads/" + predfileName
    var str = null
    var r = request.post(KERAS_REST_API_URL, function optionalCallback(err, httpResponse, body) {
        if (err) {
            res.render('InceptionV3', {
                msg: 'Prediction Failed!',
            });
            return console.error('Prediction failed:', err);
        }

        var bodyjson = JSON.parse(body);
        str = bodyjson['predictions'];
        // console.log(str)
        res.render('InceptionV3', {
            msg: 'File Predicted!',
            file: imagePath,
            str: str
        });
        for (i in bodyjson['predictions']) {
            console.log(bodyjson['predictions'][i].label + " : " + bodyjson['predictions'][i].probability);
        }
    });

    var form = r.form();
    form.append('image', image, { filename: 'image' });
    console.log(imagePath);

});

//InceptionResNetV2 predict
app.post('/InceptionResNetV2/predict', (req, res) => {

    const ImgfileName = "./public/uploads/" + predfileName;
    var image = fs.createReadStream(ImgfileName);
    var payload = { "image": image }

    var KERAS_REST_API_URL = "http://127.0.0.1:7005/predict"
    var imagePath = "../uploads/" + predfileName
    var str = null
    var r = request.post(KERAS_REST_API_URL, function optionalCallback(err, httpResponse, body) {
        if (err) {
            res.render('InceptionResNetV2', {
                msg: 'Prediction Failed!',
            });
            return console.error('Prediction failed:', err);
        }

        var bodyjson = JSON.parse(body);
        str = bodyjson['predictions'];
        // console.log(str)
        res.render('InceptionResNetV2', {
            msg: 'File Predicted!',
            file: imagePath,
            str: str
        });
        for (i in bodyjson['predictions']) {
            console.log(bodyjson['predictions'][i].label + " : " + bodyjson['predictions'][i].probability);
        }
    });

    var form = r.form();
    form.append('image', image, { filename: 'image' });
    console.log(imagePath);

});

//MobileNet predict
app.post('/MobileNet/predict', (req, res) => {

    const ImgfileName = "./public/uploads/" + predfileName;
    var image = fs.createReadStream(ImgfileName);
    var payload = { "image": image }

    var KERAS_REST_API_URL = "http://127.0.0.1:7006/predict"
    var imagePath = "../uploads/" + predfileName
    var str = null
    var r = request.post(KERAS_REST_API_URL, function optionalCallback(err, httpResponse, body) {
        if (err) {
            res.render('MobileNet', {
                msg: 'Prediction Failed!',
            });
            return console.error('Prediction failed:', err);
        }

        var bodyjson = JSON.parse(body);
        str = bodyjson['predictions'];
        // console.log(str)
        res.render('MobileNet', {
            msg: 'File Predicted!',
            file: imagePath,
            str: str
        });
        for (i in bodyjson['predictions']) {
            console.log(bodyjson['predictions'][i].label + " : " + bodyjson['predictions'][i].probability);
        }
    });

    var form = r.form();
    form.append('image', image, { filename: 'image' });
    console.log(imagePath);

});

//DenseNet121 predict
app.post('/DenseNet121/predict', (req, res) => {

    const ImgfileName = "./public/uploads/" + predfileName;
    var image = fs.createReadStream(ImgfileName);
    var payload = { "image": image }

    var KERAS_REST_API_URL = "http://127.0.0.1:7007/predict"
    var imagePath = "../uploads/" + predfileName
    var str = null
    var r = request.post(KERAS_REST_API_URL, function optionalCallback(err, httpResponse, body) {
        if (err) {
            res.render('DenseNet121', {
                msg: 'Prediction Failed!',
            });
            return console.error('Prediction failed:', err);
        }

        var bodyjson = JSON.parse(body);
        str = bodyjson['predictions'];
        // console.log(str)
        res.render('DenseNet121', {
            msg: 'File Predicted!',
            file: imagePath,
            str: str
        });
        for (i in bodyjson['predictions']) {
            console.log(bodyjson['predictions'][i].label + " : " + bodyjson['predictions'][i].probability);
        }
    });

    var form = r.form();
    form.append('image', image, { filename: 'image' });
    console.log(imagePath);

});

//DenseNet169 predict
app.post('/DenseNet169/predict', (req, res) => {

    const ImgfileName = "./public/uploads/" + predfileName;
    var image = fs.createReadStream(ImgfileName);
    var payload = { "image": image }

    var KERAS_REST_API_URL = "http://127.0.0.1:7008/predict"
    var imagePath = "../uploads/" + predfileName
    var str = null
    var r = request.post(KERAS_REST_API_URL, function optionalCallback(err, httpResponse, body) {
        if (err) {
            res.render('DenseNet169', {
                msg: 'Prediction Failed!',
            });
            return console.error('Prediction failed:', err);
        }

        var bodyjson = JSON.parse(body);
        str = bodyjson['predictions'];
        // console.log(str)
        res.render('DenseNet169', {
            msg: 'File Predicted!',
            file: imagePath,
            str: str
        });
        for (i in bodyjson['predictions']) {
            console.log(bodyjson['predictions'][i].label + " : " + bodyjson['predictions'][i].probability);
        }
    });

    var form = r.form();
    form.append('image', image, { filename: 'image' });
    console.log(imagePath);

});

//DenseNet201 predict
app.post('/DenseNet201/predict', (req, res) => {

    const ImgfileName = "./public/uploads/" + predfileName;
    var image = fs.createReadStream(ImgfileName);
    var payload = { "image": image }

    var KERAS_REST_API_URL = "http://127.0.0.1:7009/predict"
    var imagePath = "../uploads/" + predfileName
    var str = null
    var r = request.post(KERAS_REST_API_URL, function optionalCallback(err, httpResponse, body) {
        if (err) {
            res.render('DenseNet201', {
                msg: 'Prediction Failed!',
            });
            return console.error('Prediction failed:', err);
        }

        var bodyjson = JSON.parse(body);
        str = bodyjson['predictions'];
        // console.log(str)
        res.render('DenseNet201', {
            msg: 'File Predicted!',
            file: imagePath,
            str: str
        });
        for (i in bodyjson['predictions']) {
            console.log(bodyjson['predictions'][i].label + " : " + bodyjson['predictions'][i].probability);
        }
    });

    var form = r.form();
    form.append('image', image, { filename: 'image' });
    console.log(imagePath);

});

app.get('/word2vec_google', (req, res) => res.render('word2vec_google'));

app.get('/word2vec_glove', (req, res) => res.render('word2vec_glove'));

app.get('/speech_to_text_wavenet', (req, res) => res.render('speech_to_text_wavenet'));

const port = 5555;
const host = '0.0.0.0'
app.listen(port, host, () => console.log(`Server started on host ${host} at port ${port}`));
