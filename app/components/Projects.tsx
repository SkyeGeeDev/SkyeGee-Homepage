import React from 'react'
import Script from 'next/script'

const Projects = () => {
  return (
    <div className='grid grid-cols-12 bg-swhite text-dblue text-center justify-center py-8'>
        <div className='col-span-full text-lg font-extrabold'>
            My Projects
        </div>
        <div className='flex flex-row col-start-3 col-span-8 justify-center space-x-8'>
            <Script id='fuzz-bizz'>{`
            let input = parseInt(prompt('Please give me a number to FizzBuzz: '));
            
            for (let i = 1; i <= input; i++) {
              if (i % 3 === 0 && i % 5 === 0){
                console.log('FizzBuzz');
              } else if (i % 3 === 0){
                console.log('Fizz');
              } else if (i % 5 === 0){
                console.log('Buzz');
              } else {
                console.log(i);
              }
            }
            `}
            </Script>
        </div>
    </div>
  )
}

export default Projects