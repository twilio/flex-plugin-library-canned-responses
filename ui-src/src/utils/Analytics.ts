import FlexTelemetry from '@twilio/flex-ui-telemetry';
import packageJSON from '../../package.json';

export enum Event {
  CANNED_RESPONSES_SELECTED = 'Canned Suggestion Selected',
  CANNED_RESPONSES_SENT = 'Canned Suggestion Sent',
}

export const Analytics = new FlexTelemetry({
  source: 'flexui',
  role: packageJSON.name,
  plugin: packageJSON.name,
  pluginVersion: packageJSON.version,
  originalPluginName: packageJSON.id,
});
