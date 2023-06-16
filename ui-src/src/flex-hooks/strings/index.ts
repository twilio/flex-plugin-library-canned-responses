import * as Flex from '@twilio/flex-ui';

// Export the template names as an enum for better maintainability when accessing them elsewhere
export enum StringTemplates {
  CannedResponses = 'PSCannedResponses',
  ErrorFetching = 'PSCannedResponsesErrorFetching',
}

const customStrings = {
  [StringTemplates.CannedResponses]: 'Canned Chat Responses',
  [StringTemplates.ErrorFetching]: 'There was an error fetching responses. Please reload the page.',
};

export default (flex: typeof Flex, manager: Flex.Manager) => {
  manager.strings = {
    ...customStrings,
    ...manager.strings,
  } as any;
};