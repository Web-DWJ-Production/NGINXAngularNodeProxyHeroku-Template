//https://reacttraining.com/react-router/web/example/route-config
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { CSSTransitionGroup } from 'react-transition-group';
import { spring, AnimatedSwitch } from 'react-router-transition';

/* Components */
import Footer from './templates/footer';
import Home from './templates/home';
import AboutUs from './templates/aboutUs';
import OurHistory from './templates/ourHistory';
import OurClergy from './templates/ourClergy';
import OurService from './templates/ourService';
import PastorsPage from './templates/pastorsPage';
import Ministries from './templates/ministries';
import GetConnected from './templates/getConnected';
import ContactUs from './templates/contactUs';
import Gallery from './templates/gallery';

import UC from './templates/uc';
import NoMatch from './templates/404';

/* Styles */
import "../css/app.less";

/* Images */
import logoW from "../assets/img/logos/Clinton_logoW.png";

const routes = [
    { title:"about us", path:"/aboutUs", component:AboutUs, subPages:[
        { title:"our history",path:"/aboutUs/ourHistory", component:OurHistory},
        { title:"pastors page", path:"/aboutUs/pastorsPage", component:PastorsPage},
        { title:"our clergy", path:"/aboutUs/ourClergy", component:OurClergy},
        { title:"service information", path:"/aboutUs/ourService", component:OurService},
        { title:"gallery", path:"/aboutUs/gallery", component:Gallery},
        { title:"inside zion", external:true, path:"http://www.amez.org/"}
    ]},    
    { title:"ministries", path:"/ministries", optionalPath:"/:ministryId?", component:Ministries},
    { title:"get connected", path:"/getConnected", component:GetConnected},    
    { title:"contact us", path:"/contactUs", component:ContactUs}  
];

const SiteRoutes = route => (
    <div> 
        {route.subPages ?        
            <span>
                <Route exact path={route.path} component={route.component} />            
                {route.subPages.map((subroute, i) => <SiteRoutes key={i} {...subroute} />)}
            </span>           
            : <span><Route path={route.path + (route.optionalPath?route.optionalPath:"")} render={props => ( <route.component {...props} />)} /></span>
        }     
    </div>
);

