/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { getDocLink } from 'ui/documentation_links';

import {
  EuiCode,
  EuiFlyout,
  EuiFlyoutBody,
  EuiIcon,
  EuiLink,
  EuiText,
} from '@elastic/eui';

export const ScriptingHelpFlyout = ({
  isVisible = false,
  onClose = () => {},
}) => {
  return isVisible ? (
    <EuiFlyout onClose={onClose} size="s">
      <EuiFlyoutBody>
        <EuiText>
          <h3>Scripting help</h3>
          <p>
            By default, Kibana scripted fields use {(
              <EuiLink
                target="_window"
                href={getDocLink('scriptedFields.painless')}
              >
                Painless <EuiIcon type="link"/>
              </EuiLink>
            )}, a simple and secure scripting language designed specifically for use with Elasticsearch,
            to access values in the document use the following format:
          </p>
          <p>
            <EuiCode>doc[&apos;some_field&apos;].value</EuiCode>
          </p>
          <p>
            Painless is powerful but easy to use. It provides access to many {(
              <EuiLink
                target="_window"
                href={getDocLink('scriptedFields.painlessApi')}
              >
                native Java APIs <EuiIcon type="link"/>
              </EuiLink>
            )}. Read up on its {(
              <EuiLink
                target="_window"
                href={getDocLink('scriptedFields.painlessSyntax')}
              >
              syntax <EuiIcon type="link"/>
              </EuiLink>
            )} and you&apos;ll be up to speed in no time!
          </p>
          <p>
            Kibana currently imposes one special limitation on the painless scripts you write. They cannot contain named functions.
          </p>
          <p>
            Coming from an older version of Kibana? The {(
              <EuiLink
                target="_window"
                href={getDocLink('scriptedFields.luceneExpressions')}
              >
                Lucene Expressions <EuiIcon type="link"/>
              </EuiLink>
            )} you know and love are still available. Lucene expressions are a lot like JavaScript,
              but limited to basic arithmetic, bitwise and comparison operations.
          </p>
          <p>
            There are a few limitations when using Lucene Expressions:
          </p>
          <ul>
            <li> Only numeric, boolean, date, and geo_point fields may be accessed</li>
            <li> Stored fields are not available</li>
            <li> If a field is sparse (only some documents contain a value), documents missing the field will have a value of 0</li>
          </ul>
          <p>
            Here are all the operations available to lucene expressions:
          </p>
          <ul>
            <li> Arithmetic operators: + - * / %</li>
            <li> Bitwise operators: | & ^ ~ &#x3C;&#x3C; &#x3E;&#x3E; &#x3E;&#x3E;&#x3E;</li>
            <li> Boolean operators (including the ternary operator): && || ! ?:</li>
            <li> Comparison operators: &#x3C; &#x3C;= == &#x3E;= &#x3E;</li>
            <li> Common mathematic functions: abs ceil exp floor ln log10 logn max min sqrt pow</li>
            <li> Trigonometric library functions: acosh acos asinh asin atanh atan atan2 cosh cos sinh sin tanh tan</li>
            <li> Distance functions: haversin</li>
            <li> Miscellaneous functions: min, max</li>
          </ul>
        </EuiText>
      </EuiFlyoutBody>
    </EuiFlyout>
  ) : null;
};

ScriptingHelpFlyout.displayName = 'ScriptingHelpFlyout';
