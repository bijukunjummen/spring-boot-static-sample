(function() {
  'use strict';

  angular
    .module('springBootStaticSample')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
