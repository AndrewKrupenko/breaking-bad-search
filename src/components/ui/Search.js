import {useState} from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');
  const onChange = (searchedValue) => {
    setText(searchedValue);
    getQuery(searchedValue);
  }

  return (
    <section className="search">
      <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            className="form-control"
            placeholder="Search Characters"
            autoFocus
            value={text}
            onChange={(e) => onChange(e.target.value)}
          />
      </form>
    </section>
  );
};

export default Search;
