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

let Blocks = [
    {
        i:0,
        pos:"0 5 0",
        siz:"10 5 10",
        col:0xff8080,
        accel:1
    },
    {
        i:1,
        pos:"20 5 -5",
        siz:"10 5 10",
        col:0x8080ff,
        jump:1,
    }
]

let Objects = [
    {
        name: '二丁拳銃ってリロードどうすんだ？',
        scale: 100,
        touchable: 1,
        start:1,
        startP: "0 30 0"
    },
    {
        name:"accelpad",
        scale: 100,
        touchable: 1,
        touchKind: "on",
        accelRate: 300
    },
    {
        name:"jumppad",
        scale: 100,
        touchable: 1,
        touchKind: "on",
        jumpRate: 60
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
