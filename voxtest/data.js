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
