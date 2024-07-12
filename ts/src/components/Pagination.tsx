import usePageStore from "@zustand/pageStore";

const Pagination = () => {
  const { currentPage, lastPage } = usePageStore();
  let renderPages;

  if (currentPage === 1) {
    renderPages = (
      <div>
        <ul className="flex justify-center gap-3 m-4">
          <li>
            <a
              href={`/info?page=${currentPage}`}
              className="text-bold text-blue-700 pointer-events-none"
            >
              {currentPage}
            </a>
          </li>
          {Array(4)
            .fill(null)
            .map((el, idx) => {
              {
                return (
                  <li key={idx}>
                    <a href={`/info?page=${currentPage + idx + 1}`}>
                      {currentPage + idx + 1}
                    </a>
                  </li>
                );
              }
            })}
        </ul>
      </div>
    );
  } else if (currentPage === 2) {
    renderPages = (
      <div>
        <ul className="flex justify-center gap-3 m-4">
          <li>
            <a href={`/info?page=${currentPage - 1}`}>{currentPage - 1}</a>
          </li>
          <li>
            <a
              href={`/info?page=${currentPage}`}
              className="text-bold text-blue-700 pointer-events-none"
            >
              {currentPage}
            </a>
          </li>
          {Array(3)
            .fill(null)
            .map((el, idx) => {
              {
                return (
                  <li key={idx}>
                    <a href={`/info?page=${currentPage + idx + 1}`}>
                      {currentPage + idx + 1}
                    </a>
                  </li>
                );
              }
            })}
        </ul>
      </div>
    );
  } else if (currentPage === lastPage - 1) {
    renderPages = (
      <div>
        <ul className="flex justify-center gap-3 m-4">
          {Array(3)
            .fill(null)
            .map((el, idx) => {
              {
                return (
                  <li key={idx}>
                    <a href={`/info?page=${currentPage + idx - 3}`}>
                      {currentPage + idx - 3}
                    </a>
                  </li>
                );
              }
            })}
          <li>
            <a
              href={`/info?page=${currentPage}`}
              className="text-bold text-blue-700 pointer-events-none"
            >
              {currentPage}
            </a>
          </li>
          <li>
            <a href={`/info?page=${lastPage}`}>{lastPage}</a>
          </li>
        </ul>
      </div>
    );
  } else if (currentPage === lastPage && currentPage && lastPage) {
    renderPages = (
      <div>
        <ul className="flex justify-center gap-3 m-4">
          {Array(4)
            .fill(null)
            .map((el, idx) => {
              {
                return (
                  <li key={idx}>
                    <a href={`/info?page=${currentPage + idx - 4}`}>
                      {currentPage + idx - 4}
                    </a>
                  </li>
                );
              }
            })}
          <li>
            <a
              href={`/info?page=${lastPage}`}
              className="text-bold text-blue-700 pointer-events-none"
            >
              {lastPage}
            </a>
          </li>
        </ul>
      </div>
    );
  } else if (currentPage && lastPage) {
    renderPages = (
      <div>
        <ul className="flex justify-center gap-3 m-4">
          <li>
            <a href={`/info?page=${currentPage - 2}`}>{currentPage - 2}</a>
          </li>
          <li>
            <a href={`/info?page=${currentPage - 1}`}>{currentPage - 1}</a>
          </li>
          <li>
            <a
              href={`/info?page=${currentPage}`}
              className="text-bold text-blue-700 pointer-events-none"
            >
              {currentPage}
            </a>
          </li>
          <li>
            <a href={`/info?page=${currentPage + 1}`}>{currentPage + 1}</a>
          </li>
          <li>
            <a href={`/info?page=${currentPage + 2}`}>{currentPage + 2}</a>
          </li>
        </ul>
      </div>
    );
  }

  return renderPages;
};

export default Pagination;
