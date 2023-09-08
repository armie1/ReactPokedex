import React from "react";

const Pagiantion = (props) => {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className="pagination">
      <button onClick={onLeftClick}>
        <div role="img" aria-label="left">
          👈
        </div>
      </button>
      <div>
        {page} de {totalPages}
      </div>
      <button onClick={onRightClick}>
        <div role="img" aria-label="right">
          👉
        </div>
      </button>
    </div>
  );
};

export default Pagiantion;