function BuildSubMap(props){
    var listRows = [[],[]];
    try {        
        for(var j = 0; j < props.list.length; j++){
            listRows[(j%2)].push(props.list[j]);
        }
    }
    catch(ex){
        console.log("Error building sub map: ",ex);
    }

    return (
        <div className="dropdown-menu" aria-labelledby={"navDrop"+props.loc}>
            <div className="drop-container">
                {listRows.map((col, k) =>
                    <div key={k} className="drop-col">
                        {col.map((subItem, l) =>
                            <Link key={l} to={subItem.path}>{subItem.title}</Link>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

function MobileNav(props){
    return (
        <div className={"sidenav-container" + (props.sidebarOpen ? " active": "")}>
            <div className="nav-close" onClick={() => props.setSidebarDisplay(false)}><i className="fas fa-times"></i></div>
            <div className="sidenav-section">
                {routes.map((route, i) =>
                    <div className="route-page-container">
                        <Link className="sidenav-link" key={i} to={route.path}>{route.title}</Link>
                        <div className="sidenav-subcontainer">
                            {route.subPages && route.subPages.map((subItem,k) => 
                                <span className="sub-link" key={k}>
                                {(subItem.external ?
                                    <a href={subItem.path} target="_blank" key={k} rel="noopener noreferrer">{subItem.title}</a>
                                    : <Link key={k} to={subItem.path}>{subItem.title}</Link>
                                )}
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>

            <div className="sidenav-section btn-section">
                <a href="https://giv.li/0euaiq" target="_blank" className="donate-btn">Donate</a>
                <div className="social-btn-container">
                    <a href="https://www.facebook.com/Clinton-African-Methodist-Episcopal-Zion-Church-344226358930084/" target="_blank" className="social-btn facebook" data-fa-transform="shrink-8"><i className="fab fa-facebook-f fa-fw"></i></a>
                    <a href="https://twitter.com/ClintonAMEZion" target="_blank" className="social-btn twitter" data-fa-transform="shrink-8"><i className="fab fa-twitter fa-fw"></i></a>
                </div>
            </div>
        </div>
    );
}


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
            additonalMenuDisplay: false,
            additonalMenu:[]
        };

        this.showAdditionalMenu = this.showAdditionalMenu.bind(this);
        this.hideAdditionalMenu = this.hideAdditionalMenu.bind(this);
        this.setSidebarDisplay = this.setSidebarDisplay.bind(this);
    }

    render(){     
        return(
           <Router>
                <div className="app-body">
                    {/* Mobile Nav */}
                    {/*<MobileNav setSidebarDisplay={this.setSidebarDisplay} sidebarOpen={this.state.sidebarOpen}/>*/}
                    { /* HEADER */}                    
                    <div className="nav-header fixed-header" id="clintonHeader">
                        <div className="main-top-nav">
                            <a href="https://giv.li/0euaiq" target="_blank" rel="noopener noreferrer" className="top-link">Givelify</a>
                            <a href="" target="_blank" rel="noopener noreferrer" className="top-link">CashApp</a>
                            <a href="https://www.facebook.com/Clinton-African-Methodist-Episcopal-Zion-Church-344226358930084/" target="_blank" rel="noopener noreferrer" className="top-link social-link facebook"><i className="fab fa-facebook-f fa-fw"/></a>
                            <a href="https://twitter.com/ClintonAMEZion" target="_blank" rel="noopener noreferrer" className="top-link social-link twitter"><i className="fab fa-twitter fa-fw"/></a>
                        </div>
                        <div className="main-bottom-nav">
                            <nav className="navbar navbar-expand-lg">
                                <Link className="navbar-brand" to="/">
                                    <img src={logoW} className="logo" alt="A.M.E. Zion Logo" />
                                </Link>
                                <button className="navbar-toggler" type="button">
                                    <div id="menuIcon" className="animateMenu">
                                        <div className="bar1"></div>
                                        <div className="bar2"></div>
                                        <div className="bar3"></div>
                                    </div>
                                </button>
                                <div className="collapse navbar-collapse">
                                    <ul className="nav navbar-nav navbar-right">
                                        {routes.map((route, i) =>
                                            (route.subPages && route.subPages.length > 0 ?
                                                <li key={i} className="nav-item dropdown">
                                                    <Link to={route.path} id={"navDrop"+i} className="nav-link dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{route.title}</Link>
                                                    <BuildSubMap list={route.subPages} loc={i} />                                                                                                    
                                                </li>
                                                : <li key={i} className="nav-item"><Link to={route.path} className="nav-link">{route.title}</Link></li>
                                            )                                           
                                        )}
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    
                    {/* Body*/}
                    <div className="body-container">
                        <Switch>
                            <Route exact path="/" component={Home} />                            
                            { routes.map((route, i) => <SiteRoutes key={i} {...route} />) }                            
                            <Route component={NoMatch} />                            
                        </Switch>
                    </div>

                    {/* Footer */}
                    <Footer />
                </div>
           </Router>
        );
     }
  
     componentDidMount(){
        declareDropDowns();
     }

     showAdditionalMenu(menu){
         var self = this;
         try {             
              if(menu != null){
                self.setState({ additonalMenu: menu });
                self.setState({ additonalMenuDisplay: true});
              }
              else {
                self.setState({ additonalMenu: []});
                self.setState({ additonalMenuDisplay: false});
              }
         }
         catch(ex){
            console.log(" Error showing sub menu: ", ex);
         }
     }

     hideAdditionalMenu(e){
        var self = this;
        try {
            e = e || window.event;
            var x = e.clientX;
            var y = e.clientY;
            var elm = document.elementFromPoint(x,y);
            var inAdditionalMenu = elm.className.includes("additionalMenu"); 

            if(self.state.additonalMenuDisplay === true && !inAdditionalMenu){
                self.setState({ additonalMenu: []});
                self.setState({ additonalMenuDisplay: false});
            }
        }
        catch(ex){
            console.log(" Error hiding sub menu: ", ex);
        }
      }

      setSidebarDisplay(status) {
        this.setState({ sidebarOpen: status }, () =>{
            document.body.classList.toggle('noscroll', status);
        });
      }
}

export default App;

/* Private Functions */
function declareDropDowns(){
    try {
        /*$('.dropdown').on('show.bs.dropdown', function(e){
            console.log("1-");
            $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
        });
          
        $('.dropdown').on('hide.bs.dropdown', function(e){
            console.log("2-");
            $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
        });*/
    }
    catch(ex){
        console.log("Error declaring drop downs: ",ex);
    }
}