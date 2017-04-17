

var granimInstance = new Granim({
    element: '#canvas-basic',
    name: 'basic-gradient',
    direction: 'left-right',
    opacity: [1, 1],
    isPausedWhenNotInView: true,
    states : {
        "default-state": {
            gradients: [
                ['#f1ac48', '#ce8954'],
                ['#9f6199', '#f1ac48'],
                ['#f1ac48', '#ce8954']
            ]
        }
    }
});

