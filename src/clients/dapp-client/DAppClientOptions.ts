import { Storage } from '../..'
import { BeaconEvent, BeaconEventHandlerFunction } from '../../events'

export interface DAppClientOptions {
  name: string
  iconUrl?: string
  storage?: Storage
  eventHandlers?: {
    [key in BeaconEvent]?: {
      handler: BeaconEventHandlerFunction
    }
  }
}
