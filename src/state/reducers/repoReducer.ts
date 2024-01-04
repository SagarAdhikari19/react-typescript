interface RepositoriesState {

    loading: boolean;
    error: string | null;
    data: string[];
}


// interface action {
//     type: string;
//     payload?: any;
// }

interface SearchRepoAction {

    type: ActionType.SEARCH_REPO;

}

interface SearchRepoSucessAction {

    type: ActionType.SEARCH_REPO_SUCCESS;
    payload: string[];


}
interface SearchRepoErrorAction {

    type: ActionType.SEARCH_REPO_ERROR;
    payload: string;

}


type Action =
    | SearchRepoAction
    | SearchRepoSucessAction
    | SearchRepoErrorAction;


enum ActionType {
    SEARCH_REPO = 'search_repo',
    SEARCH_REPO_SUCCESS = 'search_repo_success',
    SEARCH_REPO_ERROR = 'search_repo_error'
}



const reducer = (state: RepositoriesState, action: Action): RepositoriesState => {//indicates that the function returns a value of type RepositoriesState.


    switch (action.type) {

        case ActionType.SEARCH_REPO:
            return {
                loading: true, error: null, data: []

            }
        case ActionType.SEARCH_REPO_SUCCESS:
            return {
                loading: false, error: null, data: action.payload
            }

        case ActionType.SEARCH_REPO_ERROR:
            return {
                loading: false, error: action.payload, data: []

            }

        default:

            return state;

    }

}

export default reducer;