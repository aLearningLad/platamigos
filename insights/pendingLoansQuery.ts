const pendingLoansQueryExplained: string = `
CREATE TABLE pending (
  posterId TEXT NOT NULL,
  loanId TEXT PRIMARY KEY UNIQUE NOT NULL,
  date_applied DATE NOT NULL,
  expiry_date DATE NOT NULL,
  principal DECIMAL(10,2) NOT NULL,
  interest_rate DECIMAL(3,2) NOT NULL,
  purpose TEXT NOT NULL,
  instalment DECIMAL(10,2) NOT NULL,
  total_due DECIMAL(10,2) NOT NULL
);
`;
