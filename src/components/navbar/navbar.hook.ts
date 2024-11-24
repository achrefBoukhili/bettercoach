import { useState } from 'react'

const useNavbar = () => {
  const [menuExpanded, setMenuExpanded] = useState(false)

  return {
    menuExpanded,
    setMenuExpanded,
  }
}

export default useNavbar
