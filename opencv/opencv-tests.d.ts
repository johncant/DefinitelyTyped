import cv = require('opencv');
import fs = require('fs');

function testBoilerplate() {
  var v : string = cv.version;
}

function testMatrix() {

  // ctor
  var m0 : cv.Matrix = new Matrix(5, 5);
  var m1 : cv.Matrix = new Matrix(5, 5, cv.Constants.CV_8UC1);
  var m1 : cv.Matrix = new Matrix(5, 5, cv.Constants.CV_8U, [1]);

  var i4 = cv.Matrix.Eye(4, 4);

  // Accessors
  var r0 : number[] = i4.row(0);
  var c0 : number[] = i4.col(0);
  var pr0 : number[] = i4.pixelRow(0);
  var cr0 : number[] = i4.pixelCol(0);
  var el0 : number = i4.get(0, 0);

  // Attrs
  var w0 : number = i4.width();
  var w0 : number = i4.height();


  // Assignment
  i4.set(0, 0, 255);
  i4.set(0, 0, [0, 255, 0]);

  // Matrix operations

  // Image operations
  var mat0 : cv.Matrix = i4.addWeighted(i4, 0.7)
  var mat1 : cv.Matrix = i4.addWeighted(i4, 0.7, i4, 0.7)
  // TODO - no idea how you'd define alternating argument types in TS

  var mat2 : cv.Matrix = i4.normalize(10, 250, cv.Constants.NORM_TYPE_MASK, -1, i4);

  var im1 = im.roi(10, 10, 100, 100)

  i4.save('foo.png');

  i4.put(i4.toBuffer());

  // TODO - type of buffer
  var buff : Buffer = mat.toBuffer();

}

function testIO() {

  // TODO - type of buffer
  var buf = new Buffer('AAAAAAAAAAAAAAAA');

  cv.readImage('foo.png', (err : Error, mat : cv.Matrix) => {
  });

  cv.readImage(buf, (err : Error, mat : cv.Matrix) => {
  });

  var s : cv.ImageDataStream = new cv.ImageDataStream();

  s.on('load', (matrix : cv.Matrix) => {});

  fs.createReadStream('foo.png').pipe(s);

  var si : cv.ImageStream = new cv.ImageStream();

  si.on('data', (matrix: cv.Matrix) => {});

  // TODO - find out how to create a png stream
  ardrone.createPngStream().pipe(s);

}

function testImgProc() {

  cv.readImage('foo.png', (err : Error, im: cv.Matrix) => {

    var i1 : cv.Matrix = im.copy();

    var vs = cv.imgproc.getStructuringElement(1, [1, 80]);

    // TODO - return types
    im.convertGrayscale();
    im.convertHSV();
    im.gaussianBlur([7, 7])
    im.canny(5, 300);
    im.canny(5, 300, 3);
    im.dilate(3);
    im.dilate(3, vs);
    im.erode(3);
    im.erode(3, vs);
    im.houghLinesP();
    im.inRange([12, 12, 12], [200, 200, 200]);
    var im : cv.Image = im.threshold(200, 200, "foo")
    var bw : cv.Matrix = im.adaptiveThreshold(255, 0, 0, 15, 2);
    bw.bitwiseNot(bw);

    var im1 : cv.Image = im1.clone();

    cv.imgproc.getStructuringElement(1, [1, 80]);

    // TODO - determine type
    var xfrmMat = im.getPerspectiveTransform(srcArray, dstArray);
    im.warpPerspective(xfrmMat, 400, 400, [255, 255, 255]);

    var im_cropped : cv.Matrix = im.crop(50, 50, 250, 250);

    im.ellipse(150, 150);
    im.ellipse(150, 150, 50, 50);
    im.ellipse(150, 150, 50, 50, [255, 255, 0], 2);

    im.line([130, 130], [130, 130]);

    // TODO - check further args
    im.rectangle([1, 1, 3, 3])
    im.rectangle([1, 1, 3, 3], [255, 0, 0])
    im.rectangle([1, 1, 3, 3], [255, 0, 0], 3)

    // TODO - dissimilarity type
    cv.ImageSimilarity(im, im, (err : Error, dissimilarity : any) => {
    })

  });

}


function testObjDetection() {
  
  cv.readImage('foo.png', (err : Error, im: cv.Matrix) => {

    // TODO - options type
    //        matches type
    //        Default haar cascade filename
    mat.detectObject('cascade.xml', {}, (err : Error, matches) => {

    })

    // TODO - type
    mat.goodFeaturesToTrack();
    var contours : cv.Contours = mat.findContours();
    mat.drawContour(contours, 0, [255, 255, 255]);
    mat.drawAllContours(contours, [255, 255, 255]);

  });


}

function testVideo() {
  // TODO - type unclear
  // TODO - Overloaded IIRC
  var camera = new cv.VideoCapture(0);
  var vid = new cv.VideoCapture('foo.mov');

  camera.read((err : Error, im : cv.Matrix) => {
  });

  var im : cv.Matrix
}

function testHighGUI() {
  var win0 = new cv.NamedWindow('Video', 0)
  var win1 = new cv.NamedWindow('Video', '400x400')
  var win2 = new cv.NamedWindow('Video')
  cv.readImage('foo.png', (err : Error, im: cv.Matrix) => {
    win0.show(im)
    win0.blockWaitingKey(0, 50);

    show(im) // ?
    displayImage('Title 1', im)
    blockWaitingKey(0, 50) // ?
  })
}

function testContours() {

  
  cv.readImage('foo.png', (err : Error, im: cv.Matrix) => {

    var contours : Contours = im.findContours();

    var sz : number = contours.size();

    var cm : cv.Moments = contours.moments();

    var cc : number = contours.cornerCount(index : number);

    var cp : cv.Point = contours.point(0, 0);

    var ca : number = contours.area(0);

    var cl : number = contours.arcLength(index, false);

    // TODO - return type unknown
    var br = contours.boundingRect(0);

    // TODO - return type unknown
    var bm = contours.minAreaRect(0);

    var cx : boolean = contours.isConvex(0);

    // TODO - return type unknown
    var ce = contours.fitEllipse(0);

    // TODO - return type unknown
    var ce = contours.approxPolyDP(0, 1.0, false);

    // TODO - return type unknown
    var ce = contours.convexHull(0, true);


  });

}

function testTracking() {

  var camera = new cv.VideoCapture(0);

  camera.read((err : Error, im : cv.Matrix) => {

    var track : cv.TrackedObject = new cv.TrackedObject(im, [0, 100 , 0, 100], {channel: 'value'});

    track.track(im);

  });


}

