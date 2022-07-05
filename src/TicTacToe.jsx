import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
	const [turn, setTurn] = useState('❌');
	const [cells, setCells] = useState(Array(9).fill(''));
	const [winner, setWinner] = useState();

	const isWinner = (squares) => {
		let combos = {
			across: [
				[0, 1, 2],
				[3, 4, 5],
				[6, 7, 8],
			],
			down: [
				[0, 3, 6],
				[1, 4, 7],
				[2, 5, 8],
			],
			diagonal: [
				[0, 4, 8],
				[2, 4, 6],
			],
		};

		for (let combo in combos) {
			combos[combo].map((pattern) =>{
                if (
					squares[pattern[0]] === `` ||
					squares[pattern[1]] === `` ||
					squares[pattern[2]] === ``
				) {
				} else if (
					squares[pattern[0]] === squares[pattern[1]] &&
					squares[pattern[1]] === squares[pattern[2]]
				) {
					setWinner(squares[pattern[0]]);
				}
				});
		}
	};

	const handleClick = (num) => {
		if (cells[num] !== '') {
			alert('Are you serious Maan?');
			return;
		}

		let squares = [...cells];

		if (turn === '❌') {
			squares[num] = '❌';
			setTurn('⭕️');
		} else {
			squares[num] = '⭕️';
			setTurn('❌');
		}

		isWinner(squares);
		setCells(squares);
	};

	const handleRestart = () => {
		setWinner(null);
		setCells(Array(9).fill(''));
	};

	const Cell = ({ num }) => {
		return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
	};

	return (
		<div className='container'>
            <div className='player'>
                    Player: {turn}'s turn
                </div>
			<table>	
				<tbody>
					<tr>
						<Cell num={0} />
						<Cell num={1} />
						<Cell num={2} />
					</tr>
					<tr>
						<Cell num={3} />
						<Cell num={4} />
						<Cell num={5} />
					</tr>
					<tr>
						<Cell num={6} />
						<Cell num={7} />
						<Cell num={8} />
					</tr>
				</tbody>
			</table>
			{/* {winner && ( */}
				<>
					<p>{winner} is won 💪👏</p>
					<button onClick={() => handleRestart()}>Reset</button>
				</>
			 {/* )} */}
		</div>
	);
};

export default TicTacToe;