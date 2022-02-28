import React from 'react';

function Search() {
  return (
    <div className="search">
      <form action="#">

        <button className="search__button button">
          <svg width="25" height="25" aria-hidden="true">
            <use xlinkHref="#icon-search" />
          </svg>
        </button>

        <div className="search__input">
          <input type="text" id="search" name="search" placeholder="Поиск" />
          <label className="visually-hidden" htmlFor="search">Поиск товара</label>
        </div>

      </form>
    </div>
  );
}

export default Search;
