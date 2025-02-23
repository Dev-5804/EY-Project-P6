// import React from 'react'

const Footer = () => {
  return (
    <footer className="flex justify-around mt-[100px]">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold">About Me</h1>
        <p>Devendra Mali</p>
        <p>Yawalewadi, Haveli, Pune</p>
      </div>
      <div>
        <h1 className="text-xl sm:text-2xl font-bold">Reach Me</h1>
        <div className="pt-4 flex justify-between">
          <a href="mailto:dev.endra.mali.5804@gmail.com" target="_blank">
            <img
              src="src/assets/icon/gmail.png"
              alt="gamil"
              width={15}
              height={15}
            />
          </a>
          <a href="https://www.linkedin.com/in/devendra-mali-947760320/">
            <img
              src="src/assets/icon/linkedin.png"
              alt="linkedin"
              width={15}
              height={15}
            />
          </a>
          <a href="https://www.instagram.com/_devendra_mali/">
            <img
              src="src/assets/icon/instagram.png"
              alt="insta"
              width={15}
              height={15}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
