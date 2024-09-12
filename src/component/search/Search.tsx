import React, { useCallback, useEffect, useState } from "react";
import "./Search.scss";
import CardInformation from "./cardInformation";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { Button, CircularProgress } from "@mui/material";
import { fetchData } from "../../store/search/searchSlice";
import MultipleChips from "./chip/MultipleChips";
import { chipCategoryData } from "../sidebar/data";

const Search: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error, originalData, isFiltered } = useSelector(
    (state: RootState) => state.search
  );
  const [visibleCount, setVisibleCount] = useState(4);
  const [currentData, setCurrentData] = useState(originalData);
  const [isLoadingNewData, setIsLoadingNewData] = useState(false);

  const handleViewMore = useCallback(() => {
    setVisibleCount((prevCount) => prevCount + 4);
  }, []);

  useEffect(() => {
    // Fetch data when component did mount
    dispatch(fetchData());

    // Auto refresh data every 60 seconds
    const intervalId = setInterval(() => {
      console.log("REFRESHING DATA ...");
      setIsLoadingNewData(true);
      dispatch(fetchData());
    }, 60000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  useEffect(() => {
    if (!loading && isLoadingNewData) {
      setCurrentData(data);
      setIsLoadingNewData(false);
    }
  }, [data, loading, isLoadingNewData]);

  if (loading && !currentData.length) {
    return (
      <div className="search-container loading">
        <CircularProgress />
        <p>Loading data ...</p>
      </div>
    );
  }

  if (error) {
    return <div>Error loading data: {error}</div>;
  }
  const itemsToShow = isFiltered
    ? data.slice(0, visibleCount)
    : originalData.slice(0, visibleCount);

  return (
    <div className="search-container">
      <div className="search-container__button-category">
        <MultipleChips chips={chipCategoryData} />
      </div>
      <div className="search-container__content">
        {itemsToShow.map((item, index) => (
          <CardInformation key={index} {...item} />
        ))}
      </div>
      <div className="search-container__button">
        {visibleCount < data.length && (
          <Button
            onClick={handleViewMore}
            className="search-container__button-view"
          >
            View More
          </Button>
        )}
      </div>
    </div>
  );
};
export default Search;
