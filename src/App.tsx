import React from 'react';
import './App.css';

interface MenuItem {
    type: string,
    name: string,
    image: string
}

interface BeerItem extends MenuItem {
    type: 'beer'
}

interface WineItem extends MenuItem {
    type: 'redwine',
    year: string
}

const beerMenu: BeerItem[] = [
    {
        type: 'beer',
        name: 'Aufsesser Dunkel',
        image: '/thumbnails/aufsesser_dunkel.png'
    },
    {
        type: 'beer',
        name: 'Schinner Edelpils',
        image: '/thumbnails/schinner_edelpils.png'
    },
    {
        type: 'beer',
        name: 'Steam Porter',
        image: '/thumbnails/steam_porter.png'
    },
    {
        type: 'beer',
        name: 'Steam SummerAle',
        image: '/thumbnails/steam_summerale.png'
    },
    {
        type: 'beer',
        name: 'Veldensteiner Landbier',
        image: '/thumbnails/veldensteiner_landbier.png'
    },
    {
        type: 'beer',
        name: 'Weller JeanPaul',
        image: '/thumbnails/weller_jeanpaul.png'
    },
    {
        type: 'beer',
        name: 'Aktien Landbier Dunkel',
        image: '/thumbnails/aktien_landbier_dunkel.png'
    },
    {
        type: 'beer',
        name: 'Rittmayer Hallerndorfer Hausbrauer',
        image: '/thumbnails/rittmayer_hallerndorfer_hausbrauer.png'
    },
]

const wineMenu: WineItem[] = [
    {
        type: 'redwine',
        name: 'Rioja Faustino',
        image: '/thumbnails/rioja_faustino_2019.png',
        year: '2019'
    },
    {
        type: 'redwine',
        name: 'Teroldego',
        image: '/thumbnails/teroldego_2014.png',
        year: '2014'
    },
    {
        type: 'redwine',
        name: 'Zehnthof Feinherb',
        image: '/thumbnails/zehnthof_feinherb_2019.png',
        year: '2019'
    }
]

function App() {
  return (
    <div className="paper">
        <header className="App-header">
            <img src='/favicon.bmp' className="App-logo" alt="logo" />
        </header>
                

        <div className="menu">
            <div className="title">
                <div className="choice">Biere</div>
            </div>

            <div className="course">
                <div className="spacer"><img width="10px"  src="./paper.png"></img></div>
                {
                    beerMenu.map((item) => (
                        <div className="choice">
                                <div className="course"><img width="80px" alt="{item}" height="200px" src={item.image}></img></div>
                                <div className="course">{item.name}</div>
                        </div>
                    ))
                }       
            </div>
            
            <div className="title">
                <div className="choice">Rotweine</div>
            </div>

            <div className="course">
                <div className="spacer"><img width="10px"  src="./paper.png"></img></div>
                {
                    wineMenu.map(item => (
                        <div className="choice"><div className="menu">
                                <div className="course"><img width="80px" alt="{item}" height="200px" src={item.image}></img></div>
                                <div className="course">{item.name}</div>
                        </div></div>
                    ))
                }
            </div>
        </div>
    </div>
  );
}

export default App;
