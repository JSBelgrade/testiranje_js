'use strict';

function checkUsername(username) {
  if (username) {
    return username.length >= 6 && username.length <= 20;
  }

  return 'error';
}
