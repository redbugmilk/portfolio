CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS devices (
   id uuid DEFAULT uuid_generate_v4(),
   name  VARCHAR NOT NULL,
   brand VARCHAR NOT NULL,
   createdAt TIMESTAMPTZ DEFAULT now(),
   PRIMARY KEY (id)
);