import {useCallback} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import qs from "qs"

const useQueryState = query=>{
    const location = useLocation()
    const navigate = useNavigate()

    const setQuery=useCallback(
        value=>{

            const existingQueries = qs.parse(location.search,{
                ignoreQueryPrefix:true,
            })

            const queryString = qs.stringify(
                {...existingQueries,[query]:value},
                {skipNulls:true}
            )

            navigate(`${location.pathname}?${queryString}`)
        },[navigate,location,query]
    )

    return[
        qs.parse(location.search, { ignoreQueryPrefix: true })[query],
        setQuery,
    ]
}

export default useQueryState;