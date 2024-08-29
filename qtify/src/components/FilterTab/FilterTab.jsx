import styles from "./FilterTab.module.css";
import React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function FilterTab({
  tabLables,
  tabData,
  selectedFilter,
  setSelectedFilter,
}) {
  const handleChange = (event, newValue) => {
    setSelectedFilter(newValue);
  };
  console.log(tabData);
  return (
    <Box>
      <div className={styles.tabsBox}>
        <Tabs
          value={selectedFilter}
          onChange={handleChange}
          aria-label="basic tabs example"
          className={styles.tabs}
          TabIndicatorProps={{
            style: {
              backgroundColor: "var(--color-primary)",
            },
          }}
        >
          {tabLables.map((tab, index) => {
            console.log(tab.label, index);
            return (
              <Tab
                key={index}
                label={tab.label}
                {...a11yProps(index)}
                className={styles.tab}
              />
            );
          })}
        </Tabs>
      </div>
      {tabData.map((ele, index) => (
        <CustomTabPanel value={selectedFilter} index={index}>
          {ele}
        </CustomTabPanel>
      ))}
    </Box>
  );
}
