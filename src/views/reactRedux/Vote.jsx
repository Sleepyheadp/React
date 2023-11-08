import React from "react";
// import {useContext,useEffect,useState} from 'react'
import VoteMain from "./VoteMain";
import VoteFooter from "./VoteFooter";
// import ThemeContext from '../../utils/ThemeContext'
import { connect } from "react-redux";
const Vote = (props) => {
	let { supNum, oppNum } = props;
	return (
		<>
			<div>人数总和:{supNum + oppNum}</div>
			<VoteMain></VoteMain>
			<VoteFooter></VoteFooter>
		</>
	);
};
export default connect((state) => state.vote)(Vote);
