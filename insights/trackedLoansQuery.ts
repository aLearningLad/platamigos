const trackedLoansQueryExplained: string = `
CREATE TABLE tracked (
  lenderId TEXT NOT NULL,
  lenderName TEXT NOT NULL,
  loanId TEXT NOT NULL,
  interest_rate DECIMAL(3,2),
  date_posted DATE NOT NULL,
  expiry_date DATE NOT NULL,
  purpose TEXT NOT NULL
);
`;
