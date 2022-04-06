describe("test get goofy app", () => {
  it("should display Welcome msg", () => {
    cy.visit("http://localhost:3000");
    cy.contains("Welcome to goofy giphy!");
  });
  it("should display 50 images initially", () => {
    cy.visit("http://localhost:3000");
    cy.get("img").should("have.length", 50);
  });

  it("should display popup with gif image on clicking gif", () => {
    cy.visit("http://localhost:3000");
    cy.get("img")
      .first()
      .click();
    cy.get(".popup-box").should("be.visible");
    cy.get(".giphy-img").should("exist");
  });

  it("should close popup on clicking close icon", () => {
    cy.visit("http://localhost:3000");
    cy.get("img")
      .first()
      .click();
    cy.get(".close-icon").click();
    cy.get(".popup-box").should("not.exist");
  });

  it("should get another 50 new gifs on scrolling window to bottom", () => {
    cy.visit("http://localhost:3000");
    cy.scrollTo("bottom");
    cy.get("img").should("have.length", 100);
  });
});
