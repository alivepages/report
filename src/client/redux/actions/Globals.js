import { 
    IS_LOADING, COMPETENCES_REPOSITORY, OPEN_MENU
} from './types';

export const isLoading = (loading) => {
    return {
        type: IS_LOADING,
        loading
    }
};

export const setCompetences = (competences) => {
    return {
        type: COMPETENCES_REPOSITORY,
        competences
    }
};

export const openMenu = (open) => {
    return {
        type: OPEN_MENU,
        open
    }
};
