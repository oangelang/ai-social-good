-- Challenge categories
create table if not exists challenges (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text not null,
  emoji text not null,
  sdg_mapping text,
  color_class text not null,
  sort_order int not null default 0,
  created_at timestamptz default now()
);

-- Pre-seeded real-world problems per challenge
create table if not exists seeded_problems (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  source_url text,
  location text,
  challenge_id uuid not null references challenges(id) on delete cascade,
  is_featured boolean default false,
  created_at timestamptz default now()
);

-- Pre-seeded solution ideas per problem
create table if not exists seeded_ideas (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  approach_tags text[] default '{}',
  challenge_id uuid not null references challenges(id) on delete cascade,
  problem_id uuid not null references seeded_problems(id) on delete cascade,
  is_featured boolean default false,
  created_at timestamptz default now()
);

-- Live API-generated ideas cached to Supabase
create table if not exists cached_ideas (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text not null,
  approach_tags text[] default '{}',
  challenge_id uuid not null references challenges(id) on delete cascade,
  problem_id uuid not null references seeded_problems(id) on delete cascade,
  generated_at timestamptz default now()
);

-- Similar existing products returned per validation
create table if not exists existing_products (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  url text,
  description text not null,
  similarity_score float,
  idea_id uuid references seeded_ideas(id) on delete cascade,
  cached_idea_id uuid references cached_ideas(id) on delete cascade
);

-- Allow anonymous reads on all tables
alter table challenges enable row level security;
alter table seeded_problems enable row level security;
alter table seeded_ideas enable row level security;
alter table cached_ideas enable row level security;
alter table existing_products enable row level security;

create policy "Public read challenges" on challenges for select using (true);
create policy "Public read seeded_problems" on seeded_problems for select using (true);
create policy "Public read seeded_ideas" on seeded_ideas for select using (true);
create policy "Public read cached_ideas" on cached_ideas for select using (true);
create policy "Public insert cached_ideas" on cached_ideas for insert with check (true);
create policy "Public read existing_products" on existing_products for select using (true);
create policy "Public insert existing_products" on existing_products for insert with check (true);
