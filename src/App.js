import logo from './favicon.bmp';
import './App.css';

import { useSearchParams } from 'react-router-dom';

// created workspace with      npx create-react-app eg_menu
// added router with npm install react-router-dom

let basic = [
    "BI_Aufsesser_Dunkel.png",
    "BI_Rittmayer_Hallerndorfer_Hausbrauer.png",
    "BI_Schinner_Edelpils.png",
    "BI_Weller_JeanPaul.png",
    "RW_Rioja_Faustino_2019.png"
];



let events = {
    "240117": [
        "BI_Aktien_Landbier_Dunkel.png",
        "BI_Aktien_Zwickl_Kellerbier.png",
        "BI_Steam_Porter.png",
        "BI_Steam_SummerAle.png",
        "BI_Veldensteiner_Landbier.png",

        "RW_Teroldego_2014.png",
        "RW_Zehnthof_Feinherb_2019.png",

        "MV_Veganes_Linsen_Dal.png"
        ]
};


function splitChoice(fileName) {
    let aParts= (fileName.split('.')[0]).split('_');
    aParts.shift();
    return aParts.join(' ');
}

function App() {
    const [searchParams, setSearchParams] = useSearchParams();
    let date = searchParams.get("date")
    
    let currentMenu=basic;
    if(date && events[date] &&  events[date].length>0) try {

        //events[date].forEach((choice)=>{currentMenu.push(choice)})
        currentMenu=events[date].concat(currentMenu);

    } catch(e) { console.dir("could not add event list")}

    let listBeer = [];  currentMenu.forEach((item,i)=>{if(item.substring(0,2)==="BI") listBeer.push(item); })
    let listRedWine=[]; currentMenu.forEach((item,i)=>{if(item.substring(0,2)==="RW") listRedWine.push(item); })
    let listMainVeg=[]; currentMenu.forEach((item,i)=>{if(item.substring(0,2)==="MV") listMainVeg.push(item); })

    return (
        <div className="paper">
            <header className="App-header">
                <img src={logo}  className="App-logo" alt="logo" />
            </header>
                    

            <div className="menu">


            

            {(listRedWine.length>0) ?
                (
                    <div>
                        <div className="title">
                            <div className="choice">Rotwein</div>
                        </div>
                        <div className="course">
                            <div className="spacer"><img  alt="" width="10px"  src="./paper.png"></img></div>
                            {
                            listRedWine.map((item,i)=>
                            (
                                <div key={"redwine"+i} className="choice"><div className="menu">
                                        <div className="course"><img alt="redwine" width="80px"  height="200px" src={"./"+item}></img></div>
                                        <div className="course">{splitChoice(item)}</div>
                                </div></div>
                            ))
                            }      
                        </div>
                    </div>
                ):""}



                {(listBeer.length>0) ?
                (
                    <div>
                        <div className="title">
                            <div className="choice">Bier</div>
                        </div>
                        <div className="course">
                            <div className="spacer"><img alt="" width="10px"  src="./paper.png"></img></div>
                            {
                            listBeer.map((item,i)=>
                            (
                                <div key={"beer"+i} className="choice"><div className="menu">
                                        <div className="course"><img alt="beer" width="80px" height="200px" src={"./"+item}></img></div>
                                        <div className="course">{splitChoice(item)}</div>
                                </div></div>
                            ))
                            }      
                        </div>
                    </div>
                ):""}




                {(listMainVeg.length>0) ?
                (
                    <div>
                        <div className="title">
                            <div className="choice">Hauptgang - vegan</div>
                        </div>
                        <div className="course">
                            <div className="spacer"><img  alt="" width="10px"  src="./paper.png"></img></div>
                            {
                            listMainVeg.map((item,i)=>
                            (
                                <div key={"vegandish"+i} className="choice"><div className="menu">
                                        <div className="course"><img alt="main vegan" width="80px" height="200px" src={"./"+item}></img></div>
                                        <div className="course">{splitChoice(item)}</div>
                                </div></div>
                            ))
                            }      
                        </div>
                    </div>
                ):""}


            </div>
        </div>
    );
}

export default App;
