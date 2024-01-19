'use client';
import React from 'react'
import { useState } from 'react';

const RPS = () => {

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

    function playRound(playerSelection) {

        let computerSelection = getComputerChoice();
        let result;

        document.getElementById('playerChoice').innerHTML = playerSelection;
        document.getElementById('computerChoice').innerHTML = computerSelection;

        if (playerSelection === computerSelection){
            result = 'Tie Game.'
        } else if (playerSelection === 'rock'){
            if(computerSelection === 'paper'){
                result = `You lost. Paper beats Rock.`;
            } else if (computerSelection === 'scissors') {
                result = `You won! Rock beats Scissors.`;
            }
        } else if (playerSelection === 'paper'){
            if(computerSelection === 'scissors'){
                result = `You lost. Scissors beats Paper.`;
            } else if (computerSelection === 'rock') {
                result = `You won! Paper beats Rock.`;
            }
        } else if (playerSelection === 'scissors'){
            if(computerSelection === 'rock'){
                result = `You lost. Rock beats Scissors`;
            } else if (computerSelection === 'paper') {
                result = `You won! Rock beats Paper.`;
            }
        } else {
            result = 'Invalid input. Please try again.'
        }
        document.getElementById('result').innerHTML = result
        return result;
    }

  return (
    <div className='h-screen grid place-content-center item-center'>
        <div className='flex space-x-4 pb-8'>
            <button onClick={() => playRound('rock')} className='bg-blue p-4 rounded-lg w-40 hover:bg-hblue'>Rock</button>
            <button onClick={() => playRound('paper')} className='bg-blue p-4 rounded-lg w-40 hover:bg-hblue'>Paper</button>
            <button onClick={() => playRound('scissors')} className='bg-blue p-4 rounded-lg w-40 hover:bg-hblue'>Scissors</button>
        </div>
        <div className='flex flex-row text-center space-x-8 place-content-center'>
            <div className=''>
                <p>Player</p>
                <div id='playerChoice' className='bg-dblue p-4 rounded-lg w-40'/>
            </div>
            <div className=''>
                <p>Computer</p>
                <div id='computerChoice' className='bg-dblue p-4 rounded-lg w-40'/>
            </div>
        </div>
        <div className='text-center pt-8' id='result'> </div>
    </div>
  )
}

export default RPS