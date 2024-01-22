/* eslint-disable sort-keys-fix/sort-keys-fix */
const headerData = {
  links: [
    {
      link: '/home',
      name: 'Home',
    },
    {
      name: 'About Us',
      link: '/about-us',
    },
    {
      name: 'Sermons',
      link: '/sermons',
    },
  ],
  logo: 'src/assets/logo.svg',
  buttons: [
    {
      text: 'Partner',
      link: '',
      color: '#0F0D18',
      textColor: '#FFFFFF',
    },
    {
      text: 'Contact Us',
      link: '',
      color: '#E8E6E2',
      textColor: '#000000',
    },
  ],
};

const HeaderContainer = () => {
  return (
    <div className="flex w-full items-center justify-between text-[0.85rem]">
      <div>
        <img className="h-[3.5rem] w-[3.5rem]" src={headerData.logo} />
      </div>
      <div className="flex gap-4 font-semibold text-[#FFFFFF] ">
        {headerData.links.map((item, index) => (
          <div className="hover:cursor-pointer hover:opacity-55" key={index}>
            {item.name}
          </div>
        ))}
      </div>
      <div className="flex gap-4 ">
        {headerData.buttons.map((item, index) => (
          <div
            className={`bg-[${item.color}] text-[${item.textColor}] rounded-lg  px-4 py-2 font-semibold hover:cursor-pointer hover:opacity-55 `}
            key={index}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeaderContainer;
