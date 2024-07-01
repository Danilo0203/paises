import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useMemo } from "react";


export const PaginationContry = ({
  currentPage,
  setCurrentPage,
  rowsPerPage,
  numCountrys
}) => {
  

  const pages = useMemo(() => {
    return Math.ceil(numCountrys / rowsPerPage);
  }, [numCountrys, rowsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationItems = () => {
    const paginationItems = [];
    const maxVisiblePages = 4;
    const ellipsisThreshold = 2;

    if (pages <= maxVisiblePages + 2) {
      for (let i = 1; i <= pages; i++) {
        paginationItems.push(
          <PaginationItem key={i}>
            <PaginationLink
              href="#"
              isActive={i === currentPage}
              onClick={() => handlePageChange(i)}
            >
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      }
    } else {
      if (currentPage <= ellipsisThreshold + 1) {
        for (let i = 1; i <= ellipsisThreshold + 2; i++) {
          paginationItems.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={i === currentPage}
                onClick={() => handlePageChange(i)}
              >
                {i}
              </PaginationLink>
            </PaginationItem>,
          );
        }
        paginationItems.push(<PaginationEllipsis key="ellipsis1" />);
        paginationItems.push(
          <PaginationItem key={pages}>
            <PaginationLink
              href="#"
              onClick={() => handlePageChange(pages)}
              className="pl-7 pr-4"
            >
              {pages}
            </PaginationLink>
          </PaginationItem>,
        );
      } else if (currentPage >= pages - ellipsisThreshold) {
        paginationItems.push(
          <PaginationItem key={1}>
            <PaginationLink href="#" onClick={() => handlePageChange(1)}>
              1
            </PaginationLink>
          </PaginationItem>,
        );
        paginationItems.push(<PaginationEllipsis key="ellipsis1" />);
        for (let i = pages - ellipsisThreshold - 1; i <= pages; i++) {
          paginationItems.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={i === currentPage}
                onClick={() => handlePageChange(i)}
              >
                {i}
              </PaginationLink>
            </PaginationItem>,
          );
        }
      } else {
        paginationItems.push(
          <PaginationItem key={1}>
            <PaginationLink
              href="#"
              onClick={() => handlePageChange(1)}
              size="pagination"
            >
              1
            </PaginationLink>
          </PaginationItem>,
        );
        paginationItems.push(<PaginationEllipsis key="ellipsis1" />);
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          paginationItems.push(
            <PaginationItem key={i}>
              <PaginationLink
                href="#"
                isActive={i === currentPage}
                onClick={() => handlePageChange(i)}
              >
                {i}
              </PaginationLink>
            </PaginationItem>,
          );
        }
        paginationItems.push(<PaginationEllipsis key="ellipsis2" />);
        paginationItems.push(
          <PaginationItem key={pages}>
            <PaginationLink
              href="#"
              onClick={() => handlePageChange(pages)}
              size="pagination"
              className="pl-7 pr-4"
            >
              {pages}
            </PaginationLink>
          </PaginationItem>,
        );
      }
    }

    return paginationItems;
  };

  return (
    <Pagination>
      <PaginationContent className="gap-0">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() =>
              handlePageChange(currentPage > 1 ? currentPage - 1 : 1)
            }
          />
        </PaginationItem>

        {renderPaginationItems()}

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() =>
              handlePageChange(currentPage < pages ? currentPage + 1 : pages)
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
