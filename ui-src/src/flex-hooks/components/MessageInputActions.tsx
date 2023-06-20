import * as Flex from '@twilio/flex-ui';

import CannedResponsesDropdown from '../../custom-components/CannedResponsesDropdown';

export const componentName = 'CRMContainer';
export default function addCannedResponsesDropdownToMessageInputActions(
  flex: typeof Flex,
  _manager: Flex.Manager,
) {
  const UILocation = process.env.COMPONENT_UI_LOCATION || '<COMPONENT_UI_LOCATION>';
  const options: Flex.ContentFragmentProps = {
    sortOrder: 4,
  };
  if (UILocation === 'MessageInputActions') {
    flex.MessageInputActions.Content.add(<CannedResponsesDropdown key="canned-responses-dropdown-button" />, options);
  }
};
