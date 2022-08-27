import { useWindowSize } from "@react-hook/window-size";
import { MasonryScroller, useContainerPosition, usePositioner, useResizeObserver } from "masonic";
import { useRef } from "react";
import { useFilteredRepositories } from "../../../context/hooks/useFilteredRepositories";
import { usePagination } from "../../../context/hooks/usePagination";
import { RepositoriesListItem } from "./RepositoriesListItem";


export function RepositoriesList() {
  const containerRef = useRef(null);
  const { page } = usePagination();
  const { filteredRepositories } = useFilteredRepositories();

  const baseIndex = page * 12;
  const repositoriesInPage = filteredRepositories.slice(baseIndex, baseIndex + 16);

  const [windowWidth, windowHeight] = useWindowSize();
  const { offset, width } = useContainerPosition(containerRef, [
    windowWidth,
    windowHeight
  ]);

  const positioner = usePositioner(
    { width, columnWidth: 360, columnGutter: 12 },
    [repositoriesInPage]
  );
  
  const resizeObserver = useResizeObserver(positioner);

  return (
    <MasonryScroller
      height={windowHeight}
      offset={offset}
      positioner={positioner}
      containerRef={containerRef}
      resizeObserver={resizeObserver}
      overscanBy={6}
      items={repositoriesInPage}
      render={({ index, data, width }) => (<RepositoriesListItem
        key={index}
        width={width}
        repository={data}
      />)}
    />
  );
}