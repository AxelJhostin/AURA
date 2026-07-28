create table if not exists public.aura_learning_events (
  id bigint generated always as identity primary key,
  event_id uuid not null unique,
  anonymous_session_id uuid not null,
  event_name text not null check (
    event_name in (
      'mission_started',
      'initial_decision_recorded',
      'signal_selected',
      'source_opened',
      'action_selected',
      'evidence_card_generated',
      'mission_abandoned',
      'transfer_started',
      'transfer_first_move_selected',
      'transfer_reason_selected',
      'transfer_completed'
    )
  ),
  occurred_at timestamptz not null,
  received_at timestamptz not null default now(),
  locale text not null check (locale in ('es', 'en')),
  case_id text check (case_id is null or char_length(case_id) between 1 and 80),
  stage text check (
    stage is null or stage in ('analyze', 'uncover', 'research', 'act', 'transfer')
  ),
  option_id text check (
    option_id is null or char_length(option_id) between 1 and 80
  ),
  duration_ms integer check (
    duration_ms is null or duration_ms between 0 and 3600000
  ),
  transfer_score smallint check (
    transfer_score is null or transfer_score between 0 and 2
  ),
  product_version text not null check (
    char_length(product_version) between 1 and 20
  ),
  constraint aura_learning_events_stage_shape check (
    (event_name in ('mission_started', 'initial_decision_recorded') and stage = 'analyze')
    or (event_name = 'signal_selected' and stage = 'uncover')
    or (event_name = 'source_opened' and stage = 'research')
    or (
      event_name in ('action_selected', 'evidence_card_generated')
      and stage = 'act'
    )
    or (
      event_name = 'mission_abandoned'
      and stage in ('analyze', 'uncover', 'research', 'act')
    )
    or (
      event_name in (
        'transfer_started',
        'transfer_first_move_selected',
        'transfer_reason_selected',
        'transfer_completed'
      )
      and stage = 'transfer'
    )
  ),
  constraint aura_learning_events_duration_shape check (
    (
      event_name in (
        'evidence_card_generated',
        'mission_abandoned',
        'transfer_completed'
      )
      and duration_ms is not null
    )
    or (
      event_name not in (
        'evidence_card_generated',
        'mission_abandoned',
        'transfer_completed'
      )
      and duration_ms is null
    )
  ),
  constraint aura_learning_events_score_shape check (
    (event_name = 'transfer_completed' and transfer_score is not null)
    or (event_name <> 'transfer_completed' and transfer_score is null)
  )
);

comment on table public.aura_learning_events is
  'Anonymous, coded learning events for AURA pilots. No names, emails, free text, IP addresses, or user-agent values are stored.';

alter table public.aura_learning_events enable row level security;

revoke all on table public.aura_learning_events from anon, authenticated;
grant insert on table public.aura_learning_events to service_role;
revoke all on sequence public.aura_learning_events_id_seq from anon, authenticated;
grant usage, select on sequence public.aura_learning_events_id_seq to service_role;

create index if not exists aura_learning_events_session_idx
  on public.aura_learning_events (anonymous_session_id, occurred_at);

create index if not exists aura_learning_events_case_idx
  on public.aura_learning_events (case_id, event_name, occurred_at);
