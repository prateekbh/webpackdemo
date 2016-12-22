import React from 'react';
import {Component} from 'react';
import styles from './home.css';

export default class Home extends Component{
	render(){
		return(
			<h1 className={styles.home}>
				Hello <span className={styles.black}>world</span>
			</h1>
		);
	}
}