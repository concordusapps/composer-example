
define(function() {
  'use strict';
  return function(match) {
    match('', 'index#show');
    match('site', 'site/index#show');
    match('site/other', 'site/other#show');
    match('site/inner', 'inner/index#show');
    return match('site/inner/other', 'inner/other#show');
  };
});
