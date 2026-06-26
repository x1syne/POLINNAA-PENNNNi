create table if not exists public.booking_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  contact text not null,
  pet text,
  service text,
  comment text,
  source text not null default 'website',
  status text not null default 'new'
);

alter table public.booking_requests enable row level security;

create policy "Allow public booking inserts"
on public.booking_requests
for insert
to anon
with check (true);

create policy "Only authenticated users can read bookings"
on public.booking_requests
for select
to authenticated
using (true);
