import Image from "next/image";
import MainPage from "./Pages/MainPage/page";
import About from "./Pages/About/page";

export default function Home() {
  return (
    <div>
      <MainPage />

      <About />
    </div>
  );
}
