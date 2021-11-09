import React, {useContext} from 'react'
import { SearchCityContext } from '../contexts/SearchCityContext'
import { StyledSearchPage, ForecastContainer, Weather, Degree, Country, Back } from './styles/SearchPage.styled'
import { Loader } from './styles/TodayForecast.styled'
import Searchbar from './ui/Searchbar'
import moment from 'moment'
import {useHistory} from 'react-router';
import Spinner from './ui/Spinner'
import {IoIosArrowBack} from 'react-icons/io';

const SearchPage = () => {
    const {search, isLoading} = useContext(SearchCityContext)
    const history = useHistory();
    return (
        <StyledSearchPage>
            <Searchbar />

            <Back onClick={()=> history.push('/')}> <IoIosArrowBack /> </Back>

            {isLoading? (
                <Loader> <Spinner /> </Loader>
            ) : (
            <ForecastContainer>
                <Weather>
                    <img src={`http://openweathermap.org/img/wn/${search.weather[0].icon}@2x.png`} alt='weather icon' />
                    <p> Today <br /> <span> {moment(search.dt).format('dddd Do MMMM')} </span> </p>
                </Weather>
                <Degree>{search.main.temp}&deg;c</Degree>
                <Country>{search.name}, {search.sys.country} . {moment(search.dt).format('LT')}</Country>
            </ForecastContainer>
            )}
            
        </StyledSearchPage>
    )
}

export default SearchPage
