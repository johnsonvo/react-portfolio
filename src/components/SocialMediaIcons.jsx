const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/johnsonvo/'
        target='_blank'
        rel='noreferrer'
      >
        <img alt='linkedin-link' src='../assets/linkedin.png' />
      </a>
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://github.com/johnsonvo'
        target='_blank'
        rel='noreferrer'
      >
        <img
          alt='linkedin-link'
          src='../assets/linkedin.png' /* TODO fix second linkedin icon to a github icon */
        />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
