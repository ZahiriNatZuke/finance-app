import {TypeOpEvent} from './operation-event';

export interface OptionSettings {
  iconNew: string,
  Options?: Option[]
}

interface Option {
  icon: string,
  literal: string,
  event: TypeOpEvent,
  color: string
}
