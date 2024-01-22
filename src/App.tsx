import HeaderContainer from './components/header.jsx';
import Hero from './containers/hero.jsx';

const Link = (props: JSX.IntrinsicElements['a']) => (
  <a
    className="text-pink-500 underline hover:no-underline dark:text-pink-400"
    {...props}
  />
);

export default function App() {
  return (
    <div className="background">
      {/* <div className=" ">
      </div> */}
      <div className="hero">
        <Hero />
        <div className="flex h-[50vh]"></div>
      </div>
    </div>
  );
}
