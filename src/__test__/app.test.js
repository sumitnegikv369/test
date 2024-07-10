/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react';
import App, { MyContext } from '../App';
import UserComp from '../components/UserComponent';

describe('App Component', () => {
  it('renders UserComponent with initial context value', () => {
    render(<App />);
    
    const headingElement = screen.getByText(/Sumit/i);
    const ageElement = screen.getByText(/25/i);
    
    expect(headingElement).toBeInTheDocument();
    expect(ageElement).toBeInTheDocument();
  });

  it('changes username on button click', () => {
    render(<App />);
    
    const buttonElement = screen.getByText(/Change Name/i);
    fireEvent.click(buttonElement);
    const newHeadingElement = screen.getByText(/kavi/i);
    
    expect(newHeadingElement).toBeInTheDocument();
  });
  
  it('should not change username on button click if not clicked', () => {
    render(<App />);
    
    const headingElement = screen.getByText(/Sumit/i);
    
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).not.toHaveTextContent(/kavi/i);
  });
});

describe("UserComponent", ()=>{
    it('should renders UserComp with provided context value and prop', () => {
        const contextValue = { name: 'Sumit' };
        
        render(
          <MyContext.Provider value={contextValue}>
            <UserComp age="25" />
          </MyContext.Provider>
        );
        const headingElement = screen.getByText(/Sumit/i);
        const ageElement = screen.getByText(/25/i);
        
        expect(headingElement).toBeInTheDocument();
        expect(ageElement).toBeInTheDocument();
      });
      
    it('should updates username when context value changes', () => {
        const initialContextValue = { name: 'Sumit' };
        const updatedContextValue = { name: 'Saurav' };
        const { rerender } = render(
          <MyContext.Provider value={initialContextValue}>
            <UserComp age="30" />
          </MyContext.Provider>
        );
    
        rerender(
          <MyContext.Provider value={updatedContextValue}>
            <UserComp age="30" />
          </MyContext.Provider>
        );
        const updatedHeadingElement = screen.getByText(/Saurav/i);
        
        expect(updatedHeadingElement).toBeInTheDocument();
      });


  it('changes username on button click', () => {
    const contextValue = { name: 'Sumit' };

    render(
      <MyContext.Provider value={contextValue}>
        <UserComp age="25" />
      </MyContext.Provider>
    );

    const buttonElement = screen.getByText(/Change Name/i);
    fireEvent.click(buttonElement);

    const newHeadingElement = screen.getByText(/kavi/i);
    expect(newHeadingElement).toBeInTheDocument();
  });

  it('handles null context value gracefully', () => {
    const contextValue = { name: null };

    render(
      <MyContext.Provider value={contextValue}>
        <UserComp age="25" />
      </MyContext.Provider>
    );

    const headingElement = screen.getByText('-');
    expect(headingElement).toBeInTheDocument();
  });
})