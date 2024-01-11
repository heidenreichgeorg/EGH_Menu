import React from 'react';
import './App.css';

let currentMenu = [
    "BI_Aufsesser_Dunkel.png",
    "BI_Schinner_Edelpils.png",
    "BI_Steam_Porter.png",
    "BI_Steam_SummerAle.png",
    "BI_Veldensteiner_Landbier.png",
    "BI_Weller_JeanPaul.png",
    "BI_Aktien_Landbier_Dunkel.png",
    "BI_Rittmayer_Hallerndorfer_Hausbrauer.png",

    "RW_Rioja_Faustino_2019.png",
    "RW_Teroldego_2014.png",
    "RW_ZehnthofFeinherb_2019.png"
];

function splitChoice(fileName: string) {
    let aParts= (fileName.split('.')[0]).split('_');
    aParts.shift();
    return aParts.join(' ');
}

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
                currentMenu.map((item,i)=>(item.substring(0,2)=="BI"? (
                    <div className="choice">
                            <div className="course"><img width="80px" alt="{item}" height="200px" src={"./"+item}></img></div>
                            <div className="course">{splitChoice(item)}</div>
                    </div>
                ):""))
                }       
            </div>
            
            <div className="title">
                <div className="choice">Rotweine</div>
            </div>

            <div className="course">
                <div className="spacer"><img width="10px"  src="./paper.png"></img></div>
                {
                currentMenu.map(item =>(item.substring(0,2)=="RW"? (
                    <div className="choice"><div className="menu">
                            <div className="course"><img width="80px" alt="{item}" height="200px" src={"./"+item}></img></div>
                            <div className="course">{splitChoice(item)}</div>
                    </div></div>
               ):""))
                }       
            </div>
        </div>
    </div>
  );
}

export default App;