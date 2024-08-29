import React from "react";
import styles from "./HomePage.module.css";
import Hero from "../../components/Hero/Hero";
import { useOutletContext } from "react-router-dom";
import Section from "../../components/Section/Section";
export default function HomePage() {
  const { data } = useOutletContext();
  const { topAlbum } = data;
  return (
    <>
      <Hero />
      <div className={styles.section_wrapper}>
        <Section title={"Top Album"} data={topAlbum} type={"album"} />
      </div>
    </>
  );
}
