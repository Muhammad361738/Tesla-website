import Image from "next/image";
import Navbar from "./Navbar/page";
import HomePage from "./HomePage/page";
import ModelY from "./ModelY/page";


export default function Home() {
  return (
    <>
     <Navbar/>
     <HomePage/>
     <ModelY/>
     {/* <ModelThree/> */}
    </>
  );
}
