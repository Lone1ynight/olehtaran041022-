import React from 'react';
import {render} from "@testing-library/react";


describe('tests', () => {
  test('button', () => {
    const {getByRole} = render(<button>КРУТИТЬ БАРАБАН</button>)
    expect(getByRole('button')).toHaveTextContent('КРУТИТЬ БАРАБАН')
  });

})

