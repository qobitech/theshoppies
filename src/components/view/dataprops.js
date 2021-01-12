
function API(url){
    return fetch(url,{
        method : "GET",
    }).then(resp => resp.json())  
}

export const fetchstatus = {
    DATA_LOADING : false,
    DATA : [],
    DATA_ERROR : []
}

const result = 10;

const numberofPages = ( totalresult, pagenum, first, last ) => {
    if( totalresult % result === 0 ){
        if( pagenum === ( totalresult / result ) ){
            last( true );
        }else{
            if( pagenum === 1 ){
                first( true ); last( false );
            }else{
                first( false ); last( false );
            }
        }
        return "Page " + pagenum + " of " + ( totalresult / result )
    }else{
        if( pagenum === ( Math.floor( totalresult / result ) + 1 ) ){
            last( true );
        }else{
            if( pagenum === 1 ){
                first( true ); last( false );
            }else{
                first( false ); last( false );
            }
        }
        return "Page " + pagenum + " of " + ( Math.floor( totalresult / result ) + 1 )
    }
}

export const getMovieData = ( movies, handleData, handleLoading, handleError, getNumberofPages, pagenum, first, last ) => {
    let dmovies = movies.trim(); dmovies  = movies.replace(/\s/g, '+')
    let api = pagenum === undefined ? 
        `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie&plot=full&s=${dmovies}`
        :
        `https://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_OMDB_API_KEY}&type=movie&plot=full&s=${dmovies}&page=${pagenum}`
    handleLoading( true )
    API( api )
    .then( res => {
        handleLoading( false )
        handleData( res.Search );
        getNumberofPages( numberofPages( res.totalResults, pagenum, first, last ) )
    } )
    .catch(err => {
        handleLoading( false )
        handleError( err.message )
    })
}
