import React from 'react';
import {Component} from 'react';
import './home.css';

export default class Home extends Component{
	render(){
		return(
			<h1 className={'home'}>
				Hello <span className={'black'}>world</span>
			</h1>
		);
	}
}