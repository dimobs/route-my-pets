const baseUrl = 'http://softuni-server-dimo.herokuapp.com/jsonstore/'

export const getAll = async () => {
    let response = await fetch(`${baseUrl}/pets`);
let pets = await response.json();
let result = Object.values(pets)
    return result;

}