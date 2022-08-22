package com.valorant.valtracker.valorant;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ValorantRepository extends CrudRepository<Valorant, Long> {
    //This is where data is CRUD to database

    @Override
    <S extends Valorant> S save(S entity);

    @Override
    <S extends Valorant> Iterable<S> saveAll(Iterable<S> entities);

    @Override
    Optional<Valorant> findById(Long aLong);

    @Override
    boolean existsById(Long aLong);

    @Override
    Iterable<Valorant> findAll();

    @Override
    Iterable<Valorant> findAllById(Iterable<Long> longs);

    @Override
    long count();

    @Override
    void deleteById(Long aLong);

    @Override
    void delete(Valorant entity);

    @Override
    void deleteAllById(Iterable<? extends Long> longs);

    @Override
    void deleteAll(Iterable<? extends Valorant> entities);

    @Override
    void deleteAll();
}