begin;

create extension if not exists pgtap with schema extensions;
set local search_path = public, extensions;

select plan(12);

select has_table(
  'public',
  'aura_learning_events',
  'the anonymous learning-events table exists'
);

select has_column(
  'public',
  'aura_learning_events',
  'pilot_code',
  'pilot capability codes are part of the schema'
);

select has_index(
  'public',
  'aura_learning_events',
  'aura_learning_events_pilot_activity_idx',
  'pilot activity has a bounded report index'
);

select is(
  (
    select relrowsecurity
    from pg_class
    where oid = 'public.aura_learning_events'::regclass
  ),
  true,
  'row level security is enabled'
);

select is(
  has_table_privilege('anon', 'public.aura_learning_events', 'INSERT'),
  false,
  'anon cannot insert directly'
);

select is(
  has_table_privilege('anon', 'public.aura_learning_events', 'SELECT'),
  false,
  'anon cannot read raw events'
);

select is(
  has_table_privilege(
    'service_role',
    'public.aura_learning_events',
    'INSERT'
  ),
  true,
  'service_role can insert validated events'
);

select is(
  has_table_privilege(
    'service_role',
    'public.aura_learning_events',
    'SELECT'
  ),
  true,
  'service_role can build aggregate reports'
);

select lives_ok(
  $$
    insert into public.aura_learning_events (
      event_id,
      anonymous_session_id,
      event_name,
      occurred_at,
      locale,
      case_id,
      stage,
      duration_ms,
      transfer_score,
      product_version,
      pilot_code
    ) values (
      '00000000-0000-4000-8000-000000000101',
      '00000000-0000-4000-8000-000000000102',
      'transfer_completed',
      now(),
      'es',
      'scholarship-link-v2',
      'transfer',
      15000,
      6,
      '0.9.0',
      'AURA-ABCDEFGHJKLM'
    )
  $$,
  'a valid six-behavior transfer event is accepted'
);

select throws_ok(
  $$
    insert into public.aura_learning_events (
      event_id,
      anonymous_session_id,
      event_name,
      occurred_at,
      locale,
      case_id,
      stage,
      duration_ms,
      transfer_score,
      product_version
    ) values (
      '00000000-0000-4000-8000-000000000103',
      '00000000-0000-4000-8000-000000000104',
      'transfer_completed',
      now(),
      'es',
      'scholarship-link-v2',
      'transfer',
      15000,
      7,
      '0.9.0'
    )
  $$
);

select throws_ok(
  $$
    insert into public.aura_learning_events (
      event_id,
      anonymous_session_id,
      event_name,
      occurred_at,
      locale,
      case_id,
      stage,
      product_version,
      pilot_code
    ) values (
      '00000000-0000-4000-8000-000000000105',
      '00000000-0000-4000-8000-000000000106',
      'mission_started',
      now(),
      'es',
      'energy-memory',
      'analyze',
      '0.9.0',
      'AURA-INVALID00000'
    )
  $$
);

select throws_ok(
  $$
    insert into public.aura_learning_events (
      event_id,
      anonymous_session_id,
      event_name,
      occurred_at,
      locale,
      case_id,
      stage,
      option_id,
      product_version
    ) values (
      '00000000-0000-4000-8000-000000000107',
      '00000000-0000-4000-8000-000000000108',
      'pilot_exit_recorded',
      now(),
      'es',
      'pilot-evaluation',
      'survey',
      'confidence-6',
      '0.9.0'
    )
  $$
);

select * from finish();
rollback;
