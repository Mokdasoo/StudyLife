import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', ()=>{
    test('renders Hello World as a text', ()=>{
        //Arrange
        render(<Greeting />);
    
        //Act
        //... nothing
    
        //Assert
        const helloWorldElement = screen.getByText('Hello World', {exact: false});
        expect(helloWorldElement).toBeInTheDocument();
    });
    test("renders It's good to see you! if the button was NOT clicked", () => {
        render(<Greeting />);
        const pTextElement = screen.getByText("It's good to see you!", {exact: false});
        expect(pTextElement).toBeInTheDocument();
    });

    test('renders Changed! if the button was clicked', async () => {
        //Arrange
        render(<Greeting />);

        //Act
        const button = screen.getByRole('button');
        await userEvent.click(button);

        //Assert
        const outputElement = screen.getByText("Changed!", {exact: false});
        expect(outputElement).toBeInTheDocument();
    });

    test('does not render "good to see you" if the button was clicked', async () => {
        //Arrange
        render(<Greeting />);

        //Act
        const button = screen.getByRole('button');
        await userEvent.click(button);

        //Assert
        const outputElement = screen.queryByText("good to see you", {exact: false});
        expect(outputElement).toBeNull();
    });
})

