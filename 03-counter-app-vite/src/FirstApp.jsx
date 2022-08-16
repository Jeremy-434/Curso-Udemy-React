import PropTypes from 'prop-types';

export const FirstApp = ({ title, subTitle, name}) => {

    // console.log(props);
    return (
        <>
            <h2> {title} </h2>
            <p> {subTitle}  </p>
            <h6> {name}  </h6>
        </>
    )
}


FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
}

FirstApp.defaultProps = {
    name: 'No hay nombre',
    subTitle: 'No hay subtitulo',
    // title: 'No hay titulo'
}

