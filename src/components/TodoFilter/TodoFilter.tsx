/* eslint-disable react/react-in-jsx-scope */
interface Props {
  completeTodoFilter: string,
  setCompleteTodoFilter: (selectTodos: string) => void,
  query: string,
  setQuery: (query: string) => void,
}

export const TodoFilter:React.FC<Props> = ({
  completeTodoFilter,
  setCompleteTodoFilter,
  query,
  setQuery,
}) => {
  return (

    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            name="filterGoods"
            value={completeTodoFilter}
            data-cy="statusSelect"
            onChange={(event) => setCompleteTodoFilter(event.target.value)}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>

      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>

        <span className="icon is-right" style={{ pointerEvents: 'all' }}>
          {query !== '' && (
            // eslint-disable-next-line jsx-a11y/control-has-associated-label
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={() => setQuery('')}
            />
          )}

        </span>
      </p>
    </form>
  );
};
