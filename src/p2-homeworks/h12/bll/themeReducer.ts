enum ActionsTypes {
    SET_COLOR_SCHEME = 'SET-COLOR-SCHEME',
}

export enum ColorSchemeTypes {
    DEFAULT = 'default',
    DARK = 'dark',
    RED = 'red',
}

type SetColorSchemeAction = ReturnType<typeof changeThemeC>

type RootAction = SetColorSchemeAction

type initialStateType = typeof initialState

const initialState = {
    activeTheme: 'DEFAULT',
    themes:Object.values(ColorSchemeTypes)
}

const themeReducer = (
    state: initialStateType = initialState,
    { type, payload }: RootAction
) => {
    switch (type) {
        case ActionsTypes.SET_COLOR_SCHEME:
            return { ...state, activeTheme: payload }
        default:
            return state
    }
}

export const changeThemeC = (activeTheme: ColorSchemeTypes) => ({
    type: ActionsTypes.SET_COLOR_SCHEME,
    payload: activeTheme,
})

export default themeReducer