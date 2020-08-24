export const isLightReducer = (state, action) => {
    switch(action.type){
		case 'TOGGLE':
			return !state			
		default:
			return state;
	}
}
