
function API(url:string){
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

type SetState = (value: React.SetStateAction<boolean>) => void
type dataFunction = (data : any)=> void

const numberofPages = ( totalresult : number, pagenum: number, first: SetState, last: SetState ) =>{
    if( totalresult % result === 0 ){
        if( pagenum === ( totalresult / result ) ){    
            if( pagenum !== 1 ){
                first( false ); last( true );
            }else{
                first( true ); last( true );
            }
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
            if( pagenum !== 1 ){
                first( false ); last( true );
            }else{
                first( true ); last( true );
            }
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

export const getMovieData = ( movies : string, handleData:dataFunction, handleLoading:dataFunction, handleError:dataFunction, getNumberofPages:dataFunction, pagenum: number, first:SetState, last:SetState ) => {
    let dmovies = movies.trim(); dmovies  = movies.replace(/\s/g, '+')
    let api = pagenum === 0 ? 
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
