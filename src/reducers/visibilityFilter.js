import {FILTERS, ACTION_TYPES} from './../common/utils';

function visibilityFilter(state = FILTERS.ALL, action) {
    switch (action.type) {

        // Set visibility filter
        case ACTION_TYPES.VISIBILITY_FILTER:
            return action.filter;

        // return default state in case of no matched action found
        default:
            return state;
    }
}

export default visibilityFilter;