import logo from '../public/favicon.bmp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

<div class="menu">
    <div class="caption">
    </div><div class="title">
        <div class="choice">Biere</div>
    </div>
    <div class="course">
        <div class="spacer"><img width="10px"  src="./paper.png"></img></div>
        <div class="choice">
            <div class="choice">
                    <div class="course"><img width="80px" height="200px" src="./B_Aufsesser_Dunkel.png"></img></div>
                    <div class="course">Aufsesser Dunkel</div>
            </div>
        </div>
        <div class="choice"><img width="80px" height="200px"  src="./B_Schinner_Edelpils.png"></img></div>
        <div class="choice"><img width="80px" height="200px"  src="./B_Steam_Porter.png"></img></div>
        <div class="choice"><img width="80px" height="200px"  src="./B_Steam_SummerAle.png"></img></div>
        <div class="choice"><img width="80px" height="200px"  src="./B_Veldensteiner_Landbier.png"></img></div>
        <div class="choice"><img width="80px" height="200px"  src="./B_Weller_JeanPaul.png"></img></div>
        <div class="choice"><img width="80px" height="200px"  src="./B_Aktien_Landbier_Dunkel.png"></img></div>
        <div class="choice"><img width="80px" height="200px"  src="./B_Rittmayer_Hallerndorfer_Hausbrauer.png"></img></div>            
    </div>
    
    <div class="caption">
        <div class="spacer"><img width="10px"  src="./paper.png"></img></div>
        <div class="choice">Aufsesser Dunkel</div>
        <div class="choice">Schinner Edelpils</div>
        <div class="choice">Steam Porter</div>
        <div class="choice">Steam SummerAle</div>
        <div class="choice">Veldensteiner Landbier</div>
        <div class="choice">Weller Jean-Paul</div>
        <div class="choice">Aktien Landbier Dunkel</div>
        <div class="choice">Rittmayer Hallerndorfer Hausbrauer</div>            
    </div>

    <div class="title">
        <div class="choice">Rotweine</div>
    </div><div class="course">
        <div class="spacer"><img width="10px"  src="./paper.png"></img></div>
        <div class="choice"><img width="80px" height="200px"  src="./RW_Rioja_Faustino_2019.png"></img></div>
        <div class="choice"><img width="80px" height="200px"  src="./RW_Teroldego_2014.png"></img></div>
        <div class="choice"><img width="80px" height="200px"  src="./RW_ZehnthofFeinherb_2019.png"></img></div>
    </div>

    <div class="caption">
        <div class="spacer"><img width="10px"  src="./paper.png"></img></div>
        <div class="choice">Rioja Faustino 2019</div>
        <div class="choice">Teroldego Gaudenzio 2014</div>
        <div class="choice">Zehnthof Feinherb 2019</div>
    </div>
</div>
       
      </header>
    </div>
  );
}

export default App;
