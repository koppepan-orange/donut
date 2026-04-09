let Style = {
    iPhone:{ //16
        "width": "393px",
    },
    tekiou: function() {
        for (let section in this) {
            if (section == 'apply') continue;
            for (let key in this[section]) {
                document.documentElement.style
                    .setProperty(`--${section}-${key}`, this[section][key]);
            }
        }
    }
}


let Objects = [
    {
        name: '二丁拳銃ってリロードどうすんだ？',
        scale: 100,
        touchable: 1,
        start:1,
        startF: {
            x: 0,
            y: 20,
            z: 0,
        }
    }
]

let tpPositions = {
    '1':{
        name:'center',
        x:5,
        y:15,
        z:5,    
    },
    '2':{
        name:'course1',
        x:-343,
        y:-232,
        z:-873,    
    },
}
