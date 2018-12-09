import React from "react"
import {Component} from "react"
import Fab from '@material-ui/core/Fab'

export default class BreedRandomImage extends Component{
	constructor(props) {
	    super(props);
	}

	render () {
		const {ListImageBreed, NextSeeBreed, breedName, urlRandom, selfprops}=this.props
		if (!ListImageBreed) {
		return (<p></p>)
			} else {
				return (
					<div className="positionCenter">
					<h3> View images breed {breedName}  </h3>
					<div>
						<img src={ListImageBreed}/>
						<Fab color="default" variant='round'
						onClick={NextSeeBreed.bind(null, selfprops, breedName, urlRandom)}
						> Next</Fab>
					</div>
			</div>);
						  };
		}
	}
