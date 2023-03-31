import React, { useState, useEffect } from 'react';
import { CharacterList } from "@components/CharacterList"
import { fetcherCharacter, serviceFilterCharacters } from "@services/Character.services";
import { Search } from '@components/Search';
import { ToastContainer, toast } from 'react-toastify';
import useAxios from '@hooks/useAxios';
import { Loader } from '@components/Loader';
import { WrapperError } from '@components/WrapperError';
import Footer from '@components/Footer';
import logo from '@img/rick-and-morty-logo.webp';
import noResultsFound from '@img/summer.png';
import wrong from '@img/rick.png';

export const Home = () => {

    const { data, loading, mutate, error, hasMore, loadMore } = useAxios(fetcherCharacter);
    const [message, setMessage] = useState('');

    const validateEmptyData = () => {
        if (data?.message?.error) {
            if (data?.message?.error === 'There is nothing here') {
                setMessage(
                    <div className='no-results-found'>
                        <img src={wrong} />
                        <p className='message'>No existen personajes con ese nombre</p>
                    </div>
                );
            } else {
                setMessage(
                    <div className='wrong'>
                        <img src={noResultsFound} />
                        <p className='message'>¡Ha ocurrido un error consultando el servicio¡</p>
                    </div>
                );
            }

        }
    }

    useEffect(() => {
        validateEmptyData();
    }, [data]);

    const handleSearch = async (value) => {
        await mutate(serviceFilterCharacters, '', {
            filter: { filter: 'name', value },
        });
    }

    return (
        <div>
            <div className='header-page'>
                <img src={logo} />
                <h1 className='title-page'>Personajes</h1>
            </div>
            <Search handleSearch={handleSearch} placeholder={'Buscar personaje'} />
            <p>{data?.info?.count} resultados</p>
            <WrapperError error={error} message={message}>
                <Loader loading={loading}>
                    <CharacterList characters={data} mutate={mutate} loading={loading} hasMore={hasMore} loadMore={loadMore} />
                </Loader>
            </WrapperError>
            <Footer />
            <ToastContainer />
        </div>
    )
}
