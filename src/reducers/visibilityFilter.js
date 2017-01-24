import {FILTERS_TODO} from './../common/utils';

function visibilityFilter(state = FILTERS_TODO.ALL, action) {
    switch (action.type) {
        case 'VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
}

export default visibilityFilter;