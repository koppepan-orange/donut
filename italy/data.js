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

let Links = [
    {
        name:'オーバー！',
        href:'https://koppepan-orange.github.io/test-site/',
        desc:'パスワードは ひ み つ だった'
    },
    {
        name:'game-site',
        href:'https://koppepan-orange.github.io/game-site/'
    },
    {
        name:'france_bread',
        href:'https://koppepan-orange.github.io/france_bread/'
    },
    {
        name:'forSchool',
        href:'https://koppepan-orange.github.io/forSchool/',
    },
    {
        name:'together',
        href:'https://koppepan-orange.github.io/together/aaaa/',
    },

    {
        name:'nvacod',
        href:'https://mps.nvacod.top/',
    },
    {
        name:'nvacod_edit',
        href:'https://mps.nvacod.top/ftp',
        desc:'misc01'
    },
    {
        name:'nvacod_hisa',
        href:'https://mps.nvacod.top/hisa/',
    },
    {
        name:'nvacod_italy (here!)',
        href:'https://mps.nvacod.top/italy',
    }
]