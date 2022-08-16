import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';


describe('Pruebas en 08-imp-exp', () => {

    test('Debe retornar un heroe por id', () => {

        const id = 1;
        const heroe = getHeroeById(id);

        expect(heroe).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });

    });

    test('Debe retornar undefined', () => {

        const id = 100;
        const heroe = getHeroeById(id);

        expect(heroe).toBeFalsy();

    });

    test('Debe retornar un arreglo de heroes por owner', () => {

        const owner = 'DC';
        const heroeOwner = getHeroesByOwner(owner);
        // console.log(heroeOwner);

        expect(heroeOwner.length).toBe(3);

        expect(heroeOwner).toEqual( heroes.filter((heroe) => heroe.owner === owner) );
        

    });


});
