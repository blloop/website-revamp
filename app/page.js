import Image from 'next/image';
import LinkButton from './components/LinkButton';
import { DarkButton, LightButton } from './components/Buttons';

export default function Home() {
  return (
    <div className='flex flex-col md:flex-row w-full justify-around bg-primary-500'>
      <div className='flex flex-col p-8 justify-end gap-2'>
        <p>Welcome to my website!</p>
        <p className='text-5xl'>Hi, I'm Bill</p>
        <p>
          This is my portfolio and personal website. <br/>
          I'm a programmer, hobby sprinter, and pianist who enjoys reading. 
        </p>
        <div className='flex gap-3'>
          <LinkButton src='/github.svg' alt='GitHub Logo' href='http://github.com/blloop'/>
          <LinkButton src='/linkedin.svg' alt='LinkedIn Logo' href='http://linkedin.com/in/biyu430'/>
          <LinkButton src='/athleticnet.png' alt='Athletic.net Logo' href='http://athletic.net/athlete/12379749/track-and-field/unattached'/>
          <LinkButton src='/mail.svg' alt='Mail Icon' href='mailto:blloop@uw.edu'/>
        </div>
        <DarkButton><a href='/blog'>Read my blog</a></DarkButton>
        <LightButton>Check out my projects</LightButton>
      </div>
      <div className='p-8'>
          <Image
            className='rounded-full'
            src='/headshot.png'
            width='300'
            height='300'
          />
      </div>
    </div>
  );
}
