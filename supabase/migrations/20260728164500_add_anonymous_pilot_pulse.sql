alter table public.aura_learning_events
  drop constraint if exists aura_learning_events_event_name_check,
  drop constraint if exists aura_learning_events_stage_check,
  drop constraint if exists aura_learning_events_stage_shape;

alter table public.aura_learning_events
  add constraint aura_learning_events_event_name_check check (
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
      'transfer_completed',
      'pilot_baseline_recorded',
      'pilot_exit_recorded'
    )
  ),
  add constraint aura_learning_events_stage_check check (
    stage is null
    or stage in ('analyze', 'uncover', 'research', 'act', 'transfer', 'survey')
  ),
  add constraint aura_learning_events_stage_shape check (
    (
      event_name in ('mission_started', 'initial_decision_recorded')
      and stage = 'analyze'
    )
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
    or (
      event_name in ('pilot_baseline_recorded', 'pilot_exit_recorded')
      and stage = 'survey'
      and case_id = 'pilot-evaluation'
      and option_id ~ '^confidence-[1-5]$'
    )
  );

comment on constraint aura_learning_events_stage_shape
  on public.aura_learning_events is
  'Restricts every coded event to its expected stage; survey events contain only a 1-5 confidence option.';

alter table public.aura_learning_events enable row level security;
revoke all on table public.aura_learning_events from anon, authenticated;
revoke all on table public.aura_learning_events from service_role;
grant select, insert on table public.aura_learning_events to service_role;
