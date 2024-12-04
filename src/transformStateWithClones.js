'use strict';

/**
 * @param {Object} state1
 * @param {Object[]} actions
 *
 * @return {Object[]}
 */
function transformStateWithClones(state, actions) {
  // write code here
  const history = [];
  const state1 = { ...state };

  for (const action of actions) {
    switch (action.type) {
      case 'addProperties':
        for (const key in action.extraData) {
          state1[key] = action.extraData[key];
        }
        history.push({ ...state1 });
        break;
      case 'removeProperties':
        for (const remove of action.keysToRemove) {
          delete state1[remove];
        }
        history.push({ ...state1 });
        break;
      case 'clear':
        for (const key in state1) {
          delete state1[key];
        }
        history.push({ ...state1 });
        break;
    }
  }

  return history;
}

module.exports = transformStateWithClones;
