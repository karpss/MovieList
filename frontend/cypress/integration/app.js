describe("App", () => {
  beforeEach(() => {

    cy.visit("http://localhost:3000");
  });

  it('renders the Navbar component', () => {
    cy.get('.App').should('exist');
    cy.get('.MuiAppBar-root').should('exist');
  });

  it('renders the SearchBar component', () => {
    cy.get('.MuiTextField-root').should('exist');
  });

  it('renders the Fab component', () => {
    cy.get('.MuiFab-root').should('exist');
  });

  it('Should load the correct page for movie details', () => {
    cy.visit('http://localhost:3000/movie/Earth');

    cy.contains('Earth');
    cy.get('[data-testid=MovieDetails]').click();
    cy.contains('15-09-2003');
  });

  it('navigates to AddMovie page when the add button is clicked', () => {
    cy.get('.MuiFab-root').click();
    cy.location().should((loc) => {
      expect(loc.pathname).to.eq('/movie/addMovie');
    });

  });
  
});

describe('Navbar', () => {

  beforeEach(() => {

    cy.visit("http://localhost:3000");
  });

  it('renders the Search Icon Toggle Button', () => {
    cy.get('.MuiIconButton-root').should('exist');
  });

  it('opens search input once the search icon is clicked', () => {
    cy.get('.MuiIconButton-root').click();
    cy.get('[data-testid=SearchBar]').type('Earth');
   
  });

  it('clears the search input', () => {
    cy.get('.MuiIconButton-root').click();
    cy.get('[data-testid=SearchBar]').type('Uranus');
    cy.get('[data-testid=clear-button]').click();
   
  });

  
 
});

describe('Add Movie', () => {

    it('Interacting with input fields',() => {
      cy.visit('http://localhost:3000/movie/addMovie');
      cy.get('#movieName').type('Total Recall');
      cy.get('#releaseDate').type('1994-01-22');
      cy.get('form button').click();
   })
  
  
  
  
  
  });








