-- =========================================================================
-- MONT FINANCE (montfinance.com.br) — Script de Configuração do Supabase
-- Rode este script no SQL Editor do novo projeto no Supabase
-- =========================================================================

create table if not exists public.leads (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now() not null,
  name text not null,
  email text not null,
  whatsapp text not null,
  revenue text not null,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  utm_term text
);

-- Ativa segurança em nível de linha (RLS)
alter table public.leads enable row level security;

-- Remove política anterior caso já exista
drop policy if exists "Permitir insercao publica de leads" on public.leads;

-- Permite que visitantes do site (chave anon) cadastrem leads pelo formulário
create policy "Permitir insercao publica de leads"
  on public.leads
  for insert
  to anon
  with check (true);
