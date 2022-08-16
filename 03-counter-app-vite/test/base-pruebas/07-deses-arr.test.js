import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr';


describe('Pruebas en 07-deses-arr', () => {

    test('retornaArreglo() retorna un arreglo', () => {

        const [ letters, numbers ] = retornaArreglo();

        // expect(typeof letters).toBe( 'string' )
        // expect(typeof numbers).toBe( 'number' )
        
        expect(letters).toEqual( expect.any(String) );
        expect(numbers).toEqual( expect.any(Number) )
        
    });
    
    
});
