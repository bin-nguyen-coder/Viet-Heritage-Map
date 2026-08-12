-- Init script for PostgreSQL with pgvector extension
-- This runs automatically when postgres container starts

-- Enable pgvector extension
CREATE EXTENSION IF NOT EXISTS vector;

-- The tables will be created by SQLAlchemy's Base.metadata.create_all()
-- This script just ensures the extension is available