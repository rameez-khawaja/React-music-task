/**
* @jest-environment jsdom 
*/

import { screen, render} from '@testing-library/react';


import Details from '.';

describe("Details", () => {

    beforeEach(() => {
        render(<Details/>);
    })

    test("It displays a heading with appropiate text", () =>{

        const heading = screen.getByRole("heading");

        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toEqual("Pitbull")
    })
    test("It displays a heading2 with appropiate text", () =>{

        const heading = screen.getByRole("heading2");

        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toEqual("Pop")
    })
    test("It displays a paragraph with appropiate text", () =>{

        const heading = screen.getByRole("paragraph");

        expect(heading).toBeInTheDocument();
        expect(heading.textContent).toEqual("Bald singer")
    })
})
