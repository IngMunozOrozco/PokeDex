
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';

const Paginate = ({ pokemonsPerPage, totalPokemons, setCurrentPage, totalPokemonsType, isPaginated }) => {
    const pageNumbers = [];
    const navigate = useNavigate()
    const pageCountPokemonType = Math.ceil(totalPokemonsType / pokemonsPerPage)
    const pageCountPokemon = Math.ceil(totalPokemons / pokemonsPerPage)

    if(isPaginated){
       
        for(let i=1; i<= pageCountPokemonType; i++) {
            pageNumbers.push(i);
        }
    } else {
        for(let i=1; i<= pageCountPokemon; i++) {
            pageNumbers.push(i);
        }
}
const handlePageClick = (event) => {
    
    if(isPaginated){
    const newOffset = event.selected + 1
    setCurrentPage(newOffset); 
  } else {
    const newOffsetTwo = event.selected + 1
    setCurrentPage(newOffsetTwo);
  }
}

    return(
        <>
    
                <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageCount={pageNumbers.length }
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageClassName='pagination__num'
                nextClassName='pagination_next'
                previousClassName='pagination_previous'
                activeClassName='active'
                />
       
        </>
    )
}
export default Paginate