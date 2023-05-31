export const HigherOrderServices = Component => {
    return(props) => {
        return(
            <Component {...props} />
        )
    }
}