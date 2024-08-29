import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import { CircularProgress } from "@mui/material";
import Carousal from "../Carousal/Carousal";
import FilterTab from "../FilterTab/FilterTab";

export default function Section({ data, type, title, filters }) {
  const [isCarousal, setIsCarousal] = useState(true);
  const [selectedFilter, setSelectedFilter] = useState(0);
  const filteredDataArray = [data];

  if (filters && data) {
    filteredDataArray.push(
      ...filters.map((ele) => data.filter((song) => song.genre.key === ele.key))
    );
  }

  function mapFilterdItem(dataArr) {
    return dataArr.map((arr) => {
      return (
        <Carousal
          data={arr}
          Component={(arr) => <Card data={arr} type={type} />}
        />
      );
    });
  }

  const handleCollaps = () => {
    setIsCarousal(!isCarousal);
  };

  return (
    <div className={styles.sectionOuter}>
      {type === "songs" ? <hr className={styles.hr} /> : null}
      <div className={styles.section_heading}>
        <h3 className={styles.section_name}>{title}</h3>
        {type !== "songs" && (
          <h4 className={styles.toggletxt} onClick={handleCollaps}>
            {!isCarousal ? "Collapse" : "Show All"}
          </h4>
        )}
      </div>
      <div>
        {data.length === 0 ? (
          <div className={styles.circularProgress}>
            <CircularProgress />
          </div>
        ) : type !== "songs" ? (
          <div className={styles.cards}>
            {isCarousal ? (
              <Carousal
                data={data}
                Component={(data) => <Card data={data} type={type} />}
              />
            ) : (
              <div className={styles.cardGroup}>
                {data.map((item) => (
                  <Card key={item.id} data={item} type={type} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className={styles.cards}>
            {
              <div className={styles.filter_tabs}>
                <FilterTab
                  tabLables={[{ key: "all", label: "All" }, ...filters]}
                  tabData={mapFilterdItem(filteredDataArray)}
                  selectedFilter={selectedFilter}
                  setSelectedFilter={setSelectedFilter}
                ></FilterTab>
              </div>
            }

            <hr className={styles.hr} />
          </div>
        )}
      </div>
      {title === "Top Album" && !isCarousal && <hr className={styles.hr} />}
    </div>
  );
}
