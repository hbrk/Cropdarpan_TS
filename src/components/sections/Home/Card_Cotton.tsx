

import React, {Component} from "react"
import {Button} from 'react-bootstrap'

//import Card from "react-bootstrap/Card";
//import {Grid, Card, Icon, Image,CardGroup } from 'semantic-ui-react'
//import {  CardImg, CardText, CardBody,  CardTitle, CardSubtitle, Button
//} from 'reactstrap';

import './card-style.css'

type Props={
	imgsrc:string;
	height:string;
	width:string;
}

const Card = (props:Props) => {	return (
		<div className="card text-center">
			<div className="overflow">
				<img src={props.imgsrc} className="card-img-top"/> <br/><br/><br/>
			</div>
			<div className="card-body text-dark">
				<a href="#" className="btn btn-outline-success card-title" style={{float:'right'}}><h4> <b>Cotton</b></h4></a>
			</div>

		</div>
	);
};

export default Card;
