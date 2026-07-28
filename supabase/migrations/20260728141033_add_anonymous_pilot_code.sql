alter table public.aura_learning_events
  add column if not exists pilot_code text;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'aura_learning_events_pilot_code_format'
      and conrelid = 'public.aura_learning_events'::regclass
  ) then
    alter table public.aura_learning_events
      add constraint aura_learning_events_pilot_code_format
      check (
        pilot_code is null
        or pilot_code ~ '^AURA-[ABCDEFGHJKLMNPQRSTUVWXYZ23456789]{12}$'
      );
  end if;
end $$;

comment on column public.aura_learning_events.pilot_code is
  'Random capability code grouping anonymous pilot sessions; it contains no participant identity.';

revoke all on table public.aura_learning_events from anon, authenticated;
grant select, insert on table public.aura_learning_events to service_role;

create index if not exists aura_learning_events_pilot_activity_idx
  on public.aura_learning_events (pilot_code, occurred_at desc)
  where pilot_code is not null;
