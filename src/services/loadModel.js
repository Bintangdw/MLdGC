const tf = require('@tensorflow/tfjs-node');
async function loadModel() {
    return tf.loadGraphModel('https://storage.googleapis.com/predict-thecancer/model-in-prod/model.json');
}
module.exports = loadModel;