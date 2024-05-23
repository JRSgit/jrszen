import zen from '../assets/zen.svg'

import PropTypes from 'prop-types'

function Logo({ size }) {
  // if (!size) { size = 300 }
  return (
    <>
      <img src={zen} alt="logo" className={`${size}`} />
      <h1 className="w-full text-center text-2xl mb-3 text-white">
        JRS zen
      </h1>
    </>

  )
}

Logo.propTypes = {
  size: PropTypes.string.isRequired,
}

export default Logo