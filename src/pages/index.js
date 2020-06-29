import React,{Component} from "react"
import "../styles/global.css"


import LasoonNav from '../components/Nav'
import LasoonSideDrawer from '../components/SideDrawer/SideDrawer'
import LasoonBackdrop from "../components/Backdrop/Backdrop"


class Home extends Component {

  state={
    sideDrawerOpen:false
  }
  drawerToggleClickHandler =()=> {
this.setState((prevState)=>{
  return{sideDrawerOpen:!prevState.sideDrawerOpen};
} )
  };
  render(){
    let sideDrawer;
    let backdrop;
    if(this.state.sideDrawerOpen){
      sideDrawer=<LasoonSideDrawer/>;
      backdrop=<LasoonBackdrop/>
    }
    return(
      <div  style={{height:'100%'}}>
<LasoonNav drawerClickHandler={this.drawerToggleClickHandler}/>
{sideDrawer}
{backdrop}


  </div>

    );
  }
}
 export default Home;
// export default function Home() {
//   return <div  style={{height:'100%'}}>
// <LasoonNav/>
// <LasoonSideDrawer/>
// <LasoonBackdrop/>
// {/* <main style={{color:"white"}}>
//   <p>LAsoon restro</p>
// </main> */}
//   </div>

     
// }