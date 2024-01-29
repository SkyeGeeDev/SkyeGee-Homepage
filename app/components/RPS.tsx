'use client';
import React from 'react'
import { useState } from 'react';
import { IoMdArrowBack } from "react-icons/io";


const RPS = (props: any) => {
    const [playerScore, setPlayerScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    const {back} = props;

    function getComputerChoice(){
        let choice = Math.floor(Math.random() * 3) + 1;

        if (choice === 1){
            return 'rock';
        } else if (choice === 2) {
            return 'paper';
        } else {
            return 'scissors';
        }
    }

    function playRound(playerSelection: string) {

        let computerSelection = getComputerChoice();
        let result: string = '';

        document.getElementById('playerChoice')!.innerHTML = playerSelection;
        document.getElementById('computerChoice')!.innerHTML = computerSelection;

        if (playerSelection === computerSelection){
            result = 'Tie Game.';
        } else if (playerSelection === 'rock'){
            if(computerSelection === 'paper'){
                result = `You lost.`;
                setComputerScore(computerScore + 1);
            } else if (computerSelection === 'scissors') {
                result = `You won!`;
                setPlayerScore(playerScore + 1);
            }
        } else if (playerSelection === 'paper'){
            if(computerSelection === 'scissors'){
                result = `You lost.`;
                setComputerScore(computerScore + 1);
            } else if (computerSelection === 'rock') {
                result = `You won!`;
                setPlayerScore(playerScore + 1);
            }
        } else if (playerSelection === 'scissors'){
            if(computerSelection === 'rock'){
                result = `You lost.`;
                setComputerScore(computerScore + 1);
            } else if (computerSelection === 'paper') {
                result = `You won!`;
                setPlayerScore(playerScore + 1);
            }
        } else {
            result = 'Invalid input. Please try again.'
        }
        document.getElementById('result')!.innerHTML = result;
    }

  return (
    <div className='pb-8 px-2 border-2 rounded-lg place-content-center item-center bg-dblue'>
        <div className='mt-4 cursor-pointer' onClick={back}>
            <IoMdArrowBack size={30}/>
        </div>
        <div className='text-center pb-8'>
            <p className='text-lg md:text-xl py-4'>Scoreboard</p>
            <div className='flex flex-row place-content-center space-x-4'>
                <div className='bg-hblue p-4 rounded-lg'>
                    <p>Player</p>
                    <div className='text-xl p-8'>{playerScore}</div>
                </div>
                <div className='bg-hblue p-4 rounded-lg'>
                    <p>Computer</p>
                    <div className='text-xl p-8'>{computerScore}</div>
                </div>
            </div>
        </div>
        <div className='text-center pb-4 text-lg md:text-xl' id='result'>
            Choose One
        </div>
        <div className='flex flex-col md:flex-row text-center space-y-4 md:space-x-4 pb-8 place-items-center'>
            <button onClick={() => playRound('rock')} className='bg-blue p-4 rounded-lg w-40 hover:bg-hblue'>Rock</button>
            <button onClick={() => playRound('paper')} className='bg-blue p-4 rounded-lg w-40 hover:bg-hblue'>Paper</button>
            <button onClick={() => playRound('scissors')} className='bg-blue p-4 rounded-lg w-40 hover:bg-hblue'>Scissors</button>
        </div>
        <div className='flex flex-col text-center md:space-x-8 place-items-center'>
            <div className=''>
                <p>Player Choice:</p>
                <div id='playerChoice' className='bg-swhite p-4 rounded-lg w-40 text-dblue'/>
            </div>
            <div className=''>
                <p>Computer Choice:</p>
                <div id='computerChoice' className='bg-swhite p-4 rounded-lg w-40 text-dblue'/>
            </div>
        </div>
    </div>
  )
}

export default RPS