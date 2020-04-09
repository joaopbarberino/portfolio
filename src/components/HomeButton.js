// Adptade from: https://codepen.io/Shtam3x/pen/Bevpxd

import React from 'react';
import styled from 'styled-components';
import { colors } from '../helpers/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';

const speed = '.3s';
const transition = `all ${ speed } cubic-bezier(0.310, -0.105, 0.430, 1.400)`;

const StyledButton = styled.a`
	display: block;
	background-color: ${colors.darkPink};
	width: 300px;
	height: 70px;
	line-height: 70px;
	margin: 75px auto;
	color: ${colors.light};
	position: relative;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	cursor: pointer;
	overflow: hidden;
	/* box-shadow: 0 0 20px 0 rgba(0,0,0,.3); */
	transition: ${transition};
	
	span,
	.icon {
		display: block;
		height: 100%;
		text-align: center;
		position: absolute;
		top: 0;
	}
	
	span {
		width: 72%;
		line-height: inherit;
		font-size: 22px;
		text-transform: uppercase;
		left: 0;
		transition: ${transition};
		
		&:after {
			content: '';
			background-color: ${colors.pink};
			width: 2px;
			height: 70%;
			position: absolute;
			top: 15%;
			right: -1px;
		}
	}
	
	.icon {
		width: 28%;
		right: 0;
		transition: ${transition};
		
		.svg-inline--fa {
			font-size: 30px;
			vertical-align: middle;
			transition: ${transition}, height ${speed} ease;
		}
		
		.fa-long-arrow-alt-right {
			height: 36px;
		}
	}
	
	&:hover {
		
		span {
			left: -72%;
			opacity: 0;
		}
		
		.icon {
			width: 100%;
			
			.svg-inline--fa {
				font-size: 45px;
			}
		}
	}
	
	&:hover {
	box-shadow: 0 0 20px 0 rgba(0,0,0,.3);
		/* opacity: .7; */
        color: ${colors.light};
        background-color: ${colors.pink};
        
		.icon .fa-long-arrow-alt-right {
			height: 46px;
		}
	}
	
	&:active {
		opacity: 1;
	}
`;

const HomeButton = props => {
    return (
        <StyledButton href='#' role='button'>
            <span>{props.text}</span>
            <div className='icon'>
                <FontAwesomeIcon icon={faLongArrowAltRight} />
            </div>
        </StyledButton>
    )
}

export default HomeButton;