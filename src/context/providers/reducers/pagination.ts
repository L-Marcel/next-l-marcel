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

  static updateLimit(min: number, max: number) {
    return {
      type: PaginationAction.UPDATE_LIMIT,
      payload: {
        max,
        min
      }
    };
  }

  static nextPage() {
    return {
      type: PaginationAction.NEXT_PAGE
    };
  }

  static lastPage() {
    return {
      type: PaginationAction.LAST_PAGE
    };
  }

  static previousPage() {
    return {
      type: PaginationAction.PREVIOUS_PAGE
    };
  }
  
  static firstPage() {
    return {
      type: PaginationAction.FIRST_PAGE
    };
  }
}