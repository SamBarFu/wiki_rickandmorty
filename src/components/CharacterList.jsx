import React, { useState, useCallback, useRef } from 'react';
import { Character } from '@/components/Character';
import { Loader } from '../components/Loader';
import { fetcherCharacter } from "@services/Character.services";

export const CharacterList = ({ characters, hasMore, mutate, loading }) => {

  const [loadingMore, setLoadingMore] = useState();
  const observer = useRef();

  const lastElementRef = useCallback(node => {

    if (loading) return;

    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setLoadingMore(true);
        if (hasMore) {
          setTimeout(() => {
            mutate(fetcherCharacter, characters.info.next, {
              append: true,
              currentData: characters
            });
          }, 2000);
        }
        setTimeout(() => {
          setLoadingMore(false);
        }, 2000);
      }
    }, []);

    if (node) observer.current.observe(node)

  }, [loading, characters, mutate, hasMore]);

  return (
    <>
      <div className='characters columns-4'>
        {
          (characters && characters?.results?.length) >= 1 ? characters.results.map((character, index) => {
            if (characters.results.length === index + 1) {
              return (
                <Character ref={lastElementRef} key={character.id} character={character} />
              )
            } else {
              return (
                <Character key={character.id} character={character} />
              )
            }
          }) : ''
        }
        {hasMore ? <Loader loading={loadingMore} /> : ''}
      </div>
    </>
  )
}
