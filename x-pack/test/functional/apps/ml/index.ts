/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { KibanaFunctionalTestDefaultProviders } from '../../../types/providers';

// tslint:disable:no-default-export
export default function({ loadTestFile }: KibanaFunctionalTestDefaultProviders) {
  describe('machine learning', function() {
    this.tags(['ciGroup3', 'mlqa']);

    loadTestFile(require.resolve('./pages'));
  });
}
