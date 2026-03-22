import { ClarityIcons, userIcon, moonIcon, sunIcon, vmBugIcon, cogIcon, idBadgeIcon, bookIcon, layersIcon, codeIcon, pluginIcon, helpIcon } from '@cds/core/icon';
import '@cds/core/icon/register.js';
import {
  successStandardIcon,
  errorStandardIcon,
  dotCircleIcon,
  circleIcon,
} from '@cds/core/icon';

export function registerIcons() {
  ClarityIcons.addIcons(
    userIcon,
    moonIcon,
    sunIcon,
    successStandardIcon,
    errorStandardIcon,
    dotCircleIcon,
    circleIcon,
    vmBugIcon,
    cogIcon,
    idBadgeIcon,
    bookIcon,
    layersIcon,
    codeIcon,
    pluginIcon,
    helpIcon
  );
}
