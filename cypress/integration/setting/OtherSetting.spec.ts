describe("Organization Settings", () => {
  beforeEach(function () {
    // login before each test
    cy.login();
    cy.visit("/settings");
  });

  it("should have a settings list", () => {
    cy.get("h5").should("contain", "Settings");
    cy.get('[data-testid="label"]').eq(0).should("contain", "Organisation");
    cy.get("body").should("contain", "Gupshup");
    cy.get("body").should("contain", "Glifproxy");
    cy.get("body").should("contain", "BigQuery");
    cy.get("body").should("contain", "Chatbase");
    cy.get("body").should("contain", "Google Cloud Storage");
  });

  it("should check Gupshup settings", () => {
    cy.get('[data-testid="gupshup"]').find('[data-testid="EditIcon"]').click();
    cy.wait(500);
    cy.get("h5").should("contain", "Edit Settings");
    cy.get("input[name=isActive]").then(($input) => {
      const val = $input.val();
      if (val) {
        cy.get("input[name=api_end_point]")
          .invoke("val")
          .should("not.be.empty");
        cy.get("input[name=app_name]").invoke("val").should("not.be.empty");
        cy.get("input[name=api_key]").invoke("val").should("not.be.empty");
      }
    });
  });

  it("should check Gupshup settings validation", () => {
    cy.get('[data-testid="gupshup"]').find('[data-testid="EditIcon"]').click();
    cy.get("input[name=isActive]").should(($input) => {
      const val = $input.val();
      if (val) {
        cy.get("input[name=api_end_point]").clear();
        cy.get("input[name=app_name]").clear();
        cy.get("input[name=api_key]").clear();
        cy.get('[data-testid="submitActionButton"]').click();
        cy.get("p").should("contain", "API End Point is required.");
        cy.get("p").should("contain", "App Name is required.");
        cy.get("p").should("contain", "API Key is required.");
      }
    });
  });

  it("should check Glifproxy settings", () => {
    cy.get('[data-testid="glifproxy"]')
      .find('[data-testid="EditIcon"]')
      .click();
    cy.wait(500);
    cy.get("h5").should("contain", "Edit Settings");
  });

  it("should check Glifproxy settings validation", () => {
    cy.get('[data-testid="glifproxy"]')
      .find('[data-testid="EditIcon"]')
      .click();
    cy.get("input[name=isActive]").should(($input) => {
      const val = $input.val();
      if (val) {
        cy.get("input[name=api_end_point]").clear();
        cy.get('[data-testid="submitActionButton"]').click();
        cy.get("p").should("contain", "API End Point is required.");
      }
    });
  });

  it("should check BigQuery settings", () => {
    cy.get('[data-testid="bigquery"]').find('[data-testid="EditIcon"]').click();
    cy.wait(500);
    cy.get("h5").should("contain", "Edit Settings");
  });

  it("should check BigQuery settings validation", () => {
    cy.get('[data-testid="bigquery"]').find('[data-testid="EditIcon"]').click();
    cy.get("input[name=isActive]").should(($input) => {
      const val = $input.val();
      if (val) {
        cy.get("input[name=api_end_point]").clear();
        cy.get('[data-testid="submitActionButton"]').click();
        cy.get("p").should("contain", "API End Point is required.");
      }
    });
  });

  it("should check Chatbase settings", () => {
    cy.get('[data-testid="chatbase"]').find('[data-testid="EditIcon"]').click();
    cy.wait(500);
    cy.get("h5").should("contain", "Edit Settings");
  });

  it("should check Google Cloud Storage settings", () => {
    cy.get('[data-testid="google_cloud_storage"]')
      .find('[data-testid="EditIcon"]')
      .click();
    cy.wait(500);
    cy.get("h5").should("contain", "Edit Settings");
  });
});
