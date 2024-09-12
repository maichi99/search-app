import React, { useState, useCallback } from "react";
import "./SideBar.scss";
import { Button } from "@mui/material";
import { FilterCategory, filterData, filterDataDefault } from "./data";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { resetData, searchData } from "../../store/search/searchSlice";
import SelectFilter from "./selectFilter";
import SliderFilter from "./sliderFilter";
import SearchInput from "./searchInput";
import { SelectValue } from "./selectFilter/SelectFilter";
import ClearIcon from "@mui/icons-material/Clear";
import debounce from "../../utils";

export type InformationType = {
  [key: string]: string;
};

const SideBar: React.FC = () => {
  const { originalData } = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] =
    useState<InformationType>(filterDataDefault);
  const [priceRange, setPriceRange] = useState<number[]>([0.01, 200]);
  const [refreshKey, setRefreshKey] = useState<number>(0);

  // Handle changes in SelectFilter dropdowns
  const handleSearchFilter = useCallback(({ category, value }: SelectValue) => {
    setSearchValue((prev) => ({ ...prev, [category]: value }));
  }, []);

  // Handle changes in the SliderFilter range
  const handleRangeChange = useCallback((range: number[]) => {
    setPriceRange(range);
  }, []);

  // Get filtered and sorted data based on selected filters
  const getFilteredAndSortedData = useCallback(() => {
    let data = originalData;

    const [min, max] = priceRange;
    data = data.filter((item) => item.price >= min && item.price <= max);

    // Apply sorting based on search values
    if (searchValue?.price || searchValue?.time) {
      data = data.slice().sort((a, b) => {
        if (searchValue?.price) {
          if (searchValue.price === "LOW_TO_HIGH") return a.price - b.price;
          if (searchValue.price === "HIGH_TO_LOW") return b.price - a.price;
        }
        if (searchValue?.time) {
          if (searchValue.time === "LATEST")
            return b.time.getTime() - a.time.getTime();
          if (searchValue.time === "OLDEST")
            return a.time.getTime() - b.time.getTime();
        }
        return 0; // Default case if no criteria are set
      });
    }

    // Filter by tier, theme, and time
    return data.filter((item) => {
      const matchesTier = searchValue?.tier
        ? item.tier.toLowerCase() === searchValue.tier.toLowerCase()
        : true;
      const matchesTheme = searchValue?.theme
        ? item.theme.toLowerCase() === searchValue.theme.toLowerCase()
        : true;
      return matchesTier && matchesTheme;
    });
  }, [originalData, priceRange, searchValue]);

  // Filter data based on query
  const filterDataByQuery = useCallback(
    (query: string) => {
      return getFilteredAndSortedData().filter((item) =>
        item.theme.toLowerCase().includes(query.toLowerCase())
      );
    },
    [getFilteredAndSortedData]
  );

  // Debounced function to handle quick search input
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleQuickSearchDebounced = useCallback(
    debounce((query: string) => {
      dispatch(searchData(filterDataByQuery(query)));
    }, 300),
    [dispatch, filterDataByQuery]
  );

  // Handle the main search button click
  const handleOnClick = () => {
    dispatch(searchData(getFilteredAndSortedData()));
  };

  const handleRefresh = () => {
    dispatch(resetData());
    setSearchValue(filterDataDefault);
    setPriceRange([0.01, 200]);
    setRefreshKey((prev) => prev + 1);
  };

  // Handle the refresh button click
  const handleQuickSearch = (query: string) => {
    handleQuickSearchDebounced(query);
  };

  return (
    <div className="sidebar-container">
      <SearchInput onSearch={handleQuickSearch} />
      <SliderFilter onRangeChange={handleRangeChange} />
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
        <Button
          className="search__refresh"
          onClick={handleRefresh}
          startIcon={<ClearIcon className="search__refresh-icon" />}
        >
          Reset Filter
        </Button>
        <Button className="search__button" onClick={handleOnClick}>
          Search
        </Button>
      </div>
    </div>
  );
};

export default SideBar;
