import * as Flex from '@twilio/flex-ui';

import CannedResponsesDropdown from '../../custom-components/CannedResponsesDropdown';
import { getUILocation } from '../../config';

export const componentName = 'CRMContainer';
export const componentHook = function addCannedResponsesDropdownToMessageInputActions(
  flex: typeof Flex,
  _manager: Flex.Manager,
) {
  const options: Flex.ContentFragmentProps = {
    sortOrder: 4,
  };
  if (getUILocation() === 'MessageInputActions') {
    flex.MessageInputActions.Content.add(<CannedResponsesDropdown key="canned-responses-dropdown-button" />, options);
  }
};
