import React from 'react'
import Alert from "react-bootstrap/Alert"

function AlertBanner({ message , variant }) {
  const alertMessage = message ||  "An unexpected error orrcured. Please try agian later." 
 // const alertVariant = variant || "danger";

  return (
    <Alert  style={{ backgroundColor: "red" }} >
      {alertMessage}
    </Alert>
  )
}

export default AlertBanner