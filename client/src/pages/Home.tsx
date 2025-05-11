import { Fragment } from "react";
import HeroSection from "@/components/home/HeroSection";
import MenuSection from "@/components/home/MenuSection";
import SpecialOffers from "@/components/home/SpecialOffers";
import AboutUs from "@/components/home/AboutUs";
import Testimonials from "@/components/home/Testimonials";
import Newsletter from "@/components/home/Newsletter";
import Reservation from "@/components/home/Reservation";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <MenuSection />
      <SpecialOffers />
      <AboutUs />
      <Testimonials />
      <Newsletter />
      <Reservation />
    </Fragment>
  );
}
