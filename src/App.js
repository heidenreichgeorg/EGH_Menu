import logo from './favicon.bmp';
import './App.css';

import { useSearchParams } from 'react-router-dom';

// created workspace with      npx create-react-app eg_menu
// added router with         npm install react-router-dom
// created public project in GitHub


let storage = {
    "1": [
        "BI_Steam_Porter.png",
        "WW_Ipsheim_Düll_Silvaner_2020.png"
    ],

    "2": [
        "BI_Aktien_Landbier_Dunkel.png",
        "BI_Aktien_Zwickl_Kellerbier.png",
        "BI_Steam_SummerAle.png",
    ],

    "3": [
        "BI_Veldensteiner_Landbier.png"
    ],

    "4": [
        "BI_Weller_JeanPaul.png",
        "RW_Rioja_Faustino_2019.png",
        "BI_Rittmayer_Hallerndorfer_Hausbrauer.png",
    ],

    "6":[
        "BI_Rittmayer_Hallerndorfer_Kellerbier.png",
        "BI_Aufsesser_Dunkel.png",
        "BI_Schinner_Edelpils.png"
    ]
}

let events = {

    "240117": [        
            "RW_Teroldego_2014.png",

            "RW_Zehnthof_Feinherb_2019.png",

            "MV_Veganes_Linsen_Dal.png"
        ],

    "240118": [
            "SW_Mars_Celebrations.png",

            "MV_Chili_sin_Carne.png"
            ]
    
};


function splitChoice(fileName) {
    let aParts= (fileName.split('.')[0]).split('_');
    aParts.shift();
    return aParts.join(' ');
}

function App() {
    const [searchParams, setSearchParams] = useSearchParams();
    let date = searchParams.get("date");
    let stock = searchParams.get("stock");

    let currentMenu=[];
    if(date && date.length>0) {

        let quantities=Object.keys(storage);
        quantities.forEach((stock)=>{
            currentMenu=storage[stock].concat(currentMenu);
        });


        if(events[date] &&  events[date].length>0) try {

            currentMenu=events[date].concat(currentMenu);


        } catch(e) { console.dir("could not add event list")}

    } else if(stock && stock.length>0) {
        if(storage[stock] &&  storage[stock].length>0) try {
            
            currentMenu=storage[stock].concat(currentMenu);

        } catch(e) { console.dir("could not add strage list")}

    }

    let jCourses = {"BI":"Bier", "WW":"Weißwein", "RW":"Rotwein", "MV":"Veganes Hauptgericht", "SW":"Süßigkeiten"};

    let jChoices={};
    currentMenu.forEach((item,i)=>{
        let type=item.substring(0,2);
        if(jChoices[type]) jChoices[type].push(item); else jChoices[type]=[item];
    });

    return (
        <div className="paper">
            <header className="App-header">
                <img src={logo}  className="App-logo" alt="logo" />
            </header>
                    

            <div className="menu">


            

            {   Object.keys(jChoices).map((type)=>(
                (jChoices[type].length>0) ?
                (
                    <div>
                        <div className="title">
                            <div className="choice">{jCourses[type]}</div>
                        </div>
                        <div className="course">
                            <div className="spacer"><img  alt="" width="10px"  src="./paper.png"></img></div>
                            {
                            jChoices[type].map((item,i)=>
                            (
                                <div key={"redwine"+i} className="choice"><div className="menu">
                                        <div className="course"><img alt={'"'+type+'"'} width="80px"  height="200px" src={"./"+item}></img></div>
                                        <div className="course">{splitChoice(item)}</div>
                                </div></div>
                            ))
                            }      
                        </div>
                    </div>
                ):""))
            }



            </div>
        </div>
    );
}

export default App;
