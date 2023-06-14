const Sort = ({setSort, setFilter}) => {
    return ( 
        <>
            <h5>Sort</h5>
            <div>
                <label htmlFor="search"></label>
                <input type="text" name="search" id="search" onChange={(e) => setFilter(e.target.value)}/>
                <button onClick={() => setSort(() => (a, b) => b.year - a.year)}>Sort by Date Ascending</button>
                <button onClick={() => setSort(() => (a, b) => a.year - b.year)}>Sort by Date Descending</button>
                <button onClick={() => setSort(() => (a, b) => b.rate - a.rate)}>Best Rate</button>
                <button onClick={() => setSort(() => (a, b) => a.title.toUpperCase() > b.title.toUpperCase()? -1:1)}>A-Z</button>
                <button onClick={() => setSort(() => (a, b) => b.title.toUpperCase() > a.title.toUpperCase()? -1:1)}>Z-A</button>
            </div>
        </>
     );
}
 
export default Sort;