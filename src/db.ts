import { Pool } from "pg";

const connectionString = 'postgres://qeusjttr:Ac2D9aElWeKF41yzzSATtX1qmNnlrDdL@kesavan.db.elephantsql.com/qeusjttr';

const db = new Pool({ connectionString });

export default db;