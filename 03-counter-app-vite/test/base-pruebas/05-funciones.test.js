import { getUser, getUsuarioActivo } from '../../src/base-pruebas/05-funciones';


describe('Pruebas en 05-funciones', () => {

    test('getUser debe retornar un objeto', () => {

        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(testUser);

    });

    test('getUsuarioActivo debe retornar un objeto con parametro', () => {

        const name = 'Jeremy'
        const testUser = {
            uid: 'ABC567',
            username: name
        }
        const usuarioActivo = getUsuarioActivo(name);
        
        expect(testUser).toEqual(usuarioActivo);
        
    });
    

});
