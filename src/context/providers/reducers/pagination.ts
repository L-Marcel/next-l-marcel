import { Dispatch } from "react";
import { PaginationType } from "../SearchProvider";

export enum PaginationAction {
  UPDATE_LIMIT = "UPDATE_LIMIT",
  NEXT_PAGE = "NEXT_PAGE",
  PREVIOUS_PAGE = "PREVIOUS_PAGE",
  LAST_PAGE = "LAST_PAGE",
  FIRST_PAGE = "FIRST_PAGE "
}

export type PaginationActionPayload = {
  max: number;
  min: number;
};

export interface PaginationReducerAction {
  type: PaginationAction;
  payload?: PaginationActionPayload;
}

export class Pagination {
  static reducer(pagination: PaginationType, action: PaginationReducerAction) {
    const { min, max, page } = pagination;
  
    switch (action.type) {
    case PaginationAction.UPDATE_LIMIT: {
      if(!action.payload) {
        return pagination;
      }
  
      const { min: newMin, max: newMax } = action.payload;
      return {
        min: newMin,
        max: newMax,
        page: 
          page > newMax? newMax:
            page < newMin? newMin:
              page
      };
    }
    case PaginationAction.NEXT_PAGE: {
      const nextPage = page + 1;
  
      return {
        min,
        max,
        page: 
          page >= max? max:
            nextPage
      };
    }
    case PaginationAction.LAST_PAGE: {
      return {
        min,
        max,
        page: max
      };
    }
    case PaginationAction.PREVIOUS_PAGE: {
      const previousPage = page - 1;
  
      return {
        min,
        max,
        page: 
          page <= min? min:
            previousPage
      };
    }
    case PaginationAction.FIRST_PAGE: {
      return {
        min,
        max,
        page: min
      };
    }
    default:   
      return pagination;
    }
  }

  static updateLimit(dispatch: Dispatch<PaginationReducerAction>, min: number, max: number) {
    dispatch({
      type: PaginationAction.UPDATE_LIMIT,
      payload: {
        max,
        min
      }
    });
  }

  static nextPage(dispatch: Dispatch<PaginationReducerAction>) {
    return () => dispatch({
      type: PaginationAction.NEXT_PAGE
    });
  }
  static lastPage(dispatch: Dispatch<PaginationReducerAction>) {
    return () => dispatch({
      type: PaginationAction.LAST_PAGE
    });
  }
  static previousPage(dispatch: Dispatch<PaginationReducerAction>) {
    return () => dispatch({
      type: PaginationAction.PREVIOUS_PAGE
    });
  }
  static firstPage(dispatch: Dispatch<PaginationReducerAction>) {
    return () => dispatch({
      type: PaginationAction.FIRST_PAGE
    });
  }
}