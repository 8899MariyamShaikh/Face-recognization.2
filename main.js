Webcam.set({
    width:350,
    height:300,
    img_format : 'png',
    png_quality : 90
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_img" src="'+data_uri+'"/>'
    });
}

console.log('ml5 version:',ml5.version);

clssifier = ml5.imgClassifier('https://cdn.jsdelivr.net/npm/@teachablemachine/image@0.8/dist/teachablemachine-image.model.json',modleLoaded);