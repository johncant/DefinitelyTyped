import cv = require('opencv');
import fs = require('fs');

function testBoilerplate() {
  var v : string = cv.version;
}

function testMatrix() {

  // ctor
  var m0 : cv.Matrix = new Matrix();
  var m0 : cv.Matrix = new Matrix(5, 5);
  var m1 : cv.Matrix = new Matrix(5, 5, cv.Constants.CV_8UC1);
  var m1 : cv.Matrix = new Matrix(5, 5, cv.Constants.CV_8U, [1]);
  var m1 : cv.Matrix = new Matrix(m1, 1, 1, 4, 4);

  var i4 = cv.Matrix.Eye(4, 4);
  var i4 = cv.Matrix.Eye(4, 4, cv.Constants.CV_8U); // CV_64FC1 by default

  var i4 = cv.Matrix.Ones(4, 4);
  var i4 = cv.Matrix.Ones(4, 4, cv.Constants.CV_8U); // CV_64FC1 by default

  var i4 = cv.Matrix.Zeros(4, 4);
  var i4 = cv.Matrix.Zeros(4, 4, cv.Constants.CV_8U); // CV_64FC1 by default

  // Accessors
  var r0 : number[] = i4.row(0);
  var c0 : number[] = i4.col(0);
  var pr0 : number[] = i4.pixelRow(0);
  var cr0 : number[] = i4.pixelCol(0);
  var el0 : number = i4.get(0, 0);
  var p0 : number = i4.pixel(0, 0);
  var p1 : [number, number, number] = im.pixel(0, 0);

  // Attrs
  var w0 : number = i4.width();
  var h0 : number = i4.height();
  var c : number = i4.channels();
  var is_e : boolean = i4.empty();

  // Mutators
  im.pixel(0, 0, [255, 255, 255]);
  i4.pixel(0, 0, 0.9);

  // Mutating pixelwise ops
  im.brightness(1.0, 1.0);
  im.normalize(0.1, 0.9, cv.NORM_MINMAX, cv.CV_8U);
  im.absDiff(im1, im2);
  im.addWeighted(im1, 0.75, im2, 0.25);

  var im2 : cv:Matrix = im.copy();

  var mask : cv.Matrix = Eye(5, 5);
  im.bitwiseXor(im1, im2, mask);
  im.bitwiseAnd(im1, im2, mask);
  im.bitwiseNot(im1, mask);

  var merge : im.merge(im.split());

  // Mutating image ops
  im.resize(100, 100, cv.INTER_LINEAR);
  im.resize(100, 100);
  im.rotate(90, 150, 150);
  im.warpAffine(cv.Eye(3, 3), 100, 100);

  im.pyrDown();
  im.pyrUp();

  im.convertGrayscale();
  im.convertHSVscale();

  im.gaussianBlur();
  im.gaussianBlur([5, 5]);

  im.medianBlur(5);
  im.bilateralFilter();
  im.bilateralFilter(15, 80, 80);
  im.bilateralFilter(15, 80, 80, cv.BORDER_DEFAULT);

  im.cvtColor("CV_BGR2HSV");

  // Linear algebra
  var n0 : number = im.norm(im, cv.NORM_L2, im);
  var n1 : number = im.norm(im);
  var n2 : number = im.norm(im, im);
  var n3 : number = im.norm(im, cv.NORM_L2);
  var n4 : number = im.norm(cv.NORM_L2, im);
  var n5 : number = im.norm(cv.NORM_L2);
  var n6 : number = im.norm();

  // Buffer IO
  var buf : Buffer = getData();
  var buf0 : Buffer = im.ptr();
  var buf0 : Buffer = im.ptr(0);

  // File IO
  im.saveAsync('foo.jpg', (err : Error, success: number) => {})

  // Pure pixelwise ops
  var im1 : cv.Matrix = im.clone();

  im.toBufferAsync((Error, i : Buffer) => {}, {ext: ".jpg", jpegQuality: 75, pngCompression: 75});

  var t0 : cv.Matrix = im.threshold(10, 20);
  var t1 : cv.Matrix = im.threshold(10, 20, cv.THRESH_BINARY);
  var t2 : cv.Matrix = im.threshold(10, 20, cv.THRESH_BINARY, "Simple");


  // Pure image ops
  var t3 : cv.Matrix = adaptiveThreshold(10, 20, cv.THRESH_BINARY, cv.ADAPTIVE_THRESH_MEAN_C, 4, 0);
  var im1 : cv.Matrix = im.flip(-1);
  var split : cv.Matrix[] = im.split();

  // sobel
  // TODO - sobel wrapper doesn't seem to be consistent with opencv docs

  // Mutating drawing
  im.fillPoly([[[0, 0], [100, 100], [0, 100]], [[0, 0], [100, 0], [100, 100]]], [255, 0, 0]);
  im.copyTo(im1, 50, 50);

  im.convertTo(im1, cv.CV_32FC1);
  im.convertTo(im1, cv.CV_32FC1, 1);
  im.convertTo(im1, cv.CV_32FC1, 1, 1);

  // Stats
  var nz : number = im.countNonZero();
  var msd : cv.MeanStd = im.meanStdDev();

  // Algos

  var moments : cv.Moments = im.moments();

  var hl0 : [number, number, number, number][] = im.houghLinesP();
  var hl1 : [number, number, number, number][] = im.houghLinesP(1);
  var hl2 : [number, number, number, number][] = im.houghLinesP(1, cv.CV_PI/180);
  var hl3 : [number, number, number, number][] = im.houghLinesP(1, cv.CV_PI/180, 80);
  var hl4 : [number, number, number, number][] = im.houghLinesP(1, cv.CV_PI/180, 80, 30);
  var hl5 : [number, number, number, number][] = im.houghLinesP(1, cv.CV_PI/180, 80, 30, 10);

  var hc0 : [number, number, number][] = im.houghCircles();
  var hc1 : [number, number, number][] = im.houghCircles(1);
  var hc2 : [number, number, number][] = im.houghCircles(1, 1);
  var hc3 : [number, number, number][] = im.houghCircles(1, 1, 100);
  var hc4 : [number, number, number][] = im.houghCircles(1, 1, 100, 100);
  var hc5 : [number, number, number][] = im.houghCircles(1, 1, 100, 100, 0);
  var hc6 : [number, number, number][] = im.houghCircles(1, 1, 100, 100, 0, 0);

  var gf : [number, number][] = mat.goodFeaturesToTrack();

  // ROI
  im.adjustROI(0, 0, 400, 400);
  var roi : [number, number, number, number] = im.locateROI();

  // TODO - EqualizeHist just crashes if the type is CV_8UC1
  equalizeHist

// ..... aaaaaaaand that's enough for today
//  var ff0 = floodFill();
  matchTemplate
  templateMatch
  minMaxLoc
  pushBack
  putText
  copyWithMask
  setWithMask
  meanWithMask
  shift
  reshape
  release

  .getRotationMatrix2D


  

  // TODO - compare with functions from docs:

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

