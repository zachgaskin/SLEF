export const colors = {
    mainWhite: '#fff',
    mainBlack: '#262626',
    mainYellow: '#f3bf29',
    mainOrange: '#f57e20',
    mainGrey: '#474747',
}

export const transDefault = 'transition:all 0.5s ease-in-out'
export const transObject = ({
    property = 'all',
    time = '0.5s',
    type = 'ease-in-out',
}) => {
    return 'transition: ${property} ${time} ${type}'
}