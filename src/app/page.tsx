import Image from "next/image";
import Navbar from "./Navbar/page";
import HomePage from "./HomePage/page";
import ModelY from "./ModelY/page";
import Solar from "./Solar/page"


export default function Home() {
  return (
    <>
     <Navbar/>
     <HomePage/>
     <ModelY/>
     <Solar/>
     {/* <ModelThree/> */}
    </>
  );
}
