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

    type: 'search_repo';

}

interface SearchRepoSucessAction {

    type: 'search_repo_success';
    payload: string[];


}
interface SearchRepoErrorAction {

    type: 'search_repo_error';
    payload: string;

}





const reducer = (state: RepositoriesState, action: | SearchRepoAction | SearchRepoSucessAction | SearchRepoErrorAction): RepositoriesState => {//indicates that the function returns a value of type RepositoriesState.


    switch (action.type) {

        case 'search_repo':
            return {
                loading: true, error: null, data: []

            }
        case 'search_repo_success':
            return {
                loading: false, error: null, data: action.payload
            }

        case 'search_repo_error':
            return {
                loading: false, error: action.payload, data: []

            }

        default:

            return state;

    }

}

export default reducer;