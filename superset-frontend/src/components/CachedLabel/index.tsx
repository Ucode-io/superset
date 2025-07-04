/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import { useState, MouseEventHandler, FC } from 'react';

import { css, t } from '@superset-ui/core';
import Label from 'src/components/Label';
import { Tooltip } from 'src/components/Tooltip';
import { TooltipContent } from './TooltipContent';
import Icons from '../Icons';

export interface CacheLabelProps {
  onClick?: MouseEventHandler<HTMLElement>;
  cachedTimestamp?: string;
  className?: string;
}

const CacheLabel: FC<CacheLabelProps> = ({
  className,
  onClick,
  cachedTimestamp,
}) => {
  const [hovered, setHovered] = useState(false);

  const labelType = hovered ? 'primary' : 'default';
  return (
    <Tooltip
      title={<TooltipContent cachedTimestamp={cachedTimestamp} />}
      id="cache-desc-tooltip"
    >
      <Label
        className={`${className}`}
        css={theme => css`
          gap: ${theme.gridUnit * 0.5}px;
        `}
        type={labelType}
        onClick={onClick}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
      >
        {t('Cached')}
        <Icons.SyncOutlined iconSize="m" />
      </Label>
    </Tooltip>
  );
};

export default CacheLabel;
