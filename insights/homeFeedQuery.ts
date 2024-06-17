const homeFeedQueryExplanation: string = `
CREATE TABLE homeFeed (
  lenderId UUID NOT NULL,
  lenderName TEXT NOT NULL,
  title TEXT NOT NULL,
  purpose TEXT NOT NULL,
  date_posted DATE NOT NULL,
  expiry_date DATE NOT NULL,
  number_of_applicants INT DEFAULT 0,
  lender_credit_score INT NOT NULL,
  interest_rate DECIMAL(3,2) NOT NULL,
  principal_offer DECIMAL(10,2) NOT NULL,
  instalment DECIMAL(10,2) NOT NULL,
  total_due DECIMAL(10,2)
);
`;
