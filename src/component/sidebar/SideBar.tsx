import React, { useState, useCallback } from "react";
import "./SideBar.scss";
import { Button } from "@mui/material";
import { FilterCategory, filterData, filterDataDefault } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { resetData, searchData } from "../../store/search/searchSlice";
import SelectFilter from "./selectFilter";
import { SelectValue } from "./selectFilter/SelectFilter";
import { CardInformationProps } from "../search/cardInformation/CardInfomation";

export type InformationType = {
  [key: string]: string;
};

const SideBar: React.FC = () => {
  const { originalData } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] =
    useState<InformationType>(filterDataDefault);
  const [refreshKey, setRefreshKey] = useState<number>(0);

  const handleSearchFilter = useCallback(({ category, value }: SelectValue) => {
    setSearchValue((prev) => ({
      ...prev,
      [category]: value,
    }));
  }, []);

  const getSortedData = useCallback(
    (data: CardInformationProps[], sortOrder?: string) => {
      if (sortOrder === "LOW_TO_HIGH") {
        return data.slice().sort((a, b) => a.price - b.price);
      }
      if (sortOrder === "HIGH_TO_LOW") {
        return data.slice().sort((a, b) => b.price - a.price);
      }
      return data;
    },
    []
  );

  const handleOnClick = () => {
    const sortedData = getSortedData(originalData, searchValue?.price);
    const filteredData = sortedData.filter((item) => {
      const matchesTier = searchValue?.tier
        ? item.tier.toLowerCase() === searchValue.tier.toLowerCase()
        : true;

      const matchesTheme = searchValue?.theme
        ? item.theme.toLowerCase() === searchValue.theme.toLowerCase()
        : true;

      return matchesTier && matchesTheme;
    });
    dispatch(searchData(filteredData));
  };

  const handleRefresh = () => {
    dispatch(resetData());
    setSearchValue(filterDataDefault);
    setRefreshKey((prev) => prev + 1);
  };
  return (
    <div className="sidebar-container">
      {Object.keys(filterData).map((category) => {
        const key = category as FilterCategory;
        return (
          <SelectFilter
            key={key}
            options={filterData[key]}
            category={key}
            defaultValue={filterDataDefault[key]}
            handleSearchFilter={handleSearchFilter}
            refreshKey={refreshKey}
          />
        );
      })}
      <div className="search">
        <Button className="search__refresh" onClick={handleRefresh}>
          Refresh
        </Button>
        <Button className="search__button" onClick={handleOnClick}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
