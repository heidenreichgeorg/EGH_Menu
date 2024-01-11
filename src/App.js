import logo from './favicon.bmp';
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
    "RW_ZehnthofFeinherb_2019.png",

    "HV_Linsendal"
];

function splitChoice(fileName) {
    let aParts= (fileName.split('.')[0]).split('_');
    aParts.shift();
    return aParts.join(' ');
}

function App() {
  return (
    <div className="paper">
        <header className="App-header">
            <img src={logo}  className="App-logo" alt="logo" />
        </header>
                

        <div class="menu">
            <div class="title">
                <div class="choice">Biere</div>
            </div>

            <div class="course">
                <div class="spacer"><img width="10px"  src="./paper.png"></img></div>
                {
                currentMenu.map((item,i)=>(item.substring(0,2)=="BI"? (
                    <div class="choice">
                            <div class="course"><img width="80px" alt="{item}" height="200px" src={"./"+item}></img></div>
                            <div class="course">{splitChoice(item)}</div>
                    </div>
                ):""))
                }       
            </div>
            
            <div class="title">
                <div class="choice">Rotweine</div>
            </div>
            <div class="course">
                <div class="spacer"><img width="10px"  src="./paper.png"></img></div>
                {
                currentMenu.map((item,i)=>(item.substring(0,2)=="RW"? (
                    <div class="choice"><div class="menu">
                            <div class="course"><img width="80px" alt="{item}" height="200px" src={"./"+item}></img></div>
                            <div class="course">{splitChoice(item)}</div>
                    </div></div>
               ):""))
                }       
            </div>


            <div class="title">
                <div class="choice">Hauptgang - vegan</div>
            </div>
            <div class="course">
                <div class="spacer"><img width="10px"  src="./paper.png"></img></div>
                {
                currentMenu.map((item,i)=>(item.substring(0,2)=="HV"? (
                    <div class="choice"><div class="menu">
                            <div class="course"><img width="80px" alt="{item}" height="200px" src={"./"+item}></img></div>
                            <div class="course">{splitChoice(item)}</div>
                    </div></div>
               ):""))
                }       
            </div>

        </div>
    </div>
  );
}

export default App;
