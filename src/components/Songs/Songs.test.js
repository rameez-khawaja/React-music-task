/**
* @jest-environment jsdom 
*/

import { screen, render} from '@testing-library/react';


import Songs from '.';

describe("Songs", () => {

    beforeEach(() => {
        render(<Songs name="Gasolina" releaseDate="2010"/>);
    })

    test("It displays the song name with the release date in brackets", () =>{

        const listitem = screen.getByRole("listitem");

        expect(listitem).toBeInTheDocument();
        expect(listitem.textContent).toEqual("Gasolina (2010)")
    })
})
