const intialstate = {
    table_number : null
}

export default function tablereducer(state=intialstate,action){
    const{type,payload} = action;
    switch(type){
        case "SETTABLENUMBER":
            return {...state,table_number:payload}
            case "RESETTABLENUMBER" :
                return{...state,table_number:null}
                default:
                    return state
    }

}