const loanApplicationsQueryExplanation: string = `
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE to_disburse (
  userId UUID REFERENCES allUsers(userId) , --userId FROM USERS TABLE. ATTACH TO EVERY LOAN OFFER CREATED
  loanId UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name_of_lender TEXT, --NAME OF USER CREATING LOAN OFFER
  date_posted TIMESTAMP WITH TIME ZONE DEFAULT current_timestamp,
  expiry_date DATE NOT NULL,
  still_valid BOOLEAN DEFAULT TRUE NOT NULL,
  principal_amount DECIMAL(10,2) NOT NULL, 
  interest_rate DECIMAL(3,2) NOT NULL,
  purpose TEXT NOT NULL,
  term INT NOT NULL,
  link_to_sender_profile TEXT NOT NULL
);
`;
