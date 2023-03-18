import { useEffect, useReducer, useCallback } from "react";
import debounce from "lodash/debounce";
import { getAgencies } from "./api";

const INTERSECTION_THRESHOLD = 5;
const LOAD_DELAY_MS = 500;
let hasMore = true
const reducer = (state, action) => {
  switch (action.type) {
    case "set": {
      return {
        ...state,
        ...action.payload
      };
    }
    case "onGrabData": {
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.payload.data],
        currentPage: state.currentPage + 1
      };
    }
    case "reset": {
      return {
        ...state,
        loading: false,
        data: [],
        currentPage: 1
      };
    }
    case "end": {
      return {
        data: state.data,
        hasMore:false,
        loading: false
      }
    }

    default:
      return state;
  }
};

const useLazyLoad = ({ triggerRef,slug, city, order }) => {
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    currentPage: 1,
    data: [],
    order: order,
    hasMore: true
  });
  useEffect(() => {
    dispatch({type:'reset'})
  },[order])

  useEffect(() => {
   if (hasMore === false) {
    dispatch({type: "end"})
   }
  },[hasMore])

  const _handleEntry = async (entry) => {
    const boundingRect = entry.boundingClientRect;
    const intersectionRect = entry.intersectionRect;

    if (
      !state.loading &&
      hasMore &&
      entry.isIntersecting &&
      intersectionRect.bottom - boundingRect.bottom <= INTERSECTION_THRESHOLD
    ) {
      dispatch({ type: "set", payload: { loading: true } });
      let data = await getAgencies(slug, city, state.currentPage, order);
      if (data.pages <= state.currentPage) {
        hasMore = false
      }
      data = data.agencies
      dispatch({ type: "onGrabData", payload: { data } });
    }
  };
  const handleEntry = debounce(_handleEntry, LOAD_DELAY_MS);

  const onIntersect = useCallback(
    (entries) => {
      handleEntry(entries[0]);
    },
    [handleEntry]
  );

  useEffect(() => {
    if (triggerRef.current) {
      const container = triggerRef.current;
      const observer = new IntersectionObserver(onIntersect);

      observer.observe(container);

      return () => {
        observer.disconnect();
      };
    }
  }, [triggerRef, onIntersect]);

  return state;
};

export default useLazyLoad;