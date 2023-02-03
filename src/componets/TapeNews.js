import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { newsRequest } from "../slice/index";
import News from "./News";

export default function TapeNews() {
  const { items, lastId, newsLoad, loading } = useSelector(
    (state) => state.news
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(newsRequest(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(items, lastId, newsLoad);
  return (
    <div className="containier">
      <div className="news">
        {items.map((item) => (
          <News key={item.id} news={item} />
        ))}
        {newsLoad && (
          <button
            onClick={() => {
              dispatch(newsRequest(lastId));
            }}
          >
            {loading ? "Загрузка" : "К предыдущим новостям"}
          </button>
        )}
      </div>
    </div>
  );
}
