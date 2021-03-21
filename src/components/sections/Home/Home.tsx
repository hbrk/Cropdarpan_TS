import React, {Component} from "react"
import Card1 from './Card_Cotton'
import Card2 from './Card_Wheat'
import Card3 from './Card_SC'
import Card4 from './Card_SF'
import './card-style.css'
import './home.scss'

let sr4='./../../../assets/images/a.png'
let sr1='./../../../assets/images/b.png'
let sr2='./../../../assets/images/c.png'
let sr3='./../../../assets/images/d.png'


class Home extends Component {
    render() {
        return(
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                <div className="col-md-3">
                <Card1 imgsrc={sr4} height="10px" width="20%"/>
                </div>
                <div  className="col-md-3"><Card2 imgsrc={sr3} /></div>
                <div className="col-md-3"><Card3 imgsrc={sr1} /></div>
                <div className="col-md-3"><Card4 imgsrc={sr2} /></div>
                </div>
            </div>
        );
    }
}

export default Home;
